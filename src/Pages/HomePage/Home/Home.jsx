import { useEffect, useRef, useState } from 'react';
import {
  useLazyGetUserReposQuery,
  useSeachAccountQuery,
} from 'Redux/gitApiOperations/gitOperations';
import { SearchBar } from 'Components/SearchBar/SearchBar';
import { useDebouns } from 'Components/huks/useDebouns';
import { ReposListHome } from '../../../Components/ReposList/RepoListHome/ReposListHome';
import { UsersList } from 'Components/UsersList/UsersList';
import * as SC from './Home.styled';

export const Home = () => {
  const filterArea = useRef();
  const [query, setQuery] = useState('');
  const [userDropdown, setUserDropdown] = useState(false);
  const [reposDropdown, setReposDropdown] = useState(false);
  const debounced = useDebouns(query);

  const { data, isFetching } = useSeachAccountQuery(debounced, {
    skip: debounced.length < 3,
  });

  const [getUserRepo, { data: userRepos }] = useLazyGetUserReposQuery();

  useEffect(() => {
    setUserDropdown(debounced.length >= 3);
    setReposDropdown(false);
  }, [debounced]);

  const handleFilterChange = evt => {
    const { value } = evt.target;
    setQuery(value);
  };
  const handleFilterClear = () => {
    setQuery('');
    filterArea.current.focus();
    setUserDropdown(false);
    setReposDropdown(false);
  };

  const clickHandler = evt => {
    const { textContent } = evt.target;
    getUserRepo(textContent);
    setReposDropdown(true);
  };
  return (
    <SC.Wrap>
      <h2 className="visually-hidden">Home page</h2>
      <SearchBar
        value={query}
        onInputChange={handleFilterChange}
        onClearBtn={handleFilterClear}
        element={filterArea}
      />
      {userDropdown && (
        <UsersList
          users={data}
          reposDropdown={reposDropdown}
          onItemClick={clickHandler}
          isLoading={isFetching}
        />
      )}
      {reposDropdown && query.length >= 3 && (
        <ReposListHome userRepos={userRepos} isLoading={isFetching} />
      )}
    </SC.Wrap>
  );
};
