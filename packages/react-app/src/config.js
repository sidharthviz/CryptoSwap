import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x6f43312fef0d93ddC76507246ECC4D3C3910943B"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/jI5DRq58Zpy0U8kQxQn47KPsSLdssGIV"
  },
};