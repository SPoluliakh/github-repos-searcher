import { useScrollbar } from 'Components/huks/useScrollBar';
import { NoInfo } from 'Components/NoInfo/NoInfo';
import { useRef } from 'react';
import * as SC from './UsersList.styled';

export const UsersList = ({ users, onItemClick, reposDropdown, isLoading }) => {
  const list = useRef();
  const hasScroll = users?.length > 1;
  useScrollbar(list, hasScroll);
  if (!users?.length) return;
  return (
    <SC.UserList ref={list} data-check={reposDropdown}>
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
