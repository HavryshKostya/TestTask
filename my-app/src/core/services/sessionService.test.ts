import { describe, it, expect } from 'vitest'
import { sessionService } from './sessionService'

describe('sessionService', () => {
  it('should set and get session token', () => {
    sessionService.setSession('test-token')
    sessionService.getSession().subscribe(token => {
      expect(token).toBe('test-token')
    })
  })
})
