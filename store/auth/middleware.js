import { Alert } from 'react-native'
import { startLoading, stopLoading } from '../loading/actionCreater'
import { logInCreater } from './actionCreater'
const loginData = import('../../server/clients.json')

export const login = (login, password) => dispatch => {
  dispatch(startLoading())
  
  setTimeout(() => {
    loginData
      .then(data => {
        for (let user of data.default) {
          const verifideData = user.login === login && user.password === password

          if (verifideData) {
            dispatch(logInCreater(true))
            break
          } else {
            Alert.alert('пароль или логин не верный!')
            break
          }
        }
      })
    .catch((err) => Alert.alert('Что-то пошло не так!'))
  }, 1000);
}