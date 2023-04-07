import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <ContactForm />
      <Filter />
      {}
      <ContactList />
    </div>
  );
}
