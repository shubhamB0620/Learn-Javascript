// Primitive use stack memory
// Non Primitive use Heap memory 
/*
stack
---------
|       |
---------
|       |
---------
|       |
---------
|var b=a| ----------> it provides copy of a
---------
|var a=1|
---------
var a=1
var b=a
*/

/*
            Heap
--------------------------
|                        |
|       let user ={
    name:"Shubham",
   pass:123              | 
| }                      |
|                        | --------------> it give the reference
|                        |
|                        |
|                        |
--------------------------

*/

let user ={
    name:"Shubham",
    pass:123
}
