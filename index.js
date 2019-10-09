import PKG from './package';
import Block from './src/blockchain/block';

const { name, version } = PKG;

console.log(`${name} v${version}`);

const block = new Block(Date.now(), 'previoushHash', 'hash', 'data')
console.log(block.toString())