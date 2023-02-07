import { useGetAllReposQuery } from '../../../Redux/reposOperations/reposOperations';
import { ReposListLibrary } from '../../../Components/ReposList/RepoListLibrary/RepoListLibrary';
import { CustomLink } from 'Components/CustomLink/CustomLink';
import { FaSearch } from 'react-icons/fa';
import * as SC from './Library.styled';

export const Library = () => {
  const { data, isFetching } = useGetAllReposQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    }
  );
  return (
    <section>
      <h1 className="visually-hidden">Your library</h1>

      {!data?.length && (
        <SC.Text>
          This is your personal repos library. It is time to start collect
          useful repos.
          <CustomLink to="/">
            Start to search <FaSearch size="16" color="wheat" />
          </CustomLink>
        </SC.Text>
      )}
      <ReposListLibrary userRepos={data} isLoading={isFetching} />
    </section>
  );
};
