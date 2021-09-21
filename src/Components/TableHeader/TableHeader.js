import s from './TableHeader.module.css'

const TableHeader = function () {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.reloadBtn}>
        icon
      </button>
      <span>Знайдено 8 клієнтів</span>
    </div>
  )
}

export default TableHeader
