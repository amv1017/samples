const WORDS = ["кошка", "собака", "лошадь", "корова"];

// создаем строку из рандомных 20 слов из словаря через запятую
const randomStr = () =>
  [...Array(20)]
    .map(() => WORDS[Math.floor(Math.random() * WORDS.length)])
    .join(",");

const str = randomStr();

const uniqueStr = (str) => {
  const unique = [];
  str.split(",").forEach((e) => {
    !unique.includes(e) && unique.push(e);
  });
  return unique.join(",");
};

console.log(`строка с повторениями: ${str}\n`);

console.log(`строка без повторений: ${uniqueStr(str)}`);
