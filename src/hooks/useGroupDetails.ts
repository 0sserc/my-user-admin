import {useSelector} from "react-redux";
import {groupsSelector} from "../redux/groups/groups.selector";
import {useEffect, useState} from "react";

export const useGroupDetails = (id: string) => {
  const [groupDetails, setGroupDetails] = useState();

  const {groups} = useSelector(groupsSelector);

  useEffect(() => {
    setGroupDetails(groups.find((group) => group.id === id));
  }, [id, groups]);

  return {
    groupDetails,
  };
};
