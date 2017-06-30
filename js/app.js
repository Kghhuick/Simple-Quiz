document.addEventListener("DOMContentLoaded", function(event) {

  let h = document.querySelector("#quiz");




  console.log(h);

  h.addEventListener("submit", function(event) {
    event.preventDefault();
    var cnt = 0;

    var one = document.forms["quiz"]["inp1"].value;
    var two = document.forms["quiz"]["inp2"].value;
    var three = document.forms["quiz"]["inp3"].value;
    var four = document.forms["quiz"]["inp4"].value;
    var five = document.forms["quiz"]["inp5"].value;

    if (one == "a") {
      cnt = cnt + 1;
    } else if (one == null || one == "") {
      alert("You did not pick answer");
      return false;
    }

    if (two == "a") {
      cnt = cnt + 1;
    } else if (two == null || two == "") {
      alert("You did not pick answer");
      return false;
    }

    if (three == "a") {
      cnt = cnt + 1;
    } else if (three == null || three == "") {
      alert("You did not pick answer");
      return false;
    }

    if (four == "a") {
      cnt = cnt + 1;
    } else if (four == null || four == "") {
      alert("You did not pick answer");
      return false;
    }

    if (five == "a") {
      cnt = cnt + 1;
    } else if (five == null || five == "") {
      alert("You did not pick answer");
      return false;
    }



const score = document.querySelector("#score h2");
score.textContent =" YOUR RESULT IS" + " " + cnt;

  });  










});
