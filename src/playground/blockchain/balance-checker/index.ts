import { addressList, usdtAddress, checkerContract, alarmThreshold } from './config';
import { ethers, BigNumberish } from "ethers";
async function main() {
    const balances = await checkerContract.balances(addressList, [usdtAddress]);
    const addressAndBalances = addressList.map((address, idx) => ({
        address,
        balance: balances[idx],
    }));

    const alertAddresses = addressAndBalances.filter(({ address, balance }) => {
        return balance >= alarmThreshold;
    });
    const result = weiToEther(alertAddresses)
    console.log('result',result)
}

function weiToEther(validAddrList : any[]) :number {
    let sum = 0;
    for(let i =0; i < validAddrList.length; i++){
        const sumData = ethers.formatEther(ethers.toBigInt(validAddrList[i].balance))
        sum += Number(sumData)
    }
    return sum;
}

main()