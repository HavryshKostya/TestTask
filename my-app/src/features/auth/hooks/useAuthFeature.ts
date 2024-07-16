import { useInjection } from 'tsyringe'
import { AuthFeatureService } from '../services/authFeatureService'

export const useAuthFeature = () => {
  const authFeatureService = useInjection(AuthFeatureService)
  return { login: authFeatureService.login.bind(authFeatureService) }
}