import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: "My flutter App",
    home: App(),
    theme: ThemeData(primaryColor: Colors.orangeAccent),
  ));
}

class App extends StatelessWidget {
  const App({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("hi there i am anshik"),
      ),
      drawer: Drawer(
        child: ListView(
          padding: const EdgeInsets.all(0),
          children: [
            // DrawerHeader(
            // child: Container(
            // decoration: BoxDecoration(color: Colors.purple),
            // )),
            UserAccountsDrawerHeader(
              accountName: Text("anshik"),
              accountEmail: Text("ima brown boy"),
              currentAccountPicture: Icon(Icons.person),
            ),

            ListTile(
              leading: Icon(Icons.person),
              title: Text("Anshik Singh"),
              subtitle: Text("i am a developer"),
              trailing: Icon(Icons.edit),
            ),
            ListTile(
              leading: Icon(Icons.email),
              title: Text("Contact"),
              subtitle: Text("i am a developer"),
              trailing: Icon(Icons.edit),
            ),
            ListTile(
              leading: Icon(Icons.contact_emergency),
              title: Text("Anshik Singh"),
              subtitle: Text("i am a developer"),
              trailing: Icon(Icons.edit),
            ),
          ],
        ),
      ),
      body: Center(
        child: Container(),
      ),
      floatingActionButton: FloatingActionButton.large(
        onPressed: () {},
        child: Icon(Icons.edit),
        backgroundColor: Colors.purple,
        hoverColor: Colors.blue,
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
    );
  }
}
