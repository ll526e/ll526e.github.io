interface SvgProps {
  name: string
  className?: string
  onClick?: () => void
}

export const Svg = (props: SvgProps) => {
  const mergeClassName = useClassnames(['icon', props.className])

  return (
    <svg className={mergeClassName} aria-hidden="true" onClick={props.onClick}>
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  )
}