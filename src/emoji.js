/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
console.log();

var format = function(message){
    return message.replace(/:\)/g, "☺");
};

export {
    format
};
