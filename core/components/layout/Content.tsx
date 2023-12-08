import type { PropsWithChildren } from "react"

export const Content = (props: PropsWithChildren) => {
  return (
    <main className='container-wrap'>
      {props.children}
    </main>
  )
}