import { NoInfo } from 'Components/NoInfo/NoInfo';
import { RepoListItem } from '../RepoListItem/RepoListItem';
import * as SC from './RepoListLibrary.styled';

export const ReposListLibrary = ({ userRepos, isLoading }) => {
  if (!userRepos) return;
  return (
    <>
      <SC.List>
        {isLoading && <li>Loading...</li>}
        {!userRepos.length && <li>{<NoInfo />}</li>}
        {userRepos.map(
          ({
            _id,
            html_url,
            full_name,
            forks,
            watchers,
            description,
            updated_at,
            coments,
          }) => (
            <RepoListItem
              key={_id}
              html_url={html_url}
              full_name={full_name}
              forks={forks}
              watchers={watchers}
              description={description}
              updated_at={updated_at}
              id={_id}
              coments={coments}
            />
          )
        )}
      </SC.List>
    </>
  );
};
