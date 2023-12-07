import type { PropsWithChildren } from "react"

export const Header = (props: PropsWithChildren) => {
  return (
    <header>
      <h1>
        {
          props.children || '我来组成头部'
        }
      </h1>
    </header>
  )
}