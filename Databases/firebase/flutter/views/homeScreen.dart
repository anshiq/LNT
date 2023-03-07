import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase/views/create_note_screen.dart';
import 'package:flutter_firebase/views/login_screen.dart';
import 'package:get/get.dart';

class homeScreen extends StatelessWidget {
  const homeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("HomeScreen"),
        actions: [
          GestureDetector(
            child: Icon(Icons.logout_outlined),
            onTap: () {
              FirebaseAuth.instance.signOut();
              Get.off(() => loginScreen());
            },
          )
        ],
      ),
      body: Center(child: Container(child: Text("hule this is my homescreen"))),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Get.to(() => createNote());
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
