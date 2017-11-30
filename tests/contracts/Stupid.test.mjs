import path from 'path'
import test from 'blue-tape'

import Web3 from 'web3'

import {deploy} from '../../src/util/contract'

const contractFilename = path.resolve('src/contracts/Stupid.sol')

test('Stupid', async t => {
  const web3 = new Web3('http://localhost:8545')
  const coinbaseAddress = await web3.eth.getCoinbase()
  const deployed = await deploy(contractFilename, coinbaseAddress, 4700000)
  const idiotic = await deployed.methods.dumb().call()

  t.equal(idiotic, 'idiotic')
})
