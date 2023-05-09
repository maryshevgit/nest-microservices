import { render, screen } from '@testing-library/react';
import { Button } from './index';

describe('button', () => {
  test('test render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
