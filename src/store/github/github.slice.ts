import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const ls_fav_key = "rfk";

interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(ls_fav_key) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addToFavourites(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(ls_fav_key, JSON.stringify(state.favourites));
    },
    removeFromFavourites(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
      localStorage.setItem(ls_fav_key, JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
