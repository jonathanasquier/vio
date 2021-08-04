var c = 0;
function initElement(e) {
  c++;
  var pass = document.getElementById("pass");
  console.log(pass.value);
  var e1 = document.getElementById("e1");
  var e2 = document.getElementById("e2");
  var e3 = document.getElementById("e3");
  var answer = document.getElementById("answer");
  var earr = [e1, e2, e3];
  answer.style.display = "none";
  earr.forEach((item, i) => {
    item.style.display = "none";
  });
  if (pass.value !== "ceci") earr[c % 3].style.display = "block";
  else {
    answer.style.display = "block";
  }
}

document.getElementById("go").addEventListener("click", initElement, false);
