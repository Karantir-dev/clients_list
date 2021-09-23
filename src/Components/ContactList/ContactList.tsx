import Contact from '../Contact/Contact'
import IContact from '../../Contact.interface'

import s from './ContactList.module.css'

interface IProps {
  contacts: IContact[]
  setContacts: (contacts: IContact[]) => void
  query: string
}

const ContactList = function ({ contacts, setContacts, query }: IProps) {
  contacts.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return -1
    else return 1
  })
  contacts.sort((a, b) => {
    if (a.isRead === false && b.isRead === true) return -1
    else return 0
  })

  function onClickItem(e: React.MouseEvent<HTMLLIElement>) {
    const updatedСontacts = contacts.map(el => {
      if (el.id + '' === e.currentTarget.id) {
        el.isRead = true
      }
      return el
    })
    setContacts(updatedСontacts)
  }

  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        const { id, isRead } = contact

        return (
          <li
            className={`${s.listItem}  ${isRead && s.isRead}`}
            key={id}
            id={id + ''}
            onClick={onClickItem}
          >
            <Contact contact={contact} query={query} />
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList
