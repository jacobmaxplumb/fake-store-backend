const pgp = require('pg-promise')();
const db = pgp(process.env.POSTGRES_ENDPOINT);

export const testDb = () => {
    db.one('Select * from accounts').then((data: any) => {
        console.log(data);
    })
}