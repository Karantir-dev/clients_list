import Icon from '../Icon'
import s from './Contact.module.css'

const Contact = function ({ contact }) {
  const { name, gender, messenger, number, text, date, isRead } = contact

  return (
    <>
      <div className={s.gender}>
        <Icon name={gender === 'male' ? 'male' : 'female'} size="30px" />
        <div className={s.messenger}>
          <Icon
            name={messenger === 'viber' ? 'viber' : 'telegram'}
            size="20px"
          />
        </div>
      </div>

      <div>
        <span className={s.name}>{name}</span>
        <span className={s.number}>{number}</span>
      </div>

      <p className={s.text}>{text}</p>
      <span className={s.time}>
        {new Date(date).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })}
      </span>
      <span className={s.date}>{new Date(date).toLocaleDateString()}</span>
    </>
  )
}

export default Contact
