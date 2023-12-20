import type { PropsWithChildren } from 'react'
import { FluentProvider, useId, Toaster, useToastController } from '@fluentui/react-components';
import { customTheme } from '@style'
import { useApp } from '@reducer';

export const FluentContent = (props: PropsWithChildren) => {
  const { state: { theme }, dispatch } = useApp()
  const toasterId = useId("toaster");
  const useToast = useToastController(toasterId);

  useEffect(() => {
    dispatch({
      type: 'register_toast',
      payload: {
        useToast
      }
    })
  }, [])

  const dynamicTheme = useMemo(() => {
    return theme === 'dark' ? customTheme.dark : customTheme.light
  }, [theme])

  return (
    <FluentProvider className='fluent-provider' theme={dynamicTheme}>
      {props.children}
      <Toaster toasterId={toasterId} position="top" limit={3}></Toaster>
    </FluentProvider>
  )
}