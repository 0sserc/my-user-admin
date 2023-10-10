import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import Text from "../../Atoms/Text/Text";
import ControlledInput from "../../Atoms/Input/Input";
import {useAppDispatch} from "../../redux/store";
import {usersActions} from "../../redux/users/usersSlice";
import BasePage from "../../Layouts/BasePage";
import {useGroupsDetails} from "../../hooks/useGroupsDetails";
import {useUsersDetails} from "../../hooks/useUsersDetails";

const CreateUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {groups} = useGroupsDetails();
  const {loading, error} = useUsersDetails();

  const [addedGroups, setAddedGroups] = useState([]);
  const [formData, setFormData] = useState({name: "", age: "", email: ""});
  const [formError, setFormError] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({name, value}: {name: string; value: string}) => {
    setFormData((prevFormData) => ({...prevFormData, [name]: value}));
  };

  const handleCheckboxes = (id) => {
    setAddedGroups(id);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (addedGroups.length < 1) return setFormError("The user must be added at least to one group");
    const userInfo = {...formData, groups: addedGroups};
    dispatch(usersActions.createRequest(userInfo));
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && !loading && error) return setFormError(error);
    if (submitted && !loading && !error) return navigate("/users");
    return () => {};
  }, [submitted, loading, error, navigate]);

  if (groups.length < 1) return null;

  return (
    <BasePage>
      <Text tag="h1" type="big" weight="bold">
        Create User
      </Text>
      <form onSubmit={handleSubmit}>
        <ControlledInput required type="text" fieldName="name" handleFormDataChange={handleChange} />
        <ControlledInput required type="number" fieldName="age" handleFormDataChange={handleChange} />
        <ControlledInput required type="email" fieldName="email" handleFormDataChange={handleChange} />
        {groups.map((group) => (
          <>
            <input
              type="checkbox"
              id={group.id}
              name={group.id}
              value={group.id}
              onChange={() => handleCheckboxes(group.id)}
            />
            <label htmlFor={`custom-checkbox-${group.id}`}>{group.name}</label>
          </>
        ))}
        <button type="submit">Submit</button>
      </form>
      {formError && <Text weight="bold">{formError}</Text>}
    </BasePage>
  );
};

export default CreateUser;

CreateUser.displayName = "CreateUser";
