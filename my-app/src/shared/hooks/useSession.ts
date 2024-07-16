import { useObservable } from 'rxjs-hooks';
import { sessionService } from '../core/services/sessionService.ts';

export const useSession = () => {
  const session = useObservable(() => sessionService.getSession());
  return { session };
};