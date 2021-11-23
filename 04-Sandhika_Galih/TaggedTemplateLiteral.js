const nama = "Tommy Alhamra";
const umur = 20;

function tag(param, ...values) {
  //   let result = "";
  //   param.forEach((prm, i) => {
  //     result += `${prm}${values[i] || ""}`;
  //   });
  //   return result;

  // * menggunakan reduce
  return param.reduce(
    (result, prm, i) => `${result}${prm}${values[i] || ""}`,
    ""
  );
}

const str = tag`Halo, nama saya ${nama}, saya ${umur} tahun`;

console.log(str);
