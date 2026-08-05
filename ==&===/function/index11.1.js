function fun(a,b)
{
    console.log(a+b);
}
function foo(a)
{
    console.log(a);// Function : fun
  //  a(2,3);//5
}
foo( fun() );