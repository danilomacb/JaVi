export const SET_MESSAGE = "SET_MESSAGE";

export function setMessage(responseMessage) {
  return {
    type: SET_MESSAGE,
    responseMessage
  };
}
