// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.For example:

// xpandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// *türkcesi

// Size bir numara verilecek ve bunu Genişletilmiş Formda bir dize olarak döndürmeniz gerekecek.

//     Örneğin:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// *solution-1

function expandedForm(num) {
  return num
    .toString()
    .split("")
    .map((x, y, z) => x * 10 ** (z.length - 1 - y))
    .filter((x) => x)
    .join(" + ");
}

// *solution-2

function expandedForm(num) {
  let arr = num.toString().split("").reverse();
  let one = "1";
  let result = [];
  arr.map(
    (item, index) =>
      item != 0 && result.unshift(item * one.padEnd(index + 1, 0))
  );
  return result.join(" + ");
}

// *solution - 3

function expandedForm(num) {
  let result = "";
  num
    .toString()
    .split("")
    .reverse()
    .map((e, i) => {
      return (result += `${e != 0 ? e * 10 ** i : ""} + `);
    });
  return result
    .split("+")
    .reverse()
    .filter((e) => e != " 0 ")
    .join("")
    .trim()
    .split(" ")
    .filter((e) => Boolean(e))
    .join(" + ");
}
