const sum = (a: number, b: number): number =>  {
  return a + b;
};

console.log(sum(1, 3));

const phones: {
  [key: string]: {
    name: string
    id: string | number
  }
} = {};

phones.ismael.name = 'Ismael'
phones.ismael.id = 0011;
