import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "../App/App.module.css";
//import defaultContacts from "../../defaultContacts.json";

export default function App() {
  return (
    <div>
      <h1 className={css.app}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
