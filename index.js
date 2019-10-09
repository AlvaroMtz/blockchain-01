import PKG from './package';
import Block from './src/blockchain/block';

const { name, version } = PKG;

console.log(`${name} v${version}`);

const {genesis} = Block;
console.log(genesis.toString());

const block = new Block(Date.now(), genesis.hash, 'hash', 'data')
console.log(block.toString())