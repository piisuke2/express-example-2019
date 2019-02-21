import s from 'shelljs'
const config = require('./tsconfig.json')
const outDir = config.compilerOptions.outDir

s.rm('-rf', outDir)
s.mkdir(outDir)
s.cp('.env', `${outDir}/.env`)
s.mkdir('-p', `${outDir}/api/swagger`)
s.cp('src/api/swagger/specification.yaml', `${outDir}/api/swagger/specification.yaml`)
s.cp('-R', 'public', `${outDir}/public`)
