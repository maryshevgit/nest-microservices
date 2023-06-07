import { renderHook } from '@testing-library/react';
import { useTheme } from './index';
import { Theme } from '@/shared/const/theme';

test('initial theme is light', () => {
  const { result } = renderHook(() => useTheme());

  // act(() => {
  //   result.current.toggleTheme();
  // });

  expect(result.current.theme).toBe(Theme.LIGHT);
});
