import styles from './button.module.scss';
import cx from 'classnames';
import { Button as Button0 } from '@mantine/core';

export interface ButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Button = ({ className }: ButtonProps) => {
    return (
        <div className={cx(styles.root, className)}>
      
                <Button0 variant="filled">Click Me</Button0>
  
        </div>
    );
};
