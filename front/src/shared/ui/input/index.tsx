import React, {
  ChangeEvent, InputHTMLAttributes, memo, useCallback, useEffect, useRef, useState,
} from 'react';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HtmlInputProps {
  value: string
  onChange?: (value: string) => void;
  className?: string
  autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    value,
    onChange,
    className,
    placeholder,
    autofocus,
    type = 'text',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  }, [onChange]);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onSelect = useCallback((e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  }, []);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className="flex gap-2">
      {placeholder && (
        <div>
          {`${placeholder}>`}
        </div>
      )}
      <div className="flex-1 relative">
        <input
          ref={ref}
          value={value}
          onChange={onChangeHandler}
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
          className="bg-transparent border-none outline-none w-full text-transparent [text-shadow:_0_0_0_var(--primary-color)]"
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused
          && (
            <span
              className="absolute w-9 h-3 bg-inverted bottom-0 left-0 animate-blink"
              style={{ left: `${caretPosition * 9}px` }}
            />
          )}
      </div>
    </div>
  );
});
