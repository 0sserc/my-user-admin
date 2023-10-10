import {useParams} from "react-router-dom";

import {useUserDetails} from "../../hooks/useUserDetails";
import Text from "../../Atoms/Text/Text";
import BasePage from "../../Layouts/BasePage";
const UserDetails = () => {
  const {id} = useParams();
  const {userDetails} = useUserDetails(id);
  if (!userDetails) return null;
  return (
    <BasePage>
      <Text type="big">User Details</Text>
      <Text>ID: {userDetails.id}</Text>
      <Text>Name: {userDetails.name}</Text>
      <Text>Age: {userDetails.age}</Text>
      <Text>Email: {userDetails.email}</Text>
    </BasePage>
  );
};

export default UserDetails;
