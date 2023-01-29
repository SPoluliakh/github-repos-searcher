import { useScrollbar } from 'Components/huks/useScrollBar';
import { NoInfo } from 'Components/NoInfo/NoInfo';
import { useRef } from 'react';
import { RepoListItem } from '../RepoListItem/RepoListItem';
import * as SC from './ReposListHome.styled';

export const ReposListHome = ({ userRepos, isLoading }) => {
  const list = useRef();
  const hasScroll = userRepos?.length > 1;
  useScrollbar(list, hasScroll);

  if (!userRepos?.length) return;

  return (
    <>
      <SC.List ref={list}>
        {isLoading && <li>Loading...</li>}
        {!userRepos.length && <li>{<NoInfo />}</li>}
        {userRepos.map(
          ({
            id,
            html_url,
            full_name,
            forks,
            watchers,
            description,
            updated_at,
          }) => (
            <RepoListItem
              key={id}
              html_url={html_url}
              full_name={full_name}
              forks={forks}
              watchers={watchers}
              description={description ?? 'No info'}
              updated_at={updated_at ?? Date.now()}
            />
          )
        )}
      </SC.List>
    </>
  );
};
