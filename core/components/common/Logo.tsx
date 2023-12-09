import type { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

export const Logo = (props: PropsWithChildren) => {
  return (
    <Link to='/' className='logo'>
      <strong>Pear</strong>
      <span className="extend"> {props.children} </span>
    </Link>
  )
}