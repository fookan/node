
console.log('test');

var promise = stopTime(240);

promise.then(() => {
    return stopTime(60);
}).then(() => {
    return stopTime(120);
}).then(() => {
    return stopTime(10);
});

function stopTime(seconds) {
    return new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log('*** stop time is ' + seconds);
                resolve('OK');
            }, seconds);
    });
}
