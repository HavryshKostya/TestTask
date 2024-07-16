import { BehaviorSubject } from 'rxjs';

class SessionService {
  private session$ = new BehaviorSubject<string | null>(null);

  setSession(token: string) {
    this.session$.next(token);
  }

  getSession() {
    return this.session$.asObservable();
  }
}

export const sessionService = new SessionService();