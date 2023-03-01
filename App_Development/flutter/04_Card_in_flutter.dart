import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: "My Basic App",
    home: Homepage(),
  ));
}

class Homepage extends StatefulWidget {
  const Homepage({super.key});

  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  String myText = "Change my mind";
  TextEditingController _nameController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey,
      appBar: AppBar(title: Text("MyNavbar")),
      body: Center(
          child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            children: [
              Card(
                  child: Column(
                children: [
                  Image.asset("assets/image.jpg"),
                  SizedBox(
                    height: 20,
                  ),
                  Text(
                    myText,
                    style: TextStyle(
                        color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: TextField(
                      controller: _nameController,
                      decoration: InputDecoration(border: OutlineInputBorder()),
                    ),
                  ),
                ],
              )),
            ],
          ),
        ),
      )),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          myText = _nameController.text;
          _nameController.text = "";
          setState(() {});
        },
        child: Icon(Icons.edit),
      ),
      drawer: Drawer(
        child: ListView(
          padding: const EdgeInsets.all(0),
          children: [
            UserAccountsDrawerHeader(
                accountName: Text("pawan kumar"),
                accountEmail: Text("hule hul ")),
            ListTile(
              tileColor: Colors.blueAccent,
              title: Text("Developer"),
              trailing: Icon(Icons.edit),
            )
          ],
        ),
      ),
    );
  }
}
