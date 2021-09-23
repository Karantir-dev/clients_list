import sprite from '../images/sprite.svg'

interface IIcon {
  className?: string
  name: string
  size: string
}

const Icon = ({ className, name, size }: IIcon) => (
  <svg className={className} width={size} height={size}>
    <use xlinkHref={`${sprite}#icon-${name}`} />
  </svg>
)

export default Icon
