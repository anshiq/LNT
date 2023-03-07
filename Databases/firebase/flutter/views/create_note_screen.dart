import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

class createNote extends StatefulWidget {
  const createNote({super.key});

  @override
  State<createNote> createState() => _createNoteState();
}

class _createNoteState extends State<createNote> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Create Note"),
      ),
      body: Container(
          child: Column(
        children: [
          TextFormField(
            decoration: InputDecoration(hintText: "Add Note"),
          )
        ],
      )),
    );
  }
}
