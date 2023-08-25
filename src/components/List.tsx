import type { Sub } from '../types'

interface Props {
  subs: Array<Sub>
}

export default function List ({ subs }: Props): JSX.Element {
  const renderList = (): Array<JSX.Element> => {
    return subs.map(sub => (
        <li key={sub.description.charAt(0)}>
        <img src={sub.avatar} alt={`Picture of ${sub.nick}`} />
        <h4>{sub.nick}</h4>
        <p>{sub.description}</p>
      </li>
    ))
  }

  return (
    <ul>
    {
      renderList()
    }
    </ul>
  )
}
