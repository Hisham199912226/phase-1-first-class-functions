function  receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function f1(){

    };
}

function returnsAnAnonymousFunction(){
    return function (){

    };
}
