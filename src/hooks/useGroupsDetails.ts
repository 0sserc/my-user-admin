import {useSelector} from "react-redux";
import {groupsSelector} from "../redux/groups/groups.selector";

export const useGroupsDetails = () => {
  const {groups, error, loading} = useSelector(groupsSelector);

  return {
    groups,
    error,
    loading,
  };
};
