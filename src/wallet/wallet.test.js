import Wallet, { INITIAL_BALANCE } from './wallet'
import { descriptions } from 'jest-config';

describe('Wallet', () =>{
    let wallet;

    beforeEach(() => {
        wallet = new Wallet();
    });

    it('it´s a healthy wallet', () =>{
        expect(wallet.balance).toEqual(INITIAL_BALANCE);
        expect(typeof wallet.keyPair).toEqual('object');
        expect(typeof wallet.publicKey).toEqual('string');
        expect(wallet.publicKey.length).toEqual(130);
    })
});