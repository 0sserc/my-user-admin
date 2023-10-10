import {useParams} from "react-router-dom";

import {useGroupDetails} from "../../hooks/useGroupDetails";
import Text from "../../Atoms/Text/Text";
import BasePage from "../../Layouts/BasePage";
const GroupDetails = () => {
  const {id} = useParams();
  const {groupDetails} = useGroupDetails(id);

  if (!groupDetails) return null;
  return (
    <BasePage>
      <Text type="big">Group Details</Text>
      <Text>ID: {groupDetails.id}</Text>
      <Text>Name: {groupDetails.name}</Text>
    </BasePage>
  );
};

export default GroupDetails;
