import PropTypes from 'prop-types';
export const PhoneBookItem = ({ name, number, OnClick }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="submit" onClick={OnClick}>
        Delete
      </button>
    </li>
  );
};
PhoneBookItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  OnClick: PropTypes.func.isRequired,
};
