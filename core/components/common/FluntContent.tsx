import type { PropsWithChildren } from 'react'
import { FluentProvider } from '@fluentui/react-components';
import { customTheme } from '@style'
import { useApp } from '@reducer';

export const FluentContent = (props: PropsWithChildren) => {
  const { theme } = useApp()

  const dynamicTheme = useMemo(() => {
    return theme === 'dark' ? customTheme.dark : customTheme.light
  }, [theme])

  return (
    <FluentProvider className='fluent-provider' theme={dynamicTheme}>
      {props.children}
    </FluentProvider>
  )
}