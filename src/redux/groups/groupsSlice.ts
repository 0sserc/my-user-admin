import {createSlice} from "@reduxjs/toolkit";

import {initialState} from "./groups.model";

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    createRequest: (state) => ({...state, loading: true, error: undefined}),
    create: (state, action) => {
      const newGroups = [...state.groups].concat(action.payload);
      return {...state, groups: newGroups, loading: false, error: false};
    },
    createError: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    deleteRequest: (state) => ({...state, loading: true, error: undefined}),
    delete: (state, action) => {
      const findGroupIndexToDelete = [...state.groups].findIndex((group) => group.id === action.payload);
      const newGroups = [...state.groups];
      newGroups.splice(findGroupIndexToDelete, 1);
      return {...state, groups: newGroups, loading: false, error: false};
    },
    deleteError: (state) => ({
      ...state,
      error: "Error deleting group",
      loading: false,
    }),
  },
});

export const {actions: groupsActions, reducer: groupsReducer} = groupsSlice;
