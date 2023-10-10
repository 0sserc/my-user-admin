import {groupsReducer} from "./groups/groupsSlice";
import {usersReducer} from "./users/usersSlice";

const rootReducer = {
  users: usersReducer,
  groups: groupsReducer,
};

export default rootReducer;
