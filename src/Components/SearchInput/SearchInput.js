import s from './SearchInput.module.css'

const SearchInput = function () {
  return (
    <div className={s.wrapper}>
      <input type="text" className={s.input} />
      <button type="button" className={s.btn}>
        clear
      </button>
      <button type="button" className={s.btn}>
        search
      </button>
    </div>
  )
}

export default SearchInput
