import { useBalance, useAccount } from "wagmi";

const Balance = () => {
  const { address } = useAccount();

  const {
    data: balanceData,
    isLoading,
    error,
  } = useBalance({
    address,
    watch: true,
  });

  return (
    <div>
      {isLoading && <div>Загрузка баланса...</div>}
      {error && <div>Ошибка: {error.message}</div>}
      {balanceData && (
        <div>
          Баланс: {balanceData.formatted} {balanceData.symbol}
        </div>
      )}
    </div>
  );
};

export default Balance;
