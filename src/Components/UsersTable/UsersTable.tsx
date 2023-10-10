import CustomLink from "../../Atoms/CustomLink/CustomLink";
import {usersActions} from "../../redux/users/usersSlice";
import {useAppDispatch} from "../../redux/store";

const UsersTable = ({users}) => {
  const dispatch = useAppDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      {users.map((user) => (
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.email}</td>
          <td>
            <CustomLink pageToLink={user.id}>View details</CustomLink>
          </td>
          <td>
            <button onClick={() => dispatch(usersActions.deleteRequest(user.id))}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default UsersTable;
