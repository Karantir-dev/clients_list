import InputMask from 'react-input-mask'
import Icon from '../Icon'

import s from './SearchInput.module.css'

interface IProps {
  query: string
  setQuery: (query: string) => void
}

const SearchInput = function ({ query, setQuery }: IProps) {
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
          <Icon className={s.icon} name="cancel" size="12px" />
        </div>
      </button>
      <button className={s.btnSearch} type="button">
        <Icon name="search" size="20px" />
      </button>
    </div>
  )
}

export default SearchInput
