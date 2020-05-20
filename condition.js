let str = prompt("enter the string");
function call() {
    if(str == "ping") {
    console.log("pong");
    return "pong";
    }
    else if(str == "boop") {
    console.log("beep");
    return "beep";
    }
    else {
    console.log("ping pong! beep boop");
    return "ping pong! beep boop"
    }
}