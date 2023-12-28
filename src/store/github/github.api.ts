import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, ServerResponse } from "../../models/models";
import { url } from "inspector";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getRepos: build.query<any, string>({
      query: (username: string) => ({
        url: `search/${username}/repos`,
      }),
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;
