import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'EE',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const EE(),
    );
  }
}

class EE extends StatelessWidget {
  const EE({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          children: [
            // The fixed header on top
            Container(
              height: 80,
              width: double.infinity,
              decoration: BoxDecoration(
                color: Colors.white,
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.3),
                    spreadRadius: 1,
                    blurRadius: 3,
                    offset: const Offset(1, 1),
                  ),
                ],
              ),
              child: Center(
                child: GestureDetector(
                  child: MouseRegion(
                    cursor: SystemMouseCursors.none,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          'My Princess ',
                          style: GoogleFonts.oswald(
                            textStyle: const TextStyle(
                              color: Colors.blue,
                              fontSize: 35,
                            ),
                          ),
                        ),
                        Text(
                          '❤😘',
                          style: GoogleFonts.oswald(
                            textStyle: const TextStyle(
                              color: Colors.blue,
                              fontSize: 25,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),

            // The scrollable content below the header
            Expanded(
              child: SingleChildScrollView(
                physics: const ScrollPhysics(),
                scrollDirection: Axis.vertical,
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 15),
                  child: Wrap(
                    alignment: WrapAlignment.spaceBetween,
                    runSpacing: 20,
                    spacing: 20,
                    children: [
                      const eImage(image: 'assets/images/photo_2024-06-11_21-55-37.jpg'),
                      const eImage(image: 'assets/images/photo_2024-06-11_21-55-53.jpg'),
                      const eImage(image: 'assets/images/photo_2024-07-11_11-14-28.jpg'),
                      const eImage(image: 'assets/images/photo_2024-08-06_21-29-57.jpg'),
                      const eImage(image: 'assets/images/photo_2024-08-06_21-30-00.jpg'),
                      const eImage(image: 'assets/images/photo_2024-08-06_21-30-03.jpg'),
                      const eImage(image: 'assets/images/photo_2024-08-06_21-30-06.jpg'),
                      const eImage(image: 'assets/images/photo_2024-08-06_21-30-09.jpg'),
                      const eImage(image: 'assets/images/photo_2024-08-06_21-30-12.jpg'),
                      const eImage(image: 'assets/images/photo_2024-08-28_08-52-01.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-03_12-36-19.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-10_12-33-07.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-10_12-33-07 (2).jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-10_12-33-07 (3).jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-10_12-33-25.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-11_07-25-22.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-11_07-25-28.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-13_18-30-12.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-13_18-30-18.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-13_18-30-22.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-13_18-30-25.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-23_18-07-04.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-23_18-09-45.jpg'),
                      const eImage(image: 'assets/images/photo_2024-09-23_18-09-48.jpg'),
                      Container(
                        width: double.infinity,
                        alignment: Alignment.center,
                        padding: const EdgeInsets.symmetric(vertical: 50),
                        child: Text('ស្រលាញ់អូនយីខ្លាំងៗ ❤😘',
                        style: GoogleFonts.battambang(
                          textStyle:const TextStyle(
                            fontSize:25,
                            color: Colors.blue,
                          )
                        ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class eImage extends StatelessWidget {
  const eImage({
    super.key, required this.image,
  });
  final String image;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width / 2 - 30,
      height: 300,
      child: Column(
        children: [
          Image(
            image: AssetImage(image),
            width: double.infinity,
            height: 270,
            fit: BoxFit.cover,
          ),
         const Text('My Cute Girl ❤😘')
        ],
      ),
    );
  }
}
