import Icon from '../Icon'
import s from './TableHeader.module.css'

const TableHeader = function () {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.refreshBtn}>
        <Icon className={s.icon} name="refresh" size="15px" />
      </button>
      <span>Знайдено 8 клієнтів</span>
    </div>
  )
}

export default TableHeader
