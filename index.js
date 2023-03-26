const test = function() {return 'Yay!'}


function receivesAFunction(test){
    return test()
}

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction(){
    return function() { "I am working!"}
}