import {SHA256} from 'crypto-js';

class Block {
    constructor(timestamp, previousHash, hash, data){
        this.timestamp= timestamp;
        this.previousHash= previousHash;
        this.hash= hash;
        this.data= data;
    }

    static get genesis(){
        const timestamp = (new Date(2000, 0, 1)).getTime();
        return new this(timestamp, undefined, '_g3nesis-h4sh', 'revolution')
    }

    static mine (previousBlock, data) {
        const timestamp = Date.now();
        const hahs = Block.hash(timestamp, previousHash, data);
        const {hash:previousHash} = previousBlock;

        return new this(timestamp, previousHash, hahs, data);
    }

    static hash(timestamp, previousHash, data) {
        return SHA256(`${timestamp}, ${previousHash}, ${data}`).toString();
    }

    toString() {
        const{
           timestamp, previousHash, hash, data,
        } = this;

        return `Block -
            timestamp       :${timestamp}
            previousHash    :${previousHash}
            hash            :${hash}
            data            :${data}
            `;
    }
}

export default Block;