import 'package:flutter/material.dart';
import 'package:flutter_firebase/repository/authRepo.dart';
import 'package:flutter_firebase/views/login_screen.dart';
import 'package:flutter_firebase/views/signup_screen.dart';
import 'package:get/get.dart';

class forgotPassword extends StatefulWidget {
  const forgotPassword({super.key});

  @override
  State<forgotPassword> createState() => _forgotPasswordState();
}

class _forgotPasswordState extends State<forgotPassword> {
  TextEditingController _userEmail = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
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
              ElevatedButton(
                  onPressed: () {
                    var authRepo = authRepoProvider;
                    authRepo.ForgotPassword(_userEmail.text.trim());
                  },
                  child: Text("Submit")),
              SizedBox(
                height: 10,
              ),
              GestureDetector(
                onTap: () {
                  Get.to(() => loginScreen());
                },
                child: Card(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      "Login",
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
                      "SignUp !!!",
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
