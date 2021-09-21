import s from './Contact.module.css'

const Contact = function ({ params }) {
  const { name, gender, messenger, number, text, date } = params
  return (
    <>
      <div className={s.gender}>
        icon<div className={s.messenger}>icon</div>
      </div>
      <span>{name}</span>
      <span>{number}</span>
      <p>{text}</p>
      <span>{date}</span>
      <span>{date}</span>
    </>
  )
}

export default Contact
