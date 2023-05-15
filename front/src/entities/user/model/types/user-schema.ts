export interface User {
  id: string;
  username: string;
}

export interface UserSchema {
  authData?: User
}

export type UserActions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}
