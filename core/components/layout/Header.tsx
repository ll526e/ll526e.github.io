import type { PropsWithChildren } from "react"
import { Logo } from '@components'

interface HeaderProps extends PropsWithChildren {
  extra?: JSX.Element
}

export const Header = (props: HeaderProps) => {
  return (
    <header className="header-wrap">
      <Logo></Logo>
      <div className="header-extra">
        {props.extra}
      </div>
      <div className="header-slot">
        {props.children}
      </div>
    </header>
  )
}