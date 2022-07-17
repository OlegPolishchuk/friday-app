import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  HTMLAttributes,
  useState,
} from 'react';

import SuperInputText from '../SuperInputText/SuperInputText';

import s from './SuperEditableSpan.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type SuperEditableSpanType = DefaultInputPropsType & {
  // eslint-disable-next-line react/require-default-props
  onChangeText?: (value: string) => void;
  // eslint-disable-next-line react/require-default-props
  onEnter?: () => void;
  // eslint-disable-next-line react/require-default-props
  error?: string;
  // eslint-disable-next-line react/require-default-props
  spanClassName?: string;

  // eslint-disable-next-line react/require-default-props
  spanProps?: DefaultSpanPropsType;
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoFocus,
  onBlur,
  onEnter,
  spanProps,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {};

  const onEnterCallback = (): void => {
    setEditMode(false);

    // eslint-disable-next-line no-unused-expressions
    onEnter && onEnter();
  };
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>): void => {
    setEditMode(false);

    // eslint-disable-next-line no-unused-expressions
    onBlur && onBlur(e);
  };
  const onDoubleClickCallBack = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ): void => {
    setEditMode(true);

    // eslint-disable-next-line no-unused-expressions
    onDoubleClick && onDoubleClick(e);
  };

  const spanClassName = className || s.default;

  return (
    <div className={s.wrapper}>
      {editMode ? (
        <SuperInputText
          autoFocus
          onBlur={onBlurCallback}
          onEnter={onEnterCallback}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...restProps}
        />
      ) : (
        <span
          onDoubleClick={onDoubleClickCallBack}
          className={spanClassName}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...restSpanProps}
        >
          {children || restProps.value}
        </span>
      )}
    </div>
  );
};

export default SuperEditableSpan;
