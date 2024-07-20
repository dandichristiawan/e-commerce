export type signInRequest = {
  username: string;
  password: string;
  expiresInMins: number;
};

export type signInResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
};

export type refreshRequest = {
  refreshToken: string,
  expiresInMins: number
}

export type refreshAuthResponse = {
  token: string;
  refreshToken: string;
};
