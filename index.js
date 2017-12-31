'use stric'
exports.handler = (event, context, callback) => {
    const dt = new Date();
    const obj = {message: "Goodbye Cruel World!", createDate: dt.toString()};
     // add the correct json structure to make the code happy with API Gateway Lambda Proxy
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
