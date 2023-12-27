import React from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

export const HomePage = () => {
  const { isLoading, isSuccess, data } = useSearchUsersQuery("vladilen");
  return <div>HomePage</div>;
};
