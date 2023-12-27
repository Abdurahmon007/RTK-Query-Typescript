import { useSearchUsersQuery } from "../store/github/github.api";

const HomePage = () => {
  const { isLoading, isSuccess, data } = useSearchUsersQuery("vladilen");
  return <div>HomePage</div>;
};

export default HomePage;
