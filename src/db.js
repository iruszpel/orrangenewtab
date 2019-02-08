import Dexie from 'dexie';

const db = new Dexie('OrrangeDB');
db.version(1).stores({
    tasks: 'id, title, date, source, list_id, revision',
    mails: 'id, title, from, labelIds, date, unread'
});

export default db;