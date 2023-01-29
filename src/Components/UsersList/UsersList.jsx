import { NoInfo } from 'Components/NoInfo/NoInfo';
import * as SC from './UsersList.styled';
import { scrollbars } from 'Helpers/scrollbars';

export const UsersList = ({ users, onItemClick, reposDropdown, isLoading }) => {
  if (!users?.length) return;
  return (
    <SC.UserList
      data-check={reposDropdown}
      element="ul"
      options={{ scrollbars }}
    >
      {isLoading && <li>Loading...</li>}
      {!users.length && <li>{<NoInfo />}</li>}
      {users.map(user => (
        <SC.Item key={user.id} onClick={onItemClick}>
          {user.login}
        </SC.Item>
      ))}
    </SC.UserList>
  );
};