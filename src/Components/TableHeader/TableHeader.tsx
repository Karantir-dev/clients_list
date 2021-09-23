import Icon from '../Icon'

import s from './TableHeader.module.css'

interface IProps {
  quantity: number
  fetchContacts: () => void
}

const TableHeader = function ({ quantity, fetchContacts }: IProps) {
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
