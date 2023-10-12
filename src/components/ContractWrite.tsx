import { contractABI, contractAddress } from "../utils/contractInfo";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

export default function ContractWrite() {
  const { isConnected, address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: "safeMint",
    args: [address ? address : "0x", "yooo"],
  });

  const { write, data } = useContractWrite(config);

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-white text-xl mb-3 text-center">
          To view the code below, check{" "}
          <span className="bg-zinc-800 p-1 rounded-md">
            <a
              href="https://github.com/SrinivasJoshi/Reactify/blob/main/src/components/ContractWrite.tsx"
              className="underline-none"
            >
              components/WriteERC20.tsx
            </a>
          </span>
        </h2>
        {isConnected ? (
          <button
            onClick={() => write?.()}
            className="tex-2xl px-2 py-1 font-semibold bg-secondary text-primary rounded-md cursor-pointer disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Mint NFT
          </button>
        ) : (
          <p className="p-2 border-2 border-secondary text-secondary rounded-md font-semibold">
            Connect to Wallet to Mint MTK
          </p>
        )}
        {isLoading && (
          <div className="flex justify-center items-center mt-3">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-secondary"></div>
          </div>
        )}
      </div>
    </>
  );
}
