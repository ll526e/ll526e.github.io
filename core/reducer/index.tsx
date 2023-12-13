import { type PropsWithChildren, createContext, type Dispatch, type ReducerWithoutAction } from "react";

export interface InstanceState {
  theme: 'light' | 'dark' | ''
}

interface InstanceAction {
  type: string
  payload: any
}

interface InstanceReducer {
  state: ReducerWithoutAction<InstanceState>
  action: Dispatch<InstanceAction>
}

const initialState: InstanceState = {
  theme: useCookie.get('theme') || ''
}

const InstanceContent = createContext<InstanceState>(initialState)
const InstanceDispatch = createContext({} as InstanceReducer['action'])

const InstanceReducer = (state: InstanceState, action: InstanceAction) => {
  switch (action.type) {
    case 'change_theme': {
      return {
        ...state,
        theme: action.payload.theme
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const InstanceProvider = (props: PropsWithChildren) => {
  const [state, dispatch] = useReducer(InstanceReducer, initialState)
  const { theme } = state
  useMemo(() => {
    const el = document.querySelector('html')
    el?.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <InstanceContent.Provider value={state}>
      <InstanceDispatch.Provider value={dispatch}>
        {props.children}
      </ InstanceDispatch.Provider>
    </InstanceContent.Provider>
  )
}

const useApp = () => {
  return useContext(InstanceContent)
}
const useDispatch = () => {
  return useContext(InstanceDispatch)
}

export {
  useApp,
  useDispatch
}

export default InstanceProvider