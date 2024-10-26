import { submitMessage, submitSubscr } from '@/services/apiMessage'
import { MessageForm, Subscribe } from '@/types/message'
import { useMutation } from '@tanstack/react-query'

export const useSubmitMessage = () => {
  return useMutation<void, Error, MessageForm>({
    mutationFn: submitMessage
  })
}
export const useSubmitSubscribe = () => {
  return useMutation<void, Error, Subscribe>({
    mutationFn: submitSubscr
  })
}
