function receivesAFunction (callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction () {
    return function myNamedFunction() {console.log("Named Function")}
}   

function returnsAnAnonymousFunction () {
    return function() {console.log("Anonymous Function")} 
}