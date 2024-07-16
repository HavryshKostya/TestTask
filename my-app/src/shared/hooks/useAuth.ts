import { useEffect, useState } from 'react';
import { useInjection } from 'tsyringe';
import { AuthService } from '../core/services/authService';
import { SessionService } from '../core/services/sessionService';

export const useAuth = () => {
  const authService = useInjection('AuthService');
  const sessionService = useInjection('SessionService');
  
  const login = (username: string, password: string) => {
    return authService.login(username, password).subscribe((token: unknown) => {
      sessionService.setSession(token);
    });
  };

  const session$ = sessionService.getSession();

  return { login, session$ };
};