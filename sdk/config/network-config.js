module.exports = {
  default_network: 'testnet',
  livenet: {
    name: 'livenet',
    account_number_value: 0x00,
    core_value: 0x00,
    api_server: 'https://api.bitmark.com',
    api_version: 'v3'
  },
  testnet: {
    name: 'testnet',
    account_number_value: 0x01,
    core_value: 0x01,
    api_server: 'https://api.test.bitmark.com',
    api_version: 'v3'
  }
};
