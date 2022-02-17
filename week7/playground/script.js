console.log('playground script loaded');

function wait(msg, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(msg)
}

function selfDestruct() {
    console.log('BOOOOOM!');
}

wait('This tape will self destruct in 5 seconds', selfDestruct, 5);
console.log('HMMMM should I accept or not?');
