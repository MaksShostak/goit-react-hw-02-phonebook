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
