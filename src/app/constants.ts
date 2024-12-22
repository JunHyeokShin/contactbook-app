import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

export const contractAddress = "0x72d180dcaa5fbc9edb4c6f49fd10aeb5c0852876";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
