import styles from "./Filter.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/filter/filterSlice"
import { getContacts } from "redux/contacts/contactsSlice"

export default function Filter() {
	const dispatch = useDispatch()
	const filterHandler = (e) => {
		dispatch(setFilter(e.target.value))
	}

  const contacts = useSelector(getContacts);
	return (
		<>
			<h2 className={styles.title}>Contacts</h2>
			{contacts.length > 0 && (
        <label className={styles.label}>
				Enter search query
				<input className={styles.input} type="text" name="filter" onChange={(e) => filterHandler(e)} />
			</label>
      )}
		</>
	)
}