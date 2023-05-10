import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './sidebar';

describe('sidebar', () => {
  test('test render', () => {
    render(<Sidebar lng="ru" />);
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
  });

  test('test render', () => {
    render(<Sidebar lng="ru" />);
    const toggleButton = screen.getByTestId('sidebar-toggle');
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).not.toBeInTheDocument();
  });
});
