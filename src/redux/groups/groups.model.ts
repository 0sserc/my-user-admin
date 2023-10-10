export interface IGroup {
  id: string;
  name: string;
}

export interface IGroupsSlice {
  groups: IGroup[];
  error?: string;
  loading?: boolean;
}

export const initialState: IGroupsSlice = {
  groups: [],
};
