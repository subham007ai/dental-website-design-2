import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  it('announces the WhatsApp handoff after a valid appointment request', () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'Asha Das' },
    });
    fireEvent.change(screen.getByLabelText(/^phone$/i), {
      target: { value: '9999999999' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /request appointment/i }).closest('form')!);

    expect(screen.getByRole('status')).toHaveTextContent(/almost there/i);
  });
});
