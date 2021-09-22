import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

const ContactList = function ({ contacts }) {
  contacts.sort((a, b) => {
    //   if (a меньше b по некоторому критерию сортировки) {
    //   return -1;
    // }
    // if (a больше b по некоторому критерию сортировки) {
    //   return 1;
    // }
  })

  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        const { id, isRead } = contact
        return (
          <li className={`${s.listItem}  ${isRead && s.isRead}`} key={id}>
            <Contact contact={contact} />
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList
