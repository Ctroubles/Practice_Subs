import { type SetStateAction, useState, type Dispatch, useEffect } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import type { Sub } from './types'

const IINITIAL_STATE: Array<Sub> = [
  {
    nick: 'El pelu',
    months: 3,
    avatar: 'https://i.pravatar.cc/150?u=pelu',
    description: 'perrito blanco'
  },
  {
    nick: 'LanaRose',
    months: 7,
    avatar: 'https://i.pravatar.cc/150?u=LanaRose',
    description: 'Amante de las flores 🌹'
  },
  {
    nick: 'ChefMia',
    months: 5,
    avatar: 'https://i.pravatar.cc/150?u=chefmia',
    description: 'Creando delicias en la cocina 🍳🍣'
  }
]

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App (): JSX.Element {
  const [subs, setSubs]: [Sub[], Dispatch<SetStateAction<Sub[]>>] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['subs']>()

  useEffect(() => {
    setSubs(IINITIAL_STATE)
  }, [])

  const handleSubmit = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div>
      <h1>Suscriptores</h1>
      <List subs={subs}/>
      <Form onNewSub={handleSubmit}/>
    </div>
  )
}

export default App
