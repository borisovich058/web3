import { useAccount, useEnsName } from "wagmi";

const Profile = () => {
  const { address } = useAccount();
  const { data, error, status } = useEnsName({ address });

  if (status === "pending") return <div>Loading ENS name</div>;
  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;
  if (!address) return <div>Кошелёк не подключён</div>;

  return (
    <div>
      <div>ENS name: {data ?? "Имя не найдено"}</div>
      <div>Address: {address}</div>
    </div>
  );
};

export default Profile;
