const fs = require('fs')
const path = require('path')

const rawJson = fs.readFileSync(path.join(process.cwd(), 'package.json'))
const packageJson = JSON.parse(rawJson)
const [versionSplited] = packageJson.version.split('.')
console.log({packageJson: JSON.parse(rawJson)})