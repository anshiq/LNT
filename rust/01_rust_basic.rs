fn main() {
    const INT: i32 = 8; // stores intiger of 2^32 type                               | To define constant always tell data type, name of constant is in CAPITAL_LATTERS.
    let characotr: char = 'a'; // stores charactor                                   | Note after defining any data type its value can't be changed, to change value use mut keyword in front of the name.
    let decision: bool = true; // store boolean value                                 | Also, to change the value redefine the data type by same/different name.
    println!("the value of tup is: {}", INT); // print value of integer                | Constant can never be redefined, nor be changed.
    println!("the value of tup is: {}", characotr); // print value of charactor
    println!("the value of tup is: {}", decision); // print value of decision

    let int: i32 = 34; // scope 0
    println!(" the value of integer out of scope is: {}", int);
    {
        //scope 1
        let int = 78; // on changing scope we can use same valriable with different value.
        println!(" the value of integer in the scope is: {}", int);
    }
    //scope 0
    println!("again the value of integer out of scope is: {}", int);

    // tuple
    let tup: (i32, char, bool) = (34, 'a', true);
    println!("the value of tup is: {}", tup.0); // print value at 0th index
    println!("the value of tup is: {}", tup.1); // print value at 1th index
    println!("the value of tup is: {}", tup.2); // print value at 2nd index
}
