import axios from 'axios'
import { useState } from 'react'

import './App.css'
import SearchInput from './Components/SearchInput/SearchInput'
import TableHeader from './Components/TableHeader/TableHeader'
import ContactList from './Components/ContactList/ContactList'

function App() {
  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  axios().then(data => {
    console.log(data)
  })

  return (
    <div className="App">
      <SearchInput />
      <TableHeader />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
