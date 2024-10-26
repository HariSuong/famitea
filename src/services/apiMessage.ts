import { MessageForm, Subscribe } from '@/types/message'
import { apiPostData } from '@/utils/apiPostData'

export const submitMessage = async (message: MessageForm): Promise<void> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/messages`
  return apiPostData<MessageForm>(url, message)
}

export const submitSubscr = async (subscribe: Subscribe): Promise<void> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/setting/subscription`
  return apiPostData<Subscribe>(url, subscribe)
}
