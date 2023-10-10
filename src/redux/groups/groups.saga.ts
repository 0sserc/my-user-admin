import type {Effect, ForkEffect} from "redux-saga/effects";
import type {PayloadAction} from "@reduxjs/toolkit";

import {put, takeEvery, select} from "redux-saga/effects";
import {groupsActions} from "./groupsSlice";
import {groupsSelector} from "./groups.selector";

export function* watchDelete(action: PayloadAction<never>): Generator<Effect, void> {
  try {
    const id = action.payload;
    yield put(groupsActions.delete(id));
  } catch (error) {
    yield put(groupsActions.deleteError("Something went wrong deleting the group"));
  }
}

export function* watchCreate(action: PayloadAction<never>): Generator<Effect, void> {
  try {
    const {name} = action.payload;
    //Create an ID for the group based on name;
    const groupInfo = {...action.payload, id: name.toLowerCase().replaceAll(" ", "")};

    const {groups} = yield select(groupsSelector);
    const checkIfGroupExists = groups.some((group) => group.id === groupInfo.id);

    checkIfGroupExists
      ? yield put(groupsActions.createError("Group Already Exists"))
      : yield put(groupsActions.create(groupInfo));
  } catch (error) {
    yield put(groupsActions.createError("Something went wrong creating the group"));
  }
}

export function* watchGroupsSagas(): Generator<ForkEffect, void> {
  yield takeEvery(groupsActions.createRequest, watchCreate);
  yield takeEvery(groupsActions.deleteRequest, watchDelete);
}

const groupSagas = watchGroupsSagas;

export default groupSagas;
