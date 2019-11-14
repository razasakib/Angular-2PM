/*
interface interface1{
    fun_one<A>(arg1:A):A;
    fun_two<B>(arg2:B):B;
};
class class_one implements interface1{
    public fun_one<A>(arg1:A):A{
        return arg1;
    };
    public fun_two<B>(arg2:B):B{
        return arg2;
    };
};
console.log( new class_one().fun_one<string>("Hello"));
console.log( new class_one().fun_two<number>(100));
*/
