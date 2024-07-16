import { inject, singleton } from 'tsyringe'
import { AuthService } from '../../../core/services/authService'
import { SessionService } from '../../../core/services/sessionService'

@singleton()
class AuthFeatureService {
  constructor(
    @inject('AuthService') private authService: AuthService,
    @inject('SessionService') private sessionService: SessionService
  ) {}

  login(username: string, password: string) {
    return this.authService.login(username, password).subscribe((token: unknown) => {
      this.sessionService.setSession(token);
    });
  }
}

export const authFeatureService = new AuthFeatureService()