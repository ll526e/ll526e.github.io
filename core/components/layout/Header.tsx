import type { PropsWithChildren } from "react"
import { Logo, ThemeSwitch } from '@components/common'

interface HeaderProps extends PropsWithChildren {
  className?: string
  title?: JSX.Element
  extra?: JSX.Element
}

export const Header = (props: HeaderProps) => {
  const classsNamse = useClassnames('header-wrap', props.className)
  return (
    <header className={classsNamse}>
      <Logo></Logo>
      <div className="header-extra">
        {props.extra}
      </div>
      <div className="header-slot">
        {props.children}
        <ThemeSwitch />
      </div>
    </header>
  )
}