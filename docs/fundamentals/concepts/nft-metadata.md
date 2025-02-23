---
title: NFT metadata
description: Understand the basics of storing and querying ERC721 metadata in table.
keywords:
  - nfts
  - nft metadata
  - erc721 metadata
---

Today, the primary standard for Non-Fungible Tokens (NFTs) is [Ethereum's ERC-721 Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721) as well as the [Ethereum ERC-1155 Multi Token Standard](https://eips.ethereum.org/EIPS/eip-1155). Platforms such as OpenSea have adopted these NFT standards, along with [modifications of their own](https://docs.opensea.io/docs/metadata-standards), to support a wide range of NFT projects.

:::tip
To learn how to actually store and query NFT metadata in tables, check out the [crafting NFT metadata playbook](/playbooks/walkthroughs/nft-metadata).
:::

## Highly structured data

NFTs use structured metadata to describe the token's essential properties, which is a perfect use case for relational databases. Many encodings and data formats can be used, but the de-facto standard is to store metadata as a JSON object, encoded to a UTF-8 byte string. Here's an example of some JSON metadata for an NFT taken from the [OpenSea metadata standards](https://docs.opensea.io/docs/metadata-standards#metadata-structure) page:

```json
{
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
  "external_url": "https://openseacreatures.io/3",
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
  "name": "Dave Starbelly",
  "attributes": [ ... ],
}
```

### ERC721

There are many ways to structure metadata for an NFT, and a lot of the details depend on the specific use cases for a given NFT platform. The example above uses the schema defined in the [ERC721](https://eips.ethereum.org/EIPS/eip-721) standard mentioned previously. Generally speaking, NFT creators use these standards so that platform have a unified way to consume the data. OpenSea’s [metadata doc](https://docs.opensea.io/docs/metadata-standards) or Enjin’s [metadata doc](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema) are good starting places to learn more about the expected content in your metadata.

If we expand the `attributes` array, you'll notice the objects stored with keys like `display_type`, `trait_type`, and `value`. It is highly structured data.

```json
{
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
  "external_url": "https://openseacreatures.io/3",
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
  "name": "Dave Starbelly",
  "attributes": [
    {
      "display_type": "string",
      "trait_type": "Base",
      "value": "Starfish"
    },
    {
      "display_type": "number",
      "trait_type": "Level",
      "value": 5
    },
    {
      "display_type": "string",
      "trait_type": "Personality",
      "value": "Sad"
    }
  ]
}
```

### ERC1155

You can use the [ERC1155 metadata standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema) JSON schema and map these values into table rows and columns. The ERC1155 metadata is _almost_ identical to the [ERC-721 metadata standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md), with the inclusion of more rich properties.

```json
{
  "name": "Asset Name",
  "description": "Lorem ipsum...",
  "image": "https://s3.amazonaws.com/your-bucket/images/{id}.png",
  "properties": {
    "simple_property": "example value",
    "rich_property": {
      "name": "Name",
      "value": "123",
      "display_value": "123 Example Value",
      "class": "emphasis",
      "css": {
        "color": "#ffffff",
        "font-weight": "bold",
        "text-decoration": "underline"
      }
    },
    "array_property": {
      "name": "Name",
      "value": [1, 2, 3, 4],
      "class": "emphasis"
    }
  }
}
```

## Design

In general, there are top-level keys and a nested attributes array of trait objects. There are plenty of ways to design this, but a common pattern is to set up two table to hold your metadata: `attributes`, and `lookups`. The `attributes` hold token-specific traits, and the `lookups` holds "static"-ish data that _may_ be updated in the future but is the same base value for all tokens (like an IPFS CID pointing to a directory).

Instead of storing NFT metadata as static JSON files, you can put that data into tables. A very simplified representation could look like the following:

| id  | display_type | trait_type | value  |
| --- | ------------ | ---------- | ------ |
| 1   | string       | color      | blue   |
| 2   | string       | color      | yellow |

This gives rise to dynamism and composability because:

1. You can define who or what can change the data and how.
2. You (or anyone) can query the data and transform it with SQL (e.g., turning into JSON).

If some data were to get updated, like changing a value from `blue` to `red`, that would also change the metadata itself because it is _composed with read queries_, too.

| id  | display_type | trait_type | value   |
| --- | ------------ | ---------- | ------- |
| 1   | string       | color      | **red** |
| 2   | string       | color      | yellow  |

Thus, when an NFT is rendered somewhere, the associated `value` would also change. Taking the ERC721 compliant metadata, one of those nested `attributes` can now dynamically update with a JSON response object crafted with SQL:

```json
{
  "display_type": "string",
  "trait_type": "color",
  "value": "red" // Previously, was `blue`
}
```

## Next steps

Looking for more? Check out the page on [how to build an NFT](/how-to-build-an-nft), including additional resources for defining an [optimal SQL table structure](/playbooks/walkthroughs/nft-metadata) or [building a dynamic NFT in Solidity](/tutorials/dynamic-nft-solidity).
