require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food plunge remember sad hole gown light army gate'; 
let testAccounts = [
"0x10edb46ea822a5313bc124f43727e0a26057191fbf6e72be710e46514ae8c267",
"0x4a3e64c9992fc5bca26892db7580953c24fbcdc81a2f816a2a6574248b854ef1",
"0x8d0b0f89e9ed400fcf667f299c9f6adb018734d1f7f39621dd249272a8b92105",
"0x039b10c97bc204d435d056ba17413413553c3d0b8ecf1102fd5e4c383df451fc",
"0x80219758088980c71675eb7466ba8ed2af28695359d836e71fa5d1ade725ffba",
"0x0fe5320b6daa5f8da980b6fa4864ad57189fa0256df27e1394099d06f6becc82",
"0x75274fba6ceae4088879b3ff67ff07e11a66862f992dbfd698c0f3c5e536756d",
"0xaa8f663bc49ae4dc12720a9a1c87898ca06583b2b1c13c843180adc89b14f328",
"0x78177cb0c05660429a88a1927cbbf2ff3dab5adb4d536fd1ec039b356d4d53a4",
"0xed06d73b2ee65ff251dc0b6dd27f6a6688e7c84730416caba6c5b3927096cd33"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

