import '../repository/authRepo.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase/views/login_screen.dart';
import 'package:get/get.dart';

class signUpScreen extends StatefulWidget {
  const signUpScreen({super.key});

  @override
  State<signUpScreen> createState() => _signUpScreenState();
}

class _signUpScreenState extends State<signUpScreen> {
  @override
  Widget build(BuildContext context) {
    TextEditingController _userNameController = TextEditingController();
    TextEditingController _userPhoneController = TextEditingController();
    TextEditingController _userEmailController = TextEditingController();
    TextEditingController _userPasswordController = TextEditingController();
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
                    controller: _userEmailController,
                    decoration: InputDecoration(
                        suffixIcon: Icon(Icons.email),
                        prefixIcon: Icon(Icons.input),
                        hintText: 'Email',
                        enabledBorder: OutlineInputBorder())),
              ),
              Container(
                margin: const EdgeInsets.only(
                  bottom: 10,
                  left: 30,
                  right: 30,
                ),
                child: TextFormField(
                    controller: _userNameController,
                    decoration: InputDecoration(
                        suffixIcon: Icon(Icons.person),
                        prefixIcon: Icon(Icons.input),
                        hintText: 'Name',
                        enabledBorder: OutlineInputBorder())),
              ),
              Container(
                margin: const EdgeInsets.only(
                  bottom: 10,
                  left: 30,
                  right: 30,
                ),
                child: TextFormField(
                    controller: _userPhoneController,
                    decoration: InputDecoration(
                        suffixIcon: Icon(Icons.phone),
                        prefixIcon: Icon(Icons.input),
                        hintText: 'Phone',
                        enabledBorder: OutlineInputBorder())),
              ),
              Container(
                margin: const EdgeInsets.only(bottom: 20, left: 30, right: 30),
                child: TextFormField(
                    controller: _userPasswordController,
                    decoration: InputDecoration(
                        suffixIcon: Icon(Icons.visibility),
                        prefixIcon: Icon(Icons.input),
                        hintText: 'Password',
                        enabledBorder: OutlineInputBorder())),
              ),
              ElevatedButton(
                  onPressed: () {
                    var userName = _userNameController.text.trim();
                    var userPhone = _userPhoneController.text.trim();
                    var userEmail = _userEmailController.text.trim();
                    var userPassword = _userPasswordController.text.trim();
                    var authRepo = authRepoProvider;
                    authRepo.SignUpFirebase(
                        userEmail, userPassword, userPhone, userName);
                  },
                  child: Text("Submit")),
              SizedBox(
                height: 5,
              ),
              GestureDetector(
                onTap: () => Get.to(() => loginScreen()),
                child: Card(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      "Already have an account Login !!",
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
