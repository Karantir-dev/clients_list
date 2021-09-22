import s from './Highlighter.module.css'

const Highlight = ({ query, number }) => {
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
