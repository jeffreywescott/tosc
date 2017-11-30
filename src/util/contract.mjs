import fs from 'fs'
import path from 'path'
import solc from 'solc'
import Web3 from 'web3'

export const compile = filename => {
  const input = fs.readFileSync(filename)
  return solc.compile(input.toString(), 1)
}

export const deploy = async (filename, from, gas) => {
  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  const coinbaseAddress = await web3.eth.getCoinbase()
  const compiled = compile(filename)
  const [contractName] = Object.keys(compiled.contracts)
  const compiledContract = compiled.contracts[contractName]
  const jsonInterface = JSON.parse(compiledContract.interface)
  const contract = new web3.eth.Contract(jsonInterface)
  const deployed = await contract
    .deploy({data: `0x${compiledContract.bytecode}`})
    .send({from, gas})
  return deployed
}
