import React from 'react';

import s from './ToggleBtn.module.css';

type ToggleBtnPropsType = {
  toggle: () => void;
  // eslint-disable-next-line react/require-default-props
  wrapped?: boolean;
};

export const ToggleBtn: React.FC<ToggleBtnPropsType> = ({ toggle, ...props }) => {
  // const [wrapped, setWrapped] = useState<boolean>(false)

  const onClickHandler = (): void => {
    // setWrapped(wrapped => !wrapped)
    toggle();
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={s.menu_bar} onClick={onClickHandler}>
      <div className={`${s.bar} ${s.bar1} ${props.wrapped ? s.change : ''}`}> </div>
      <div className={`${s.bar} ${s.bar2} ${props.wrapped ? s.change : ''}`}> </div>
      <div className={`${s.bar} ${s.bar3} ${props.wrapped ? s.change : ''}`}> </div>
    </div>
  );
};
