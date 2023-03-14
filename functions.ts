function printName(person: { first: string, last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "John", last: "Honor" });

let coordinate: {x: number, y: number} = {
  x: 2, 
  y: 4,
}


