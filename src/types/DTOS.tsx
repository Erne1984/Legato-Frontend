export interface RegisterUserDTO {
  email: string;
  password: string;
  role: "USER";
  username: string;
  displayName: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}