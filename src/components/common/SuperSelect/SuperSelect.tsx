import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';

import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  // eslint-disable-next-line react/require-default-props
  options?: any[];
  // eslint-disable-next-line react/require-default-props
  onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((el, i) => (
        <option
          className={`${s.option} ${el === restProps.value ? s.checked : ''}`}
          key={el.id ? el.id : `${i}-${el}`}
        >
          {el}
        </option>
      ))
    : []; // map options with key
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    // onChange, onChangeOption
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);

    // eslint-disable-next-line no-unused-expressions
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <select
      className={`${s.wrap} ${s.select}`}
      onChange={onChangeCallback}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
