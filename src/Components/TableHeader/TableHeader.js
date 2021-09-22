import Icon from '../Icon'

import s from './TableHeader.module.css'

const TableHeader = function ({ quantity, fetchContacts }) {
  return (
    <div className={s.wrapper}>
      <button className={s.refreshBtn} type="button" onClick={fetchContacts}>
        <Icon className={s.icon} name="refresh" size="15px" />
      </button>
      <span>Знайдено {quantity} клієнтів</span>
    </div>
  )
}

export default TableHeader
