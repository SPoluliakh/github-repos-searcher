import { useGetAllReposQuery } from '../../../Redux/reposOperations/reposOperations';
import { ReposListLibrary } from '../../../Components/ReposList/RepoListLibrary/RepoListLibrary';

export const Library = () => {
  const { data, isFetching } = useGetAllReposQuery();
  return (
    <section>
      <h1 className="visually-hidden">Your library</h1>
      <ReposListLibrary userRepos={data} isLoading={isFetching} />
    </section>
  );
};
