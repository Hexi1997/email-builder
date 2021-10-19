import cn from 'classnames';
import React from 'react';

import styles from './Templates.module.less';

interface TemplatesProps {
  className?: string;
}

export function Templates(props: TemplatesProps) {
  const { className } = props;

  return <div className={cn(styles.Templates, className)}>Templates</div>;
}
