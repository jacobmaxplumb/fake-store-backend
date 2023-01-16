import AWS from 'aws-sdk';

const getConfig = () => {
    return {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.ACCESS_KEY_SECRET,
        region: 'us-east-1',
    }
}

export const getStuff = () => {
    AWS.config.update(getConfig());

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: 'customers'
    }

    docClient.scan(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })
}