import { createBoard } from '@wixc3/react-board';
import { Kodko } from '../../../src/components/kodko/kodko';

export default createBoard({
    name: 'Kodko',
    Board: () => <Kodko />,
});
