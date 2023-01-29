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
    <>
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
          <ReposListHome
            userRepos={userRepos}
            isLoading={isFetching}
            reposDropdown={reposDropdown}
          />
        )}
      </SC.Wrap>
      {!query && (
        <SC.TextWrap>
          <SC.Text>
            Hi there! <SC.WebName>Github-repo-seacher</SC.WebName> has been
            developed to help you not to search necessary information from
            Github repos each time when you need it. It will also help to keep
            browser tabs clear. There are few simple steps:
          </SC.Text>
          <SC.Text>1. Sign up.</SC.Text>
          <SC.Text>2. Find necessary repos by owners nickName.</SC.Text>
          <SC.Text>3. Add repos to your library.</SC.Text>
          <SC.Text>
            4. Leave comments to the repos if you need it.At any time you can
            change coments or remove repos from your library.
          </SC.Text>
          <SC.Text>5. Enjoy by using Github-repo-seacher.</SC.Text>
        </SC.TextWrap>
      )}
    </>
  );
};
