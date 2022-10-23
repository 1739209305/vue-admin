import { ResponseEnum } from '@/enums/responseEnum'

export function resultSuccess<T>(result: T, { message = 'ok' } = {}) {
  return {
    code: 200,
    result,
    message,
    type: ResponseEnum.SUCCESS
  }
}

export function resultError(
  message = 'Request failed',
  { code = -1, result = null } = {}
) {
  return {
    code,
    result,
    message,
    type: ResponseEnum.FAILED
  }
}
