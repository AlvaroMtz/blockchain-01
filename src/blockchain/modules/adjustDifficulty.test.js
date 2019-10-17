import adjustDifficulty from './adjustDifficulty'

describe('adjustDifficulty()', () => {
    let block;

    beforeEach(() => {
        block = { timestamp: Date.now(), difficulty: 3 }
    })

    it('lowers the difficultity for slowly mined blocks', () => {
        expect(adjustDifficulty(block, block.timestamp + 600000)).toEqual(block.difficulty - 1)
    })

    it('increase the difficultity for quick mined blocks', () => {
        expect(adjustDifficulty(block, block.timestamp + 1000)).toEqual(block.difficulty + 1)
    })
})