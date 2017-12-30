'use stric'
exports.handler = (event, context, callback) => {
    // TODO implement
    const dt = new Date();
    const obj = {message: "Goodbye World!", createDate: dt.toString()};
    callback(null, JSON.stringify(obj));
};