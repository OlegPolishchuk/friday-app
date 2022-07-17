import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react';

import s from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  // eslint-disable-next-line react/require-default-props
  options?: any[];
  // eslint-disable-next-line react/require-default-props
  onChangeOption?: (option: any) => void;
  // eslint-disable-next-line react/require-default-props
  row?: boolean;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const finalClassName = restProps.row ? s.row : '';

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    // onChange, onChangeOption
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);

    // eslint-disable-next-line no-unused-expressions
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const mappedOptions: any[] = options
    ? options.map(
        (
          o,
          i, // map options with key
        ) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control,react/no-array-index-key
          <label key={`${name}-${i}`} className={`${s.radio} ${finalClassName}`}>
            <input
              type="radio"
              // name, checked, value, onChange
              onChange={onChangeCallback}
              value={o}
              name={name}
              checked={value === o}
            />
            <span className={s.control}>{o}</span>
          </label>
        ),
      )
    : [];

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{mappedOptions}</>;
};

export default SuperRadio;
