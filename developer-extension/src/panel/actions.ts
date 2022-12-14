import { createListenAction, createSendAction } from '../common/actions'
import type { BackgroundActions, PopupActions } from '../common/types'

export const sendAction = createSendAction<BackgroundActions>()
export const listenAction = createListenAction<PopupActions>()
