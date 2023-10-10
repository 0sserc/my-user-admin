import React from "react";
import CustomLink from "../../Atoms/CustomLink/CustomLink";

import BasePage from "../../Layouts/BasePage";
import GroupsTable from "../../Components/GroupsTable/GroupsTable";
import {useGroupsDetails} from "../../hooks/useGroupsDetails";

const GroupList = () => {
  const {groups} = useGroupsDetails();
  return (
    <BasePage>
      <CustomLink pageToLink="create">Create group</CustomLink>
      {groups.length > 0 ? <GroupsTable groups={groups} /> : <p>There are no existing groups at the moment</p>}
    </BasePage>
  );
};

export default GroupList;

GroupList.displayName = "GroupsList";
