import PropTypes from 'prop-types';
import { useState } from 'react';
import { useUpdateRepoComentsMutation } from 'Redux/reposOperations/reposOperations';
import * as SC from './RepoComents.styled';

export const RepoComents = ({ coments, id }) => {
  const [repoComents, setRepoComents] = useState(coments);
  const [updateRepoComents] = useUpdateRepoComentsMutation();

  const handleComentsChange = evt => {
    const { value } = evt.target;

    setRepoComents(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!repoComents) {
      setRepoComents('Your coments...');
      return;
    }
    const comentToUpdate = { id, data: repoComents };
    updateRepoComents(comentToUpdate);
  };

  return (
    <SC.ReposComentsWrap>
      <SC.ComentsForm onSubmit={handleSubmit}>
        <SC.Text
          value={repoComents}
          onChange={handleComentsChange}
          rows="7"
          placeholder="Your coments..."
        ></SC.Text>
        <SC.ChangeBtn type="submit">Save</SC.ChangeBtn>
      </SC.ComentsForm>
    </SC.ReposComentsWrap>
  );
};

RepoComents.propTypes = {
  coments: PropTypes.string,
  id: PropTypes.string,
};
