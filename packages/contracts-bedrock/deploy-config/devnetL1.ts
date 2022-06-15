import { ethers } from 'ethers'

const config = {
  submissionInterval: 6,
  l2BlockTime: 2,
  genesisOutput: ethers.constants.HashZero,
  historicalBlocks: 0,
  startingBlockTimestamp:
    parseInt(process.env.L2OO_STARTING_BLOCK_TIMESTAMP, 16) || Date.now(),
  sequencerAddress: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',

  l2CrossDomainMessengerOwner: ethers.constants.AddressZero,
  gasPriceOracleOwner: ethers.constants.AddressZero,
  gasPriceOracleOverhead: 0,
  gasPriceOracleScalar: 0,
  gasPriceOracleDecimals: 0,

  l1BlockInitialNumber: 0,
  l1BlockInitialTimestamp: 0,
  l1BlockInitialBasefee: 0,
  l1BlockInitialHash: ethers.constants.HashZero,
  l1BlockInitialSequenceNumber: 0,

  proxyAdmin: '0x829BD824B016326A401d083B33D092293333A830',
  genesisBlockExtradata: ethers.utils.hexConcat([
    '0x',
    '0x' + '00'.repeat(32),
    '0xca062b0fd91172d89bcd4bb084ac4e21972cc467',
    '0x' + '00'.repeat(65),
  ]),
  genesisBlockGasLimit: '0xE4E1C0',
  genesisBlockChainid: 901,
  fundDevAccounts: true,
}

export default config
