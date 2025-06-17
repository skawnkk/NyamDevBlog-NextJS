export type LoginFormInputs = {
  nickname?: string;
  email?: string;
  password?: string;
  error?: string;
  redirectTo?: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  message?: string;
};
