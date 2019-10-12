// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(args) {
    this.length = args.length;
    this.width = args.width;
    this.height = args.height;
  }

  volume() {
    return "Cuboid's Volume: " + this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      "Cuboid's Surface Area: " +
      2 *
        (this.length * this.width +
          this.length * this.height +
          this.width * this.height)
    );
  }
}

const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//Find out the formulas for volume and surface area for cubes and create those methods using the dimension
// properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(args) {
    super(args);
    this.sideLength = args.sideLength;
  }
  volume() {
    return "Cube's Volume: " + Math.pow(this.sideLength, 3);
  }

  surfaceArea() {
    return "Cube's Surface Area: " + 6 * Math.pow(this.sideLength, 2);
  }
}

const cube = new CubeMaker({ sideLength: 5 }); // Since cube needs less arguments than cuboids....

console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130
