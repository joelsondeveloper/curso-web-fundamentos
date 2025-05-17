if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    if (!str) return this;
    if (!newStr) newStr = "";
    if (typeof newStr !== "string" || newStr.length === 0) return this;
    return this.split(str).join(newStr);
  };
}

const texto = "lorem ipsum dolor sit amet";
console.log(texto.replaceAll("lorem", "reino"));
