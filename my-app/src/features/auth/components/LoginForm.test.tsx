import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LoginForm } from './LoginForm'
import { useAuth } from '../../../shared/hooks/useAuth'

vi.mock('../../../shared/hooks/useAuth')

describe('LoginForm', () => {
  it('should render login form and submit', () => {
    const mockLogin = vi.fn();
    (useAuth as vi.Mock).mockReturnValue({ login: mockLogin });

    render(<LoginForm />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), { target: { value: 'user' } })
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } })
    fireEvent.click(screen.getByText(/login/i))

    expect(mockLogin).toHaveBeenCalledWith('user', 'password')
  })
})