import {useSelector} from "react-redux";

import {useEffect, useState} from "react";
import {usersSelector} from "../redux/users/users.selectors";

export const useUserDetails = (id: string) => {
  const [userDetails, setUserDetails] = useState();

  const {users} = useSelector(usersSelector);

  useEffect(() => {
    setUserDetails(users.find((user) => user.id === id));
  }, [id, users]);

  return {
    userDetails,
  };
};
