import Contact from '../Contact/Contact'

const ContactList = function ({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li>
            <Contact contact={contact} />
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList
