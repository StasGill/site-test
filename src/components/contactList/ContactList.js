import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contact, handleDelete }, key) => {
  return (
    <li className="listItem" key={key}>
      <div>
        <p>
          <span>Name: </span> {contact.name}
        </p>
        <p>
          <span>Number: </span> {contact.number}
        </p>
      </div>
      <div>
        <button
          onClick={handleDelete}
          className="handleButtonDelete"
          name={contact.id}
        >
          X
        </button>
      </div>
    </li>
  );
};

ContactList.propTypes = {
  contact: PropTypes.object,
};

export default ContactList;
