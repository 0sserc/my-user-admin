import {createSlice} from "@reduxjs/toolkit";

import {initialState} from "./users.model";

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createRequest: (state) => ({...state, loading: true, error: undefined}),
    create: (state, action) => {
      console.log("Create");
      const newUsers = [...state.users].concat(action.payload);
      return {...state, users: newUsers, loading: false, error: false};
    },
    createError: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    deleteRequest: (state) => ({...state, loading: true, error: undefined}),
    delete: (state, action) => {
      const findGroupIndexToDelete = [...state.users].findIndex((user) => user.id === action.payload);
      const newUsers = [...state.groups];
      newGroups.splice(findGroupIndexToDelete, 1);
      return {...state, users: newUsers, loading: false, error: false};
    },
    deleteError: (state) => ({
      ...state,
      error: "Error deleting user",
      loading: false,
    }),
  },
});

export const {actions: usersActions, reducer: usersReducer} = usersSlice;
