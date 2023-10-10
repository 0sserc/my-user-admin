import {useSelector} from "react-redux";
import {usersSelector} from "../redux/users/users.selectors";

export const useUsersDetails = () => {
  const {users, error, loading} = useSelector(usersSelector);

  return {
    users,
    error,
    loading,
  };
};
