import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface TeleportProps extends PropsWithChildren {
  target?: HTMLElement | string
}

export const Teleport = (props: TeleportProps) => {
  const { target = document.body } = props
  const [targetElement, setTargetElement] = useState<TeleportProps['target']>(target)
  const isElement = target instanceof HTMLElement
  useEffect(() => {
    if (isElement) {
      setTargetElement(target as HTMLElement)
    } else if (typeof target === 'string') {
      const el = document.querySelector(target)
      if (el) setTargetElement(el as HTMLElement)
    } else {
      throw Error('target must be a HTMLElement or a string')
    }
  }, [])


  return (
    <>
      {createPortal(props.children, targetElement as HTMLElement)}
    </>
  )
}