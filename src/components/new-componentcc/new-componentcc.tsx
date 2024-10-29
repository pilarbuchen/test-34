import styles from './new-componentcc.module.scss';
import cx from 'classnames';
import { MantineProvider, Radio } from '@mantine/core';

export interface NewComponentccProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const NewComponentcc = ({ className }: NewComponentccProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <MantineProvider>
                <Radio label="Option" />
            </MantineProvider>
            NewComponentcc
        </div>
    );
};
