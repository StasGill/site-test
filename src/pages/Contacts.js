import React from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect, useDispatch } from "react-redux";
import { deleteNumber, setFilter } from "../redux/actions/actions";
import { deleteNumberOperation } from "../redux/operations/operations";
import AddForm from "../components/addForm/AddForm";
import ContactList from "../components/contactList/ContactList";

import "../components/app.css";

const Contacts = ({ contacts, filters }) => {
  const dispatch = useDispatch();

  const setNewFilter = (e) => {
    dispatch(setFilter(e.target.value));
    //   this.props.setFilter(e.target.value);
  };

  const handleDelete = (e) => {
    const id = e.target.name;
    dispatch(deleteNumberOperation(id));
    dispatch(deleteNumber(id));
  };

  const filter = () => {
    if (contacts) {
      const filtered = contacts.filter((item) =>
        item.name.toLowerCase().includes(filters.toLowerCase())
      );
      return filtered;
    } else {
      return;
    }
  };

  return (
    <>
      {/* <Navigation /> */}
      <AddForm />
      {contacts.length > 0 && (
        <div className="addPanel">
          <input
            name="filter"
            onChange={setNewFilter}
            className="addPanelInput"
            placeholder="Find contact..."
          ></input>
        </div>
      )}

      <div className="addPanel">
        <h2>Contacts</h2>

        <TransitionGroup component="ul">
          {filter().map((contact) => (
            <CSSTransition key={contact.id} timeout={300} classNames="item">
              <ContactList
                contact={contact}
                handleDelete={handleDelete}
                key={contact.id}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filters: state.filter,
  };
};

export default connect(mapStateToProps)(Contacts);
