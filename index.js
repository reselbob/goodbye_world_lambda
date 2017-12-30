'use stric'
exports.handler = (event, context, callback) => {
    const dt = new Date();
    const obj = {message: "Goodbye World!", createDate: dt.toString()};

    const response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(obj),
        "isBase64Encoded": false
    };
    callback(null, response);
};
