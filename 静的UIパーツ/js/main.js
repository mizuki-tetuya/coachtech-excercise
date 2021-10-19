function result(name, test) {
  if (test >= 70 && test <= 100) {
    return console.log(`${name}君良くできました`);
  } else if (test >= 30 && test < 70) {
    return console.log(`${name}君普通です`);
  } else if (test >= 0 && test < 30) {
    return console.log(`${name}君もう少し頑張りましょう`);
  }
}

const items = [
  {
    name: "A",
    test: 80,
  },
  {
    name: "B",
    test: 15,
  },
  {
    name: "c",
    test: 55,
  },
];

result("A", 80);
result("B", 15);
result("C", 55);


