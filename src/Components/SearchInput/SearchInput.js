import s from './SearchInput.module.css'
import Icon from '../Icon'

import InputMask from 'react-input-mask'

const SearchInput = function ({ query, setQuery }) {
  return (
    <div className={s.wrapper}>
      <InputMask
        className={s.input}
        type="text"
        mask="999 999 99 99"
        maskChar=" "
        value={query}
        onChange={e => setQuery(e.currentTarget.value)}
      />
      <button
        className={s.btnCancel}
        type="button"
        onClick={() => setQuery('')}
      >
        <div className={s.btnCancelIcon}>
          <Icon className={s.icon} name="cancel" size="15px" />
        </div>
      </button>
      <button className={s.btnSearch} type="button">
        <Icon name="search" size="20px" />
      </button>
    </div>
  )
}

export default SearchInput
