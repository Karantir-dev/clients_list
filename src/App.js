import axios from 'axios'
import { useState, useEffect } from 'react'

import './App.css'
import SearchInput from './Components/SearchInput/SearchInput'
import TableHeader from './Components/TableHeader/TableHeader'
import ContactList from './Components/ContactList/ContactList'

function App() {
  const [contacts, setContacts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios('https://Karantir-dev.github.io/clients_list/src/clients.json').then(
      ({ data }) => {
        setContacts(data)
        setIsLoading(false)
      },
    )
  }, [])

  return (
    <div className="App">
      {isLoading ? (
        <h2>Зачекайте...</h2>
      ) : (
        <>
          <SearchInput />
          <TableHeader />
          <ContactList contacts={contacts} />
        </>
      )}
    </div>
  )
}

export default App
