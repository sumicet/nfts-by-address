import BigNumber from 'bignumber.js';

export function weiToEth(wei: string | null | undefined) {
    return new BigNumber(wei || 0).dividedBy(1000000000000000000).toString();
}
