const core = require('@actions/core')
const fs = require('fs')

try {
  const DELIM = 'INPUT_'
  const inputs = Object.entries(process.env).filter(([key, val]) => key.startsWith(DELIM))
  console.log(inputs);
  const content = inputs.map(([key, val]) => `${key.substring(DELIM.length)}=${val}`).join('\n')
  console.log(content);
  fs.writeFileSync('.env', content)
  console.log(`Wrote env variables ${inputs.map(([key]) => key).join(', ')}`)
} catch (error) {
  core.setFailed(error.message);
}