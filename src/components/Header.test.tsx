import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Header from './Header';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('./Logo', () => ({
  default: () => <a href="/">Utkal Dental Care</a>,
}));

describe('Header', () => {
  it('exposes the clinic phone number as an accessible call action', () => {
    render(<Header />);

    expect(
      screen.getByRole('link', { name: /call utkal dental care/i }),
    ).toHaveAttribute('href', 'tel:+918144799927');
  });
});
