const students = [
  {
    nama: "Asrar",
    umur: 24,
  },
  {
    nama: "Sam",
    umur: 24,
  },
  {
    nama: "Putu",
    umur: 24,
  },
];

let mappedArray = students.map((student) => {
  return `<Text>${student.nama}</Text>`;
});

console.log(students.nama);

const anjay = `<Vstack>${mappedArray}</VStack>`;

console.log(anjay);
