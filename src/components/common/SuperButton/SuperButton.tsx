import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import s from './SuperButton.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export type VariantType = 'red' | 'white' | 'purple' | 'outline' | 'default';
type SuperButtonPropsType = DefaultButtonPropsType & {
  // eslint-disable-next-line react/require-default-props
  red?: boolean;
  // eslint-disable-next-line react/require-default-props
  variant?: VariantType;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  red,
  className,
  variant,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  let btnVariant;
  switch (variant) {
    case 'white':
      btnVariant = s.white;
      break;
    case 'red':
      btnVariant = s.red;
      break;
    case 'purple':
      btnVariant = s.purple;
      break;
    case 'outline':
      btnVariant = s.outline;
      break;
    case 'default':
      btnVariant = s.default;
      break;
    default:
      btnVariant = s.default;
  }

  // const finalClassName = `${red ? s.red : className? className : s.default}`
  const finalClassName = className || s.default;

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      /* eslint-disable-next-line no-nested-ternary */
      className={red ? s.red : variant ? btnVariant : className || finalClassName}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default SuperButton;
