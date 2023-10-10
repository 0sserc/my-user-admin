import CustomLink from "../../Atoms/CustomLink/CustomLink";
import {groupsActions} from "../../redux/groups/groupsSlice";
import {useAppDispatch} from "../../redux/store";

const GroupsTable = ({groups}) => {
  const dispatch = useAppDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      {groups.map((group) => (
        <tr>
          <td>{group.id}</td>
          <td>{group.name}</td>
          <td>
            <CustomLink pageToLink={group.id}>View details</CustomLink>
          </td>
          <td>
            <button onClick={() => dispatch(groupsActions.deleteRequest(group.id))}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default GroupsTable;
