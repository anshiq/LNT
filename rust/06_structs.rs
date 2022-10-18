/*
struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}
fn main() {
    let mut user1 = User {
        email: String::from("dogde@mail.com"),
        username: String::from("123belaman"),
        sign_in_count: 23,
        active: true,
    };
    let email = user1.email;
    println!("{}", email);
    user1.email = String::from("valhala@mail.com");
    let user2 = built_user(String::from("dkdkkdk"), String::from("username"));
    let user3 = User {
        email: String::from("d@mail.co"),
        ..user1
    };
}
fn built_user(email: String, username: String) -> User {
    return User {
        email: email,
        username: username,
        sign_in_count: 1,
        active: true,
    };
}
    */
/*
struct Rectangle {
    width: u32,
    height: u32,
}
fn main() {
    let rec = Rectangle {
        height: 33,
        width: 32,
    };
    let area = area(&rec);
    println!("the area is {}", area);
}
fn area(rec: &Rectangle) -> u32 {
    rec.height * rec.width //returning the multiply....
}
*/

struct Rectangle {
    width: u32,
    height: u32,
}
impl Rectangle { // imp is soething like defining functinn in classes.
    fn area(&self)->u32{
    self.height*self.width
    }
    fn bigger_or_not(&self,other: &Rectangle)->bool{
        self.width>other.width&&self.height>self.height
    }
}
fn main() {
    let rec = Rectangle {
        height: 33,
        width: 32,
    };
    let area = rec.area();
    println!("the area is {}", area);
    let other_rec= Rectangle{
        height:34,
        width:34,
    };
    println!("{}",rec.bigger_or_not(&other_rec));
}
