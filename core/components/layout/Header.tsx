import type { PropsWithChildren } from "react"
import { Logo, ThemeSwitch } from '@components'

interface HeaderProps extends PropsWithChildren {
  title?: JSX.Element
  extra?: JSX.Element
}

export const Header = (props: HeaderProps) => {
  return (
    <header className="header-wrap">
      <Logo>
        {props.title}
      </Logo>
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