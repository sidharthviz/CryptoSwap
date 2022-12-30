import { abis } from "@my-app/contracts";

export const  getRouterInfo  = async(ROUTER_ADDRESS, web3) => {

    const router = new web3.eth.Contract(abis.router02, ROUTER_ADDRESS);

    return {
        factory: await router.methods.factory().call(),
    }
}