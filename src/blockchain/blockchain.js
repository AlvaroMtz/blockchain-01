import Block from './block';
import validate from './modules/validate'

class Blockchain {
    constructor() {
        this.blocks = [Block.genesis];
    }

    addBlock(data) {
        const previousBlock = this.blocks[this.blocks.length - 1];
        const block = Block.mine(previousBlock, data);

        this.blocks.push(block);

        return block;
    }

    replace(newBlocks = []) {
        if(newBlocks.length < this.block.length) throw Error ('Received chain is not longer ')
        try {
            validate(newBlocks);
        } catch (error){
            throw Error ('Received chain is invalid')
        }

        this.blocks = newBlocks;

        return this.blocks;
    }

}

export default Blockchain;
