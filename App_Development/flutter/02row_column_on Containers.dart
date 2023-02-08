import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: "My flutter App",
    home: App(),
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
        body: Container(
          // by default container uses its choiced widht and height but we can use MediaQuery to specify own heigth and width to container.
          color: Colors.blue,
          width: MediaQuery.of(context).size.width / 1.5,
          height: MediaQuery.of(context).size.height / 1.5,
          child: Column(
              // by default
              // Row, if we use Column instead it will reverse the below properties.
              // mainAxisAlignment: MainAxisAlignment.spaceBetween,
              // mainAxisAlignment: MainAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              // it is like justify content it will apply on below childrens.
              crossAxisAlignment: CrossAxisAlignment.center,
              // it is like align item in css.
              children: [
                Container(
                  width: 100,
                  height: 100,
                  color: Colors.black,
                ),
                Container(
                  width: 100,
                  height: 100,
                  color: Colors.red,
                ),
                Container(
                  width: 100,
                  height: 100,
                  color: Colors.green,
                ),
              ]),
        ));
  }
}
