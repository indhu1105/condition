
function call(str) {
    if(str == "ping") {
    return "pong";
    }
    else if(str == "boop") {
    return "beep";
    }
    else {
    return "ping pong! beep boop";
    }
}
module.exports = call;