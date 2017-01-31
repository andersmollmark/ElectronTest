import {UtlsLog} from './log';

let testDate = new Date();

export const LOGS: UtlsLog[] = [
    {
        id: '1',
        username: 'blaj',
        name: 'test',
        category: 'test',
        label: 'label',
        tab: 'tab',
        host: 'host',
        userTransactionKeyId: '123445',
        timestamp: testDate.getTime(),
        timestampAsDate: 'iljj',
        target: 'mob'
    },
    {
        id: '2',
        username: 'blaj',
        name: 'test2',
        category: 'test',
        label: 'label',
        tab: 'tab',
        host: 'host',
        userTransactionKeyId: '123445',
        timestamp: testDate.getTime(),
        timestampAsDate: 'iljj',
        target: 'mob'
    }
];
