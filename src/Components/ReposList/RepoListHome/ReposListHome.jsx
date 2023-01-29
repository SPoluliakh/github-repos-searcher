import { NoInfo } from 'Components/NoInfo/NoInfo';
import { RepoListItem } from '../RepoListItem/RepoListItem';
import * as SC from './ReposListHome.styled';
import { scrollbars } from 'Helpers/scrollbars';

export const ReposListHome = ({ userRepos, isLoading }) => {
  if (!userRepos?.length) return;
  return (
    <>
      <SC.List element="ul" options={{ scrollbars }}>
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
