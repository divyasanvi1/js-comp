const promiseone = new Promise(function(resolve,reject)
{
    //do an async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 1000);
})
promiseone.then(function(){
    console.log("promise consumed");
})