import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}
  async validateUser(email: string) {
    return email === 'test@mail.ru';
  }
}
