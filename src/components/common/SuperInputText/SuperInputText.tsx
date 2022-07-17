import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import s from './SuperInputText.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  // eslint-disable-next-line react/require-default-props
  onChangeText?: (value: string) => void;
  // eslint-disable-next-line react/require-default-props
  onEnter?: () => void;
  // eslint-disable-next-line react/require-default-props
  error?: string;
  // eslint-disable-next-line react/require-default-props
  spanClassName?: string;
  /* тестировал onChange */
  // onChange?: (e: ChangeEvent<HTMLInputElement>)=> void
};

const SuperInputText: React.FC<SuperInputTextPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onChange && // если есть пропс onChange
      onChange(e); // то передать ему е (поскольку onChange не обязателен)

    // eslint-disable-next-line no-unused-expressions
    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onKeyPress && onKeyPress(e);

    // eslint-disable-next-line no-unused-expressions
    onEnter && // если есть пропс onEnter
      e.key === 'Enter' && // и если нажата кнопка Enter
      onEnter(); // то вызвать его
  };

  const finalSpanClassName = `${s.error} ${spanClassName || ''}`;
  const finalInputClassName = `${error ? s.errorInput : s.superInput} ${className}`; // need to fix with (?:) and s.superInput

  return (
    <div className={s.input_wrapper}>
      <div className={s.input_inner_wrapper}>
        <input
          type="text"
          onChange={onChangeCallback}
          onKeyPress={onKeyPressCallback}
          className={finalInputClassName}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
        />
        <span className={s.focus_border} />
      </div>
      <div className={s.error_wrapper}>
        {error && <span className={finalSpanClassName}>{error}</span>}
      </div>
    </div>
  );
};

export default SuperInputText;
