import axios from 'axios'
import { useState, useEffect } from 'react'

import s from './App.module.css'
import SearchInput from './Components/SearchInput/SearchInput'
import TableHeader from './Components/TableHeader/TableHeader'
import ContactList from './Components/ContactList/ContactList'

function App() {
  const [contacts, setContacts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios('https://Karantir-dev.github.io/clients_list/src/clients.json').then(
      ({ data }) => {
        setContacts(data)
        setIsLoading(false)
      },
    )
  }, [])

  return (
    <div className={s.App}>
      {isLoading ? (
        <h2>Зачекайте, дані завантажуються...</h2>
      ) : (
        <>
          <SearchInput query={query} setQuery={setQuery} />
          <TableHeader />
          <ContactList contacts={contacts} />
          <span className={s.pagination}>1 2 3 ... 4 5 6</span>
        </>
      )}
    </div>
  )
}

export default App
