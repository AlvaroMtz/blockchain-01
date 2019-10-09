import PKG from './package';
import Block from './src/blockchain/block';

const { name, version } = PKG;

console.log(`${name} v${version}`);
const {genesis} = Block;

const block1 = Block.mine(genesis, 'data-1')
console.log(block1.toString())

const block2 = Block.mine(block1, 'data-2')
console.log(block2.toString())