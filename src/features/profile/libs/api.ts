import Cookies from 'js-cookie';
import { CurrentUserResponse } from './definitions';

export async function CurrentUserApi(): Promise<CurrentUserResponse> {
  const response = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Current User Failed!');
  }
  const data = await response.json();
  return data as CurrentUserResponse;
}
