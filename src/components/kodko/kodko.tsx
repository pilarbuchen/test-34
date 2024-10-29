import styles from './kodko.module.scss';
import cx from 'classnames';
import { MantineProvider, Select } from '@mantine/core';

export interface KodkoProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Kodko = ({ className }: KodkoProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <MantineProvider>
                <Select data={['Option 1', 'Option 2']} placeholder="Choose an option" />
            </MantineProvider>
            Kodko
        </div>
    );
};
