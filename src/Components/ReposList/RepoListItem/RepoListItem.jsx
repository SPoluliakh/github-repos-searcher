import PropTypes from 'prop-types';
import { useAuth } from 'Components/huks/useAuth';
import { RepoComents } from 'Components/RepoComents/RepoComents';
import { useState } from 'react';
import { FaArrowsAltH, FaArrowsAltV } from 'react-icons/fa';

import {
  useAddRepoMutation,
  useGetAllReposQuery,
  useRemoveRepoMutation,
} from 'Redux/reposOperations/reposOperations';
import * as SC from './RepoListItem.styled';
let imgWidth = window.innerWidth >= 1200;

export const RepoListItem = ({
  id,
  html_url,
  full_name,
  forks,
  watchers,
  description,
  updated_at,
  coments,
  reposDropdown,
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
        <SC.ReposWrap data-list={reposDropdown}>
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
            {imgWidth ? (
              <FaArrowsAltH size="24" color="wheat" />
            ) : (
              <FaArrowsAltV size="18" color="wheat" />
            )}
          </SC.ArrowWrap>
        )}
        {id && <RepoComents coments={coments} id={id} />}
      </SC.Item>
    </>
  );
};

RepoListItem.propTypes = {
  id: PropTypes.string,
  html_url: PropTypes.string,
  full_name: PropTypes.string,
  forks: PropTypes.number,
  watchers: PropTypes.number,
  description: PropTypes.string,
  updated_at: PropTypes.string,
  coments: PropTypes.string,
  reposDropdown: PropTypes.bool,
};
