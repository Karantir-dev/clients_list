import { useState, useEffect } from 'react'
import axios from 'axios'

import SearchInput from './Components/SearchInput/SearchInput'
import TableHeader from './Components/TableHeader/TableHeader'
import ContactList from './Components/ContactList/ContactList'

import s from './App.module.css'

function App() {
  const [contacts, setContacts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  function fetchContacts() {
    setIsLoading(true)
    axios('https://Karantir-dev.github.io/clients_list/src/clients.json').then(
      ({ data }) => {
        setContacts(data)
        setIsLoading(false)
      },
    )
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <div className={s.App}>
      <SearchInput query={query} setQuery={setQuery} />
      {isLoading ? (
        <h2>Зачекайте, дані завантажуються...</h2>
      ) : (
        <>
          <TableHeader
            quantity={contacts.length}
            fetchContacts={fetchContacts}
          />
          <ContactList
            contacts={contacts}
            setContacts={setContacts}
            query={query}
          />
          <span className={s.pagination}>1 2 3 ... 4 5 6</span>
        </>
      )}
    </div>
  )
}

export default App
