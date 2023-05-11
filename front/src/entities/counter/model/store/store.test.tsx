import {
  act,
  fireEvent, render, renderHook, screen,
} from '@testing-library/react';
import { Counter } from '../../ui/counter';
import { useCountStore } from './index';

const originalState = useCountStore.getState();

beforeEach(() => {
  useCountStore.setState(originalState);
});

describe('dom elems', () => {
  test('add one ', () => {
    render(<Counter />);

    const counter = screen.getByTestId('counter-test');
    expect(counter).toHaveTextContent('0');

    const addButton = screen.getByText(/increment/i);
    fireEvent.click(addButton);
    expect(counter).toHaveTextContent('1');
  });

  test('decrement one', () => {
    render(<Counter />);

    const counter = screen.getByTestId('counter-test');
    expect(counter).toHaveTextContent('0');

    const addButton = screen.getByText(/decrement/i);
    fireEvent.click(addButton);
    expect(counter).toHaveTextContent('-1');
  });
});

describe('useCountStore', () => {
  test('count', () => {
    const { result } = renderHook(() => useCountStore());

    expect(result.current.count).toBe(0);
  });

  test('increment 1', () => {
    const { result } = renderHook(() => useCountStore());

    act(() => {
      result.current.increment(1);
    });

    expect(result.current.count).toBe(1);
  });

  test('decrement 1', () => {
    const { result } = renderHook(() => useCountStore());

    act(() => {
      result.current.decrement(1);
    });

    expect(result.current.count).toBe(-1);
  });
});
