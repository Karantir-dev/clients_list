import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

const ContactList = function ({ contacts }) {
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        const { id } = contact
        return (
          <li key={id}>
            <Contact contact={contact} />
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList
