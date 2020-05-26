let indhu = require('./node_modules/indhu-test/indhu');
let condition = require('./condition');

let result = condition("ping");
let expected = "pong";

indhu.test(result).toBeEqualTo(expected);

indhu.test(condition("boop")).toBeEqualTo("beep");

indhu.test(condition("any")).toBeEqualTo("ping pong! beep boop");

//fail case
indhu.test(condition("boop")).toBeEqualTo("ping pong! beep boop");