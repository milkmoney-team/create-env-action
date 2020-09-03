# Create .env Action

This action creates a `.env` file with provided inputs

## Inputs

Any input specified with `with:` will be written to the file.

## Example Usage

```yml
uses: milkmoney-team/create-env-action@v1
with:
  BASE_URL: example.com
  TOKEN: 123456-78910
```

produces an `.env` file like:

```env
BASE_URL=example.com
TOKEN=123456-78910
```
