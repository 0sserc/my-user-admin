export interface IUser {
  id: number;
  name: string;
  age: number;
  email: string;
  groups?: number[];
}

export interface IUsersSlice {
  users: IUser[];
  error?: string;
  loading?: boolean;
}

export const initialState: IUsersSlice = {
  users: [],
};
