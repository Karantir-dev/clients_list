import s from './Highlighter.module.css'

interface IProps {
  query: string
  number: string
}

const Highlight = ({ query, number }: IProps) => {
  const startOfNumber = number.slice(0, query.trim()?.length)
  const isEqual = startOfNumber === query.trim()

  return isEqual ? (
    <span className={s.number}>
      <span className={s.highlighted}>{startOfNumber}</span>
      {number.slice(query.trim().length)}
    </span>
  ) : (
    <span className={s.number}>{number}</span>
  )
}

export default Highlight
