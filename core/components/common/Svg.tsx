interface SvgProps {
  name: string
  className?: string
  onClick?: () => void
}

export const Svg = (props: SvgProps) => {

  const mergeClassName = () => {
    let className = 'icon'
    if (props.className) {
      className += ' ' + props.className
    }
    return className
  }

  return (
    <svg className={mergeClassName()} aria-hidden="true" onClick={props.onClick}>
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  )
}