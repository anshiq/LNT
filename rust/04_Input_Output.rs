use std::io;
fn main () {
   let mut input = String :: new();
   io::stdin().read_line(&mut input).expect("failed to read");
   // grabing   | reading
   // inp. out. | input
   // from      | function
   // stdin module
   println!("the value of string is: {}", input);
}
