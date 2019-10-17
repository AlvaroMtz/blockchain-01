import Blockchain from './src/blockchain';

const blockchain = new Blockchain()

for (let i = 0; i < 10; i++) {
    const block = blockchain.addBlock(`block-${i + 1}`)
    console.log(block.toString())
}