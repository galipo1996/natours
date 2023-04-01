import axios from 'axios';
import { alert } from './alert';

export const updatePass = async (
  passwordCurrent,
  password,
  passwordConfirm
) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:8000/v1/user/updatepass',
      data: {
        password: passwordCurrent,
        Newpassword: password,
        passwordConfirm,
      },
    });
    if (res.data.status === 'success') {
      alert('success', 'Password changed');
    }
  } catch (error) {
    alert('error', error.response.data.message);
  }
};
