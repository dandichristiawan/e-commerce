import {
  refreshAuthResponse,
  refreshRequest,
  signInRequest,
  signInResponse,
} from '@/features/login/libs/definitions';
import Cookies from 'js-cookie';

export async function LoginApi(
  formData: signInRequest
): Promise<signInResponse> {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Login Failed!');
  }

  const data = await response.json();
  Cookies.set('token', data.token, { expires: 1 / 24 });
  Cookies.set('refToken', data.refreshToken, { expires: 2 / 24 });
  Cookies.set('userId', data.id);
  return data as signInResponse;
}

export async function RefreshAuthApi(
  requestData: refreshRequest
): Promise<refreshAuthResponse> {
  const isTokenExist = Cookies.get('refToken');
  if (isTokenExist) {
    const response = await fetch('https://dummyjson.com/auth/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error('Refresh Token Failed!');
    }
    const data = await response.json();
    Cookies.set('token', data.token, { expires: 1 / 24 });
    Cookies.set('refToken', data.refreshToken, { expires: 2 / 24 });
    return data as refreshAuthResponse;
  } else {
    throw new Error(`Refresh Token Doesn't Exist!`);
  }
}
