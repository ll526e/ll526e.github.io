import { PropsWithChildren } from "react"

export const Content = (props: PropsWithChildren) => {
  return (
    <div className='content'>
      {props.children}
    </div>
  )
}