import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"
import styles from "./App.module.css"

export function App() {
	return (
		<div className={styles.container}>
			<ContactForm />
			<Filter />
      {/* {contacts.length > 0 ? (
          <Filter />
        ) : (
          <p className={styles.info}>There is no contacts in a Phone Book</p>
        )} */}
			<ContactList />
		</div>
	)
}