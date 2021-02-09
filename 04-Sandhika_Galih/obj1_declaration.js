function buatProgram(id, name, tech, price) {
  var prog = {};

  prog.id = id;
  prog.name = name;
  prog.tech = tech;
  prog.price = price;
  return prog;
}

var atoz = buatProgram(1, "atozgo", "vuejs", 1000);
console.log(atoz);
