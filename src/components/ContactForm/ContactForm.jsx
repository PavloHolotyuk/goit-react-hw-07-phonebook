import styles from "./ContactForm.module.css"
// import { nanoid } from "nanoid"
import { getContacts } from "../../redux/contacts/contactsSlice"
// addContact,
import { useDispatch, useSelector } from "react-redux"
import { Notify } from "notiflix/build/notiflix-notify-aio"
import { addContactThunk } from "redux/thunks/contactsThunk"

export default function ContactForm() {
	const dispatch = useDispatch()
	const contacts = useSelector(getContacts)
	const normalizeValue = (value) => value.toLowerCase().trim()

	const onFormSubmit = (event) => {
		event.preventDefault()

		const form = event.target
		const name = form.elements.name.value
		const number = form.elements.number.value
		const newContact = { name: name, number: number};
		const exist = contacts.some((contact) => normalizeValue(contact.name) === normalizeValue(name))
		if (exist) {
			Notify.failure("This contact is already exist")
			return
		}
		// dispatch(
		// 	addContact({
		// 		name,
		// 		number,
		// 		id: nanoid(),
		// 	})
		// )
		Notify.success("Contact is added successfuly")
		dispatch(addContactThunk(newContact)) //{name, number}
		form.reset()
	}

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={onFormSubmit}>
				<h1>Phonebook</h1>
				<div className={styles.formControl}>
					<label>
						Name
						<input
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							required
						/>
					</label>
					Number
					<input
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
					<button type="submit">Add contact</button>
				</div>
			</form>
		</div>
	)
}