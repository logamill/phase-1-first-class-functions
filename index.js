
function receivesAFunction(param1){
    return param1();
}

receivesAFunction(function () {return param1});


function returnsANamedFunction(param2, altParam) {
    return function newFunction() {
        console.log('I am a named function?')
    };
}

function returnsAnAnonymousFunction(param) {
    return function () {console.log('cool')}
}