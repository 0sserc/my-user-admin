import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import Text from "../../Atoms/Text/Text";
import ControlledInput from "../../Atoms/Input/Input";
import {useAppDispatch} from "../../redux/store";
import {groupsActions} from "../../redux/groups/groupsSlice";
import BasePage from "../../Layouts/BasePage";
import {useGroupsDetails} from "../../hooks/useGroupsDetails";

const CreateGroup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {error, loading} = useGroupsDetails();

  const [formData, setFormData] = useState({name: ""});
  const [formError, setFormError] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({name, value}: {name: string; value: string}) => {
    setFormData((prevFormData) => ({...prevFormData, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name) return setFormError("A name for the group must be provided");
    dispatch(groupsActions.createRequest(formData));
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && !loading && error) return setFormError(error);
    if (submitted && !loading && !error) return navigate("/groups");
    return () => {};
  }, [submitted, loading, error, navigate]);

  return (
    <BasePage>
      <Text tag="h1" type="big" weight="bold">
        Create group
      </Text>
      <form onSubmit={handleSubmit}>
        <ControlledInput type="text" fieldName="name" handleFormDataChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {formError && <Text weight="bold">{formError}</Text>}
    </BasePage>
  );
};

export default CreateGroup;

CreateGroup.displayName = "CreateGroup";
