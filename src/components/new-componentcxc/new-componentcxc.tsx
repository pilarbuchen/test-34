import styles from './new-componentcxc.module.scss';
import cx from 'classnames';
import { MantineProvider, Card } from '@mantine/core';

export interface NewComponentcxcProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const NewComponentcxc = ({ className }: NewComponentcxcProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <MantineProvider>
                <Card shadow="sm">
                    <p>Card Content</p>
                </Card>
            </MantineProvider>
            NewComponentcxc
        </div>
    );
};
