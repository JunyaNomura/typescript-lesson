function square(num: number): number {
  return num * num;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething("Junya", 38, true)

function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}

greet();
