import { NoInfo } from 'Components/NoInfo/NoInfo';
import * as SC from './UsersList.styled';

export const UsersList = ({ users, onItemClick, reposDropdown, isLoading }) => {
  return (
    <SC.UserList data-check={reposDropdown}>
      {isLoading && <li>Loading...</li>}
      {!users?.length && <li>{<NoInfo />}</li>}
      {users?.map(user => (
        <SC.Item key={user.id} onClick={onItemClick}>
          {user.login}
        </SC.Item>
      ))}
    </SC.UserList>
  );
};
