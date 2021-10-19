import cn from 'classnames';
import React from 'react';

import styles from './NotFound.module.less';

interface NotFoundProps {
  className?: string;
}

export function NotFound(props: NotFoundProps) {
  const { className } = props;

  return <div className={cn(styles.NotFound, className)}>NotFound</div>;
}
