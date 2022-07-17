import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import s from './SuperCheckbox.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
  // eslint-disable-next-line react/require-default-props
  onChangeChecked?: (checked: boolean) => void;
  // eslint-disable-next-line react/require-default-props
  spanClassName?: string;
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeChecked,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  spanClassName,
  children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    // сделайте так чтоб работал onChange и onChangeChecked
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
    // eslint-disable-next-line no-unused-expressions
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  const finalInputClassName = `${s.checkbox} ${className || ''}`;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={s.label}>
      <input
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        /*  eslint-disable-next-line react/jsx-props-no-spreading  */
        {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
      />
      {children && <span className={s.spanClassName}>{children}</span>}
    </label> // благодаря label нажатие на спан передастся в инпут
  );
};

export default SuperCheckbox;
