import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_firebase/views/homeScreen.dart';
import 'package:flutter_firebase/views/login_screen.dart';
import 'package:get/get.dart';

// User is a data type define in firebase....
class authRepo {
  var firebaseInstance = FirebaseAuth.instance;
  var fireStoreInstance = FirebaseFirestore.instance;

  void SignUpFirebase(String userEmail, String userPassword, String userPhone,
      String userName) {
    try {
      firebaseInstance
          .createUserWithEmailAndPassword(
              email: userEmail, password: userPassword)
          .then((value) => {
                fireStoreInstance.collection("users").doc().set({
                  'userName': userName,
                  'userPhone': userPhone,
                  'userEmail': userEmail,
                  'userId': firebaseInstance.currentUser?.uid
                })
              });
      firebaseInstance
          .signOut(); // signing out and sending him to login screen....
      Get.to(() => loginScreen());
    } on FirebaseAuthException catch (e) {
      print("$e");
    }
  }

  void ForgotPassword(String userEmail) async {
    try {
      await firebaseInstance
          .sendPasswordResetEmail(email: userEmail)
          .then((value) => print("Email Sent"));
      Get.to(() => loginScreen());
    } on FirebaseAuthException catch (e) {
      print("$e");
    }
  }

  void LoginFirebase(String userEmail, String userPassword) async {
    try {
      var fireBasePromise = await firebaseInstance.signInWithEmailAndPassword(
          email: userEmail, password: userPassword);
      final User? fireBaseUser = await fireBasePromise.user;
      if (fireBaseUser != null) {
        Get.to(() => homeScreen());
      } else {
        print("Please Check your email and password");
      }
    } on FirebaseAuthException catch (e) {
      print("$e");
    }
  }
}

final authRepoProvider = authRepo();
