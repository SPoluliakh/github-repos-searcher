import { useAuth } from 'Components/huks/useAuth';
import { RepoComents } from 'Components/RepoComents/RepoComents';
import { useState } from 'react';
import { FaArrowsAltH } from 'react-icons/fa';

import {
  useAddRepoMutation,
  useGetAllReposQuery,
  useRemoveRepoMutation,
} from 'Redux/reposOperations/reposOperations';
import * as SC from './RepoListItem.styled';

export const RepoListItem = ({
  id,
  html_url,
  full_name,
  forks,
  watchers,
  description,
  updated_at,
  coments,
}) => {
  const reposData = {
    html_url,
    full_name,
    forks,
    watchers,
    description,
    updated_at,
  };
  const { data } = useGetAllReposQuery();
  const [isInLibrary, setIsInLibrary] = useState(() =>
    data?.some(repo => repo.html_url === html_url)
  );
  const { isLoggedIn } = useAuth();
  const [addRepo, { isLoading: addLoading }] = useAddRepoMutation();
  const [removeRepo, { isLoading: removeIsLoading }] = useRemoveRepoMutation();

  const handlAddClickBtn = () => {
    addRepo(reposData);
    setIsInLibrary(true);
  };

  const handlRemoveClickBtn = () => {
    removeRepo(id);
    setIsInLibrary(false);
  };

  return (
    <>
      <SC.Item>
        <SC.ReposWrap>
          <SC.LinkToRepo href={html_url} target="_blank" rel="noreferrer">
            <SC.RepoTitle> {full_name} </SC.RepoTitle>
            <p>
              Forks: {forks}, Watchers: {watchers}
            </p>
            <p>Description: {description}</p>
            <p>Updated at: {updated_at}</p>
          </SC.LinkToRepo>
          {isLoggedIn && (
            <>
              {!id && (
                <SC.RemouveBtn
                  disabled={addLoading || isInLibrary}
                  type="button"
                  onClick={handlAddClickBtn}
                >
                  {isInLibrary ? 'Added' : 'Add'}
                </SC.RemouveBtn>
              )}
              {id && (
                <SC.RemouveBtn
                  disabled={removeIsLoading}
                  type="button"
                  onClick={handlRemoveClickBtn}
                >
                  Remove
                </SC.RemouveBtn>
              )}
            </>
          )}
        </SC.ReposWrap>
        {id && (
          <SC.ArrowWrap>
            <FaArrowsAltH size="24" />
          </SC.ArrowWrap>
        )}
        {id && <RepoComents coments={coments} id={id} />}
      </SC.Item>
    </>
  );
};