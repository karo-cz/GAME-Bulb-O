let platformArray = [
  [
    // level 0
    new Platform(0, 500, 300, 200, false),
    new Platform(500, 500, 300, 200, false)
  ],
  [
    //level 1
    new Platform(-100, 500, 280, 200, false),
    new Platform(350, 500, 400, 20, true)
  ],
  [
    //level 2
    new Platform(-50, 125, 900, 20, true),
    new Platform(-50, 350, 900, 20, false),
    new Platform(-50, 490, 900, 20, true),
    new Platform(-50, 650, 900, 20, false)
  ],
  [
    //level 3
    new Platform(-50, 650, 220, 60, false),
    new Platform(300, 200, 250, 300, false),
    new Platform(300, 550, 250, 50, true)
  ],
  [
    //level 4
    new Platform(-50, 650, 200, 60, false),
    new Platform(150, 500, 200, 150, true),
    new Platform(350, 350, 200, 150, false),
    new Platform(550, 200, 200, 150, true)
  ],
  [
    //level 5
    new Platform(-50, 550, 350, 200, false),
    new Platform(400, 0, 20, 700, false),
    new Platform(500, 550, 350, 200, false)
  ],
  [
    //level 6
    new Platform(-50, 600, 350, 200, false),
    new Platform(-50, 0, 350, 500, true),
    new Platform(300, 500, 350, 300, true),
    new Platform(300, 0, 350, 400, false),
    new Platform(650, 600, 350, 200, false),
    new Platform(650, 0, 350, 500, true)
  ]
  // [
  //   //level 7
  //   new Platform(0, 570, 200, 130, false),
  //   new Platform(230, 500, 30, 200, true),
  //   new Platform(280, 500, 30, 200, true),
  //   new Platform(300, 300, 200, 400, false)
  // ]
];

let boltsArray = [
  [new Bolt(600, 400)], //level 0
  [new Bolt(700, 400)], //level 1
  [new Bolt(700, 590)], //level 2
  [new Bolt(400, 300)], //level 3
  [new Bolt(740, 20)], //level 4
  [new Bolt(740, 400)], //level 5
  [new Bolt(740, 520)] //level 6
  // [new Bolt(350, 400)] //level 7
];

let circleArray = [
  [
    //0
    new Circle(
      Math.floor(Math.random() * 750),
      Math.floor(Math.random() * 650),
      Math.floor(Math.random() * 100 + 100),
      false
    )
  ],
  [
    //1
    new Circle(
      Math.floor(Math.random() * 750),
      Math.floor(Math.random() * 650),
      Math.floor(Math.random() * 100 + 100),
      false
    )
  ],
  [
    //2
    new Circle(
      Math.floor(Math.random() * 750),
      Math.floor(Math.random() * 650),
      Math.floor(Math.random() * 200 + 100),
      false
    )
  ],
  [
    //3
    new Circle(
      Math.floor(Math.random() * 750),
      Math.floor(Math.random() * 650),
      Math.floor(Math.random() * 200 + 100),
      false
    )
  ],
  [
    //4
    new Circle(
      Math.floor(Math.random() * 750),
      Math.floor(Math.random() * 650),
      Math.floor(Math.random() * 200 + 150),
      false
    )
  ],
  [
    //5
    new Circle(
      Math.floor(Math.random() * 750),
      Math.floor(Math.random() * 650),
      Math.floor(Math.random() * 200 + 150),
      false
    )
  ],
  [
    //6
    new Circle(
      Math.floor(Math.random() * 750),
      Math.floor(Math.random() * 650),
      Math.floor(Math.random() * 100 + 100),
      false
    )
  ]
  // [
  //   //7
  //   new Circle(
  //     Math.floor(Math.random() * 750),
  //     Math.floor(Math.random() * 650),
  //     Math.floor(Math.random() * 300) + 200
  //   ),
  //   false
  // ]
];
