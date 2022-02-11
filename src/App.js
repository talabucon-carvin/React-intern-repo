import Header from './Components/Header'
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'
import Button from './Components/Button'
import ButtonGroup from './Components/ButtonGroup'
import AddEntry from './Components/AddEntry'
import Entries from './Components/Entries'
import './App.css'
import { useState } from 'react'
import {useEffect} from 'react'


function App() {
  const [entries, setEntries] = useState([
    {
      id:1,
      text: "Ran"
    },
    {
      id:2,
      text: "Dom"
    }
  ])

useEffect(()=> {
  console.log(`entries variable has updated`)
  console.log(`entries`)
},[entries])

  const addEntry = (entry) => {
    console.log("adding entry")
    
    const id = Math.floor(Math.random() * 10000) + 1
    const newEntry = { id, ...entry }
    setEntries([...entries, newEntry])
    // console.log(entries)
  }

  const deleteEntry = (id) => {
    console.log("deleting" )
    setEntries(entries.filter((entry)=>entry.id !== id))
  }

  return (
    <div className="App">
        <Navbar/>
        <Header title="Hello World"/>
        <Header title="Static"/>
        <Button color="green" text="Add"/>
        <br/>
        <ButtonGroup/>
        <Header title="Simulated dynamic"/>
        
        <br/>
        <AddEntry onAdd={addEntry}/>
        <Entries entries={entries} onDelete={deleteEntry}/> 
        <Footer/>
    </div>
  );
}

export default App;
