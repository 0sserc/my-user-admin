import React from "react";
import CustomLink from "../../Atoms/CustomLink/CustomLink";
import Text from "../../Atoms/Text/Text";
import BasePage from "../../Layouts/BasePage";
import {useUsersDetails} from "../../hooks/useUsersDetails";
import {useGroupsDetails} from "../../hooks/useGroupsDetails";
import UsersTable from "../../Components/UsersTable/UsersTable";

const UserList = () => {
  const {groups} = useGroupsDetails();
  const {users} = useUsersDetails();

  return (
    <BasePage>
      <CustomLink pageToLink="create" disabled={groups.length === 0}>
        Create user
      </CustomLink>
      {groups.length === 0 && <Text type="small">*You must create a group before creating a user</Text>}
      {users?.length > 0 ? <UsersTable users={users} /> : <p>There are no existing users at the moment</p>}
    </BasePage>
  );
};

export default UserList;

UserList.displayName = "UserList";
