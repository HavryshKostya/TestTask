import { describe, it, expect } from 'vitest';
import { authService } from './authService';

describe('authService', () => {
  it('should return a token on login', (done) => {
    authService.login('user', 'password').subscribe(response => {
      expect(response).toEqual({ token: 'mock-token' });
      done();
    });
  });
});
