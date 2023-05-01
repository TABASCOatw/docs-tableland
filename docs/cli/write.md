## write

`tableland write <statement>` _(string)_
Run a mutating SQL statement against a remote table.

```bash
tableland write <statement>

Positionals:
  statement  SQL write statement                             [string] [required]

Options:
      --help        Show help                                          [boolean]
  -k, --privateKey  Private key string                                  [string]
      --chain       The EVM compatible chain to target
                                           [string] [default: "maticmum"]
```

The `write` command allows for vanilla SQL `INSERT`, `UPDATE`, and `DELETE` statements. One key aspect to keep in mind when working with tables is that you must specify the table `name` that you get back from the `create` command.

### Example

Using the `write` command will return a value of the blockchain’s _transaction hash:_

```bash
tableland write "INSERT INTO cli_demo_table_31337_2 VALUES (1, 'Bobby Tables');"
```

```json
{
  meta: {
    duration: 118.1787919998169,
    txn: {
      tableId: '2',
      transactionHash: '0x2406508ff28f673e9a080b6295af4cfd0de75a199f2a9044a1cad580cd0aae0a',
      blockNumber: 135,
      chainId: 31337,
      wait: [AsyncFunction: wait],
      name: 'cli_demo_table_31337_2',
      prefix: 'cli_demo_table'
    }
  },
  success: true,
  results: [],
  link: ''
}
```

## Using ENS

:::warning
ENS support is very experimental. Long term support is not gaurunteed.
:::warning

You must specify the `enableEnsExperiment` flag, either in your `.tablelandrc` file or your flags. You must also specify an `ensProviderUrl`, which should use a provider for an ENS compatible testnet or mainnet.

If an ENS text record has a record corresponding to a table, you can fetch it like so.

```
tableland write "insert into [example.foo.bar.eth] (id, message) values (1, 'Some message');"
```

See `namespace` command for more details on how to add tables to ENS.
