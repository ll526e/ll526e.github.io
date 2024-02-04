interface SvgProps {
  name: string
  size?: number
  className?: string
  onClick?: () => void
}

export const Svg = (props: SvgProps) => {
  const mergeClassName = useClassnames(['icon', props.className, props.size ? `font-size-${props.size}px` : ''])

  return (
    <svg className={mergeClassName} aria-hidden="true" onClick={props.onClick}>
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  )
}