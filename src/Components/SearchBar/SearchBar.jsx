import PropTypes from 'prop-types';
import { BsXLg } from 'react-icons/bs';
import * as SC from './SearchBar.styled';

export const SearchBar = ({ onInputChange, value, element, onClearBtn }) => {
  return (
    <SC.Wrap>
      <SC.SearchInput
        placeholder="Type to search... 🔎  "
        type="text"
        value={value}
        onChange={onInputChange}
        ref={element}
      />
      <SC.ClearButton type="button" onClick={onClearBtn}>
        <BsXLg size="24" />
      </SC.ClearButton>
    </SC.Wrap>
  );
};

SearchBar.propTypes = {
  element: PropTypes.object,
  onClearBtn: PropTypes.func,
  value: PropTypes.string,
  onInputChange: PropTypes.func,
};
