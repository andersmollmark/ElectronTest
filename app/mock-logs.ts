import {UtlsLog} from './log';

let testDate = new Date();

export const LOGS: UtlsLog[] = [
    {
        id: '1',
        name: 'test',
        category: 'test',
        label: 'label',
        tab: 'tab',
        host: 'host',
        userTransactionKeyId: '123445',
        timestamp: testDate.getTime()
    }
];
