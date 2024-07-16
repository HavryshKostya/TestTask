import { container } from 'tsyringe';
import { authService } from '../services/authService';
import { sessionService } from '../services/sessionService';

container.register('AuthService', { useValue: authService });
container.register('SessionService', { useValue: sessionService });