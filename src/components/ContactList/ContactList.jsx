import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";

const ContactsList = ({ users, onDeleteUser }) => {
  const contactElements = users.map(({ id, name, number }) => (
    <Contact
      key={id}
      name={name}
      number={number}
      onDeleteUser={() => onDeleteUser(id)}
    />
  ));
  return <ul className={css.list}>{contactElements}</ul>;
};

export default ContactsList;
