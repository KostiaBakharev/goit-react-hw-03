import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteUser }) => {
  const handleDelete = () => {
    onDeleteUser(id);
  };
  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
