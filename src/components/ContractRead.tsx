import { useAccount, useContractRead } from "wagmi";
import { contractABI, contractAddress } from "../utils/contractInfo";
import { formatUnits } from "ethers";

export default function ContractRead() {
  const { address } = useAccount();
  const { data: name } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "name",
  });

  const { data: symbol } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "symbol",
  });

  const { data: balance } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "balanceOf",
    args: [address ? address : "0x"],
    watch: true,
  });

  return (
    <>
      <h2 className="text-white text-xl text-center">
        To view the code below, check{" "}
        <span className="bg-zinc-800 p-1 rounded-md">
          <a
            href="https://github.com/SrinivasJoshi/Reactify/blob/main/src/components/ContractRead.tsx"
            className="underline-none"
          >
            components/ReadERC20.tsx
          </a>
        </span>
      </h2>
      <div className="flex px-5 justify-evenly items-center text-xl text-secondary font-semibold">
        <p className="mx-2 text-center p-2 border-2 border-secondary rounded-md">
          Name <br /> {name as string}
        </p>
        <p className="mx-2 text-center p-2 border-2 border-secondary rounded-md">
          Symbol <br />
          {symbol as string}
        </p>
        <p className="mx-2 text-center p-2 border-2 border-secondary rounded-md">
          Your balance <br />
          {balance ? formatUnits(balance, 0) : "---"}
        </p>
      </div>
    </>
  );
}
