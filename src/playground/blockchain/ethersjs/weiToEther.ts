import { ethers, BigNumberish } from "ethers";

function weiToEther(wei: BigNumberish): string {
    console.log(ethers.formatEther(ethers.toBigInt(wei)))
    return ethers.formatEther(ethers.toBigInt(wei));
}

weiToEther(1424710000000000000000n)