import Cookies from 'js-cookie';
import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(n: string | undefined) {
  if (!n) return '';
  var names = n.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

export function clearAllCookies() {
  const cookies = Cookies.get(); 
  Object.keys(cookies).forEach(cookieName => {
    Cookies.remove(cookieName);
  });
}