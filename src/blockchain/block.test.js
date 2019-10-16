import Block, { DIFFICULTY } from './block';

describe('Block', ()=>{
    let timestamp;
    let previousBlock;
    let data;
    let hash;
    let nonce;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 'revolution';
        hash = 'h4sh';
        nonce = 128
    });

    it('create an instance with parameters', () =>{
        const block = new Block(timestamp, previousBlock.hash, hash, data, nonce );

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
    });

    it('use static mine()', () => {
        const block = Block.mine(previousBlock, data);
        const { difficulty } = block

        expect(block.hash.length).toEqual(64);
        expect(block.hash.substring(0, difficulty)).toEqual('0'.repeat(difficulty));
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.nonce).not.toEqual(0);
        expect(data).toEqual(data);
    });

    it('use static hash(', () =>{
        hash = Block.hash(timestamp, previousBlock.hash, data, nonce);
        const hasOutput = '82853154c2de0f2804daead4d0ca74939fa30381cc6f172db290600293b812da';

        expect(hash).toEqual(hasOutput)
    });

    it('use toString()', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});