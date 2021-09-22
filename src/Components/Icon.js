import sprite from '../images/sprite.svg'

const Icon = ({ className, name, size }) => (
  <svg className={className} width={size} height={size}>
    <use xlinkHref={`${sprite}#icon-${name}`} />
  </svg>
)

export default Icon
