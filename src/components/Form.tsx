import type { Sub } from '../types'
import useNewSub from '../hooks/useNewSub'

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

export default function Form ({ onNewSub }: FormProps): JSX.Element {
  const [inputValues, dispatch] = useNewSub()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target

    dispatch({ type: 'change_value', payload: { inputName: name, inputValue: value } })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onNewSub(inputValues)
    dispatch({ type: 'clear' })
  }
  const handleClick = (): void => {
    dispatch({ type: 'clear' })
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" id="nick" />
          <input onChange={handleChange} value={inputValues.months} type="number" name="months" id="months" />
          <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" id="avatar" />
          <textarea onChange={handleChange} value={inputValues.description} name="description" id="description" />
          <button type='button' onClick={handleClick}>Limpiar formulario</button>
          <button type='submit'>Guardar nuevo Sub</button>
        </form>
    </div>
  )
}
