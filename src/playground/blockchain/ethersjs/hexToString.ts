import { ethers, BytesLike } from "ethers";

function hexToString(bytes: BytesLike): string {
    console.log(ethers.toQuantity(bytes))
    return ethers.toQuantity(bytes);

}
hexToString('0x00000000000000000000000000000000000000000b1d853b2af81e3bdd6c0000')