import { NoInfo } from 'Components/NoInfo/NoInfo';
import { RepoListItem } from '../RepoListItem/RepoListItem';
import * as SC from './ReposListHome.styled';

export const ReposListHome = ({ userRepos, isLoading }) => {
  if (!userRepos) return;

  return (
    <>
      <SC.List>
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
