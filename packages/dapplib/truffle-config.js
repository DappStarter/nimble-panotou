require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan return mad social inner knife equal giggle'; 
let testAccounts = [
"0x5144d2bcb412e09f1565ab881080b13b75312354ff5b46207f4e85b9a367658f",
"0x8dfbdc680a3f3366fdea371f334aeaae6900f56075288d85e6bdb3d62171e300",
"0x0e5714c5affad1d7444b1f47f1362f3d590c3f9ba17243a2c83a85ce600aa763",
"0x2a967adcebe3f86bb310f134cd874f490919b31276e4abeeb4cb52846ed247c7",
"0x4cdd3eb47f728b8de92f09fe5231eac9d85fd5df8bd18730031869f0935c1554",
"0xe77a56646c5cb6536a64b16758e2370f8ea6a3df4e9ea5bbe563b1b0691962d8",
"0x2b76dd7f38c3184dd442dafb7db47bdb35bed03be26537cc625dba0132db8762",
"0x641c697f6ae19404ff830602a7eec8ed744db38e973b0977c0076754bde9c6a2",
"0xf4ee33c9c7d8d2eb424620c7c78df7118548f0e66b0e6660656284ef486478e9",
"0xd8f7f8c9d99cb5d8ce5e78669c3577ea5f6c27cb424876f5b5e6448309748fd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
