import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";

const SendBlockChain = () => {
  const { data, sendTransaction, isLoading, isSuccess, isError } =
    useSendTransaction();

  return (
    <div className="sendBlockChain">
      <button
        onClick={() =>
          sendTransaction?.({
            to: "0xd2135CfB216b74109775236E36d4b433F1DF507B",
            value: parseEther("0.01"),
          })
        }
        disabled={!sendTransaction || isLoading}
      >
        {isLoading ? "Sending..." : "Send 0.01 ETH"}
      </button>

      {isSuccess && <div>✅ Success! Tx: {data}</div>}
      {isError && <div>❌ Ошибка при отправке</div>}
    </div>
  );
};

export default SendBlockChain;
