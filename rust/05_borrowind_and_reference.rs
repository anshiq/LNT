/*
fn main() {
    /*
 ----ownership-----
 Each value in Rust hasa variable thats called its owner.
 There can only be one owner at a time.
 When the owner goes out of scope, the value will be dropped memory freed automatically when scope ends.
 */
let s1 =String::from("hello"); // there is diff b/w str and string str stored in stack string stored in heap.
let s2 = s1; // here s1 is moved to s2 means s1 wont work below.
// to clone instead to move use let s2 = s1.clone();

//the simple data types like int bool by default they are cloned instead of move.
let x=5;
let y = x; // copy
}
    */
/*
fn main(){
    let s = String::from("hellow");
    takes_ownership(s);
 //   println!("{}",s);  // here s is not accessibel because se we sent s in above function it ended when above function scope ended.

 let x =5;
    makes_copy(x);
    println!("{}",x); // since simple data types are copied so it is not vanished.




}
fn takes_ownership(some_string: String)
{
    println!("{}",some_string);
} // here s ends.
fn makes_copy (some_integer: i32 )
{
    println!("{}",some_integer);
}

*/
/*
// refrences...
/*  rules:
1. at any given time, you can have one mutable reference or any number of imutable refrences.
2. reference must always be valid.  */
fn main() {
    let mut s = String::from("hello");
    // we can access variable without changing ownership by refrence and if variable is mut than we can also change value only by refrence.
    change(&mut s);
    println!("{}",s);
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
*/
/*
fn main(){
    let mut s = String::from("hello");

    let r1 = &mut s;
    let r2 = &mut s; // can not reference a mutable variable  two or more timmes but if it is not mutable than we can.

    println!("{}, {}", r1, r2);
}
*/
/*
fn main(){
    /*
    let mut s = String::from("hello");

    let r1 = &s; // no problem
    let r2 = &s; // no problem
    let r3 = &mut s; // BIG PROBLEM

    println!("{}, {}, and {}", r1, r2, r3);
    */

    let mut s = String::from("hello");

    let r1 = &s; // no problem
    let r2 = &s; // no problem
    println!("{} and {}", r1, r2);
    // variables r1 and r2 will not be used after this point

    let r3 = &mut s; // no problem
    println!("{}", r3);
}

*/
fn main(){

}
// pending little bit of stuff.
