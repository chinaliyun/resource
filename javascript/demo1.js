// function add(){
//     var args = [].slice.call(arguments);
//     var fn = function(){
//         return add.apply(null,args.concat([].slice.call(arguments)))
//     };
//     fn.toString = function(){
//         return args.reduce(function(a, b){
//             return a+b;
//         })
//     }
//     return fn;
// }
// add(1,2,3,4)(5)

function add(){
    var init = [].slice.call(arguments);
    var fn = function(){
        return add.apply(null, init.concat([].slice.call(arguments)));
    };
    fn.toString = function(){
        return init.reduce(function(a,b){
            return a+b;
        })
    }
    return fn;
}
console.log(add(1)(2)(3)(4)+'');