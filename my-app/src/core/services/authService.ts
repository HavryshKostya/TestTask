import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

class AuthService {
  login(username: string, password: string) {
    // Mock API call
    return of({ token: 'mock-token' }).pipe(delay(1000));
  }
}

export const authService = new AuthService();