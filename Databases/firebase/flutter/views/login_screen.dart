import 'package:flutter/material.dart';
import 'package:flutter_firebase/repository/authRepo.dart';
import 'package:flutter_firebase/views/forget_password.dart';
import 'package:flutter_firebase/views/signup_screen.dart';
import 'package:get/get.dart';

class loginScreen extends StatefulWidget {
  const loginScreen({super.key});

  @override
  State<loginScreen> createState() => _loginScreenState();
}

class _loginScreenState extends State<loginScreen> {
  @override
  Widget build(BuildContext context) {
    TextEditingController _userPassword = TextEditingController();
    TextEditingController _userEmail = TextEditingController();
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        centerTitle: true,
        title: Text("Note App"),
        actions: [Icon(Icons.more_vert)],
      ),
      body: Center(
        child: SingleChildScrollView(
          child: Container(
            child:
                Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Container(
                margin: const EdgeInsets.symmetric(horizontal: 30),
                child: Image.network(
                    "https://t3.ftcdn.net/jpg/03/16/47/68/360_F_316476892_MzBYfNEjEMFKd18JXEPOC5Ha1ZYXnnJz.jpg"),
              ),
              Container(
                margin: const EdgeInsets.only(
                    bottom: 10, left: 30, right: 30, top: 10),
                child: TextFormField(
                    controller: _userEmail,
                    decoration: InputDecoration(
                        suffixIcon: Icon(Icons.email),
                        prefixIcon: Icon(Icons.input),
                        hintText: 'Email',
                        enabledBorder: OutlineInputBorder())),
              ),
              Container(
                margin: const EdgeInsets.only(bottom: 20, left: 30, right: 30),
                child: TextFormField(
                    controller: _userPassword,
                    decoration: InputDecoration(
                        suffixIcon: Icon(Icons.visibility),
                        prefixIcon: Icon(Icons.input),
                        hintText: 'Password',
                        enabledBorder: OutlineInputBorder())),
              ),
              ElevatedButton(
                  onPressed: () {
                    var userEmail = _userEmail.text.trim();
                    var userPassword = _userPassword.text.trim();
                    var authRepo = authRepoProvider;
                    authRepo.LoginFirebase(userEmail, userPassword);
                  },
                  child: Text("Submit")),
              SizedBox(
                height: 10,
              ),
              GestureDetector(
                onTap: () {
                  Get.to(() => forgotPassword());
                },
                child: Card(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      "Forgot Password?",
                      style: TextStyle(
                        color: Colors.blue,
                      ),
                    ),
                  ),
                ),
              ),
              SizedBox(
                height: 5,
              ),
              GestureDetector(
                onTap: () => Get.to(() => signUpScreen()),
                child: Card(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      "Don't have an account SignUp !!",
                      style: TextStyle(
                        color: Colors.blue,
                      ),
                    ),
                  ),
                ),
              )
            ]),
          ),
        ),
      ),
    );
  }
}
