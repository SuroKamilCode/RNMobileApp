import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '../../App'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector