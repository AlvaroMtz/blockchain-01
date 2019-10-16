import Block from './block';

describe('Block', ()=>{
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 't3st-d4t4';
        hash = 'h4sh'
    });

    it('create an instance with parameters', () =>{
        const block = new Block(timestamp, previousBlock.hash, hash, data );

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    it('use static mine()', () => {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data)
    });

    it('use static hash(', () =>{
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = 'edd49d6ab2faf92937cd379feb34c0a7c863880abae96566d30441135710d7fe';

        expect(hash).toEqual(hasOutput)
    });

    it('use toString()', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});