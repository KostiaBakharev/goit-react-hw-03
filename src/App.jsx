import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactsList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { initialContactsState } from "./utils/constants";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    return stringifiedUsers
      ? JSON.parse(stringifiedUsers)
      : initialContactsState;
  });
  const [filter, setFilter] = useState("");
  //
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  // Дожавання нових контактів та перевірка на вже існуючі
  const onAddUser = (formData) => {
    const { name, number } = formData;

    const isExistingContact = users.some(
      (user) => user.name === name || user.number === number
    );

    if (isExistingContact) {
      alert(`Контакт з іменем "${name}" або номером "${number}" вже існує.`);

      return;
    }
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setUsers((prevState) => [...prevState, finalUser]);
  };
  // Фільтрація контактів
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.number.includes(filter)
  );
  //Видалення контакту зі списку
  const onDeleteUser = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== userId));
  };
  //
  //
  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox filter={filter} onChange={handleFilter} />
      {filteredUsers.length > 0 ? (
        <ContactsList users={filteredUsers} onDeleteUser={onDeleteUser} />
      ) : (
        <p className={css.text}>No contacts found</p>
      )}
    </div>
  );
}

export default App;
