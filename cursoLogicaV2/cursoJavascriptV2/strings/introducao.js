let str1 = "Minha String Bacana";
// console.log(str1.replace("minha", "sua"));

// console.log(str1.indexOf("g"))
// console.log(str1.includes("bacana"));

// console.log(str1.slice(3));
// console.log(str1.substring(3));

// console.log(str1.slice(-5, -1));
// console.log(str1.substring(-5,));

// console.log(str1.slice(8, 1));
// console.log(str1.substring(8, 1));

// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

// let strObj = new String("Minha String como objeto");
// console.log(strObj);
// console.log(strObj.valueOf());
// console.log(strObj.toString());

// str1 = "   Minha String Bacana   ";
// console.log(str1);
// console.log(str1.trim());
// console.log(str1.trimStart());
// console.log(str1.trimEnd());

// str1 = "0123456789"
// console.log(str1.padStart(20, "*"));
// console.log(str1.padEnd(20, "*"));
// console.log(str1);

// let telefone = "91234-2345"
// let telefone2 = "1234-2345"
// function mascararTelefone(telefone) {
//     telefoneDivisao = telefone.indexOf("-")
//     telefoneInicio = telefone.slice(0,1).padEnd(telefoneDivisao, "*")
//     telefoneFim = telefone.slice(-2).padStart(4, "*")
//     telefoneMascarado = `${telefoneInicio}-${telefoneFim}`

//     return telefoneMascarado
// }

// console.log(mascararTelefone(telefone));
// console.log(mascararTelefone(telefone2));

let str2 = "Hoje é quarta-feira";
console.log(str2.startsWith("Hoje"));
console.log(str2.endsWith("Hoje"));

let str3 = "abcdefgh"
console.log(str3.charAt(3));
console.log(str3.charCodeAt(3));