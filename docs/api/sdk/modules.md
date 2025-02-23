---
id: "modules"
title: "@tableland/sdk"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [helpers](namespaces/helpers.md)

## Classes

- [ApiError](classes/ApiError.md)
- [Database](classes/Database.md)
- [Registry](classes/Registry.md)
- [Statement](classes/Statement.md)
- [Validator](classes/Validator.md)

## Interfaces

- [CreateManyParams](interfaces/CreateManyParams.md)
- [CreateTableParams](interfaces/CreateTableParams.md)
- [Metadata](interfaces/Metadata.md)
- [MutateManyParams](interfaces/MutateManyParams.md)
- [MutateOneParams](interfaces/MutateOneParams.md)
- [Named](interfaces/Named.md)
- [Parameters](interfaces/Parameters.md)
- [Result](interfaces/Result.md)
- [RunSQLParams](interfaces/RunSQLParams.md)
- [Runnable](interfaces/Runnable.md)
- [SetParams](interfaces/SetParams.md)
- [Table](interfaces/Table.md)
- [TableFormat](interfaces/TableFormat.md)
- [TableIdentifier](interfaces/TableIdentifier.md)
- [TransferParams](interfaces/TransferParams.md)

## References

### CreateOneParams

Renames and re-exports [CreateTableParams](interfaces/CreateTableParams.md)

## Type Aliases

### BaseType

Ƭ **BaseType**: `string` \| `boolean` \| `number` \| `bigint` \| `Uint8Array` \| ``null`` \| `undefined` \| `Date` \| `SQL` \| `Record`<`string`, `any`\>

#### Defined in

@tableland/sdk/src/helpers/binding.ts:90

___

### CreateParams

Ƭ **CreateParams**: [`CreateTableParams`](interfaces/CreateTableParams.md) \| [`CreateManyParams`](interfaces/CreateManyParams.md)

#### Defined in

@tableland/sdk/src/registry/create.ts:78

___

### MutateParams

Ƭ **MutateParams**: [`MutateOneParams`](interfaces/MutateOneParams.md) \| [`MutateManyParams`](interfaces/MutateManyParams.md)

#### Defined in

@tableland/sdk/src/registry/run.ts:76

___

### ObjectsFormat

Ƭ **ObjectsFormat**<`T`\>: `T`[]

ObjectsFormat represents an array of rows as key/value objects.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

@tableland/sdk/src/validator/query.ts:21

___

### QueryParams

Ƭ **QueryParams**<`T`\>: `BaseParams` & { `format?`: `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Format` |

#### Defined in

@tableland/sdk/src/validator/query.ts:25

___

### TransactionReceipt

Ƭ **TransactionReceipt**: `Camelize`<`AssertedResponse`\>

#### Defined in

@tableland/sdk/src/validator/receipt.ts:26

___

### ValueOf

Ƭ **ValueOf**<`T`\>: `T`[keyof `T`]

ValueOf represents only the values of a given keyed interface.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

@tableland/sdk/src/validator/query.ts:8

___

### ValuesType

Ƭ **ValuesType**: [`BaseType`](modules.md#basetype) \| [`BaseType`](modules.md#basetype)[] \| `Record`<`string`, [`BaseType`](modules.md#basetype)\>

#### Defined in

@tableland/sdk/src/helpers/binding.ts:102

___

### WaitableTransactionReceipt

Ƭ **WaitableTransactionReceipt**: [`TransactionReceipt`](modules.md#transactionreceipt) & [`Wait`](interfaces/helpers.Wait.md)<[`TransactionReceipt`](modules.md#transactionreceipt) & [`Named`](interfaces/Named.md)\> & [`Named`](interfaces/Named.md)

WaitableTransactionReceipt represents a named TransactionReceipt with a wait method.
See the Validator spec in the docs for more details.

#### Defined in

@tableland/sdk/src/registry/utils.ts:34
