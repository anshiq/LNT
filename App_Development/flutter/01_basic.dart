import 'package:flutter/material.dart'; // library to create a UI of App.

void main(List<String> args) {
  runApp(MaterialApp(
    title: "Hule hue",
    home: HomePage(),
  ));
}

// press stl to create a stateless widget using lsp server
class HomePage extends StatelessWidget {
  // homepage is class which extends the StatelessWidget class using its properties.

  @override
  Widget build(BuildContext context) {
    // now we are modifying the function build of Data type Widget.
// we are returning a Scaffold which again is a widget like something it has properties of to build a UI of application.
    return Scaffold(
      // Scaffold is a widget which contains many child widgets like navbar (appbar) && body
      appBar: AppBar(
        title: Text("Hule hue"),
        // toolbarHeight: 190, // used to give height to the app bar
      ),
      body: Center(
// we are returning a container which again is a widget like something it has properties of color, size and many other things.
        child: Container(
          width: 90,
          height: 90,
          alignment:
              Alignment.bottomCenter, // it gonna align the child to bottom
          child: Text(
            "Hi there",
          ), // Centre is used to centre the child from veritcally and horizontally.
          padding: EdgeInsets.all(2), // used to give the padding to the child.
          decoration: BoxDecoration(
              // color: Colors.teal,
              gradient: LinearGradient(colors: [Colors.blue, Colors.purple])
              // shape: BoxShape.circle,  //used to give chape to the child Container
              ),
        ),
      ),
    );
  }
}
