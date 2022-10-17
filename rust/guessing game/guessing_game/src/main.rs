use rand::Rng; 
use colored::*;
// use to generate random number.
use std::cmp::Ordering;
use std::io; // it is like if / else but only for intergers means it only povides lessthan/greaterthan and equal
             // .expect function is called when operation fails
fn main() {
    println!("Guess the number");
    let secret = rand::thread_rng().gen_range(1, 101);
    println!("the secret number is {}", secret);
    loop {
        println!("Please input yuor guess.");
        let mut guess = String::new(); // new creates an empty string. it is a string function.
        io::stdin() // create a handle while proccess to get input
            .read_line(&mut guess) // red line returns OK with the input from user.
            .expect("failed to read line...");
        //we are storing sttring at address &mut guess but we are not taking the ownership.
        // let guess: u32 = guess.trim().parse().expect("unabel to convert str to int."); // trim will remove spaces b/w string parse will convert to defined u32 interger.
        // above statement will exit if get invalid input and get crash or panic to handle
        let guess: u32 = match guess.trim().parse(){
            Ok(num)=>num,
            Err(_)=>continue
        };
         
            
       
        
        println!("you guessed: {}", guess);
        match guess.cmp(&secret) {  // comparing guess with secret 
            Ordering::Less => println!("too small"),  // if less 
            Ordering::Greater => println!("too big"), // if big
            Ordering::Equal => {
                println!("you win the no are equal."); // if equal
                break;
            }
        }
    }
}
// u32 vs i32 range of i32 = -2^32 to 2^32 and u32 = 0 to 2^33.
