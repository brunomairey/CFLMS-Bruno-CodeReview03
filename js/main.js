 function result() {
     var name = (document.getElementById("name").value);
     var age = Number(document.getElementById("age").value);
     var car = Number(document.getElementById("car").value);
     var country = (document.getElementById("country").value);
     var austria = Math.round(car * 100 / age + 50);
     var hungary = Math.round(car * 120 / age + 100);
     var greece = Math.round(car * 150 / (age + 3) + 50);
     var resultat = [austria, hungary, greece];
     if (country == "Austria") {
         return document.getElementById("result").innerHTML = (name + ", your insurance costs " + resultat[0] + " €");
     } else if (country == "Hungary") {
         return document.getElementById("result").innerHTML = (name + ", your insurance costs " + resultat[1] + " €");
     } else {
         return document.getElementById("result").innerHTML = (name + ", your insurance costs " + resultat[2] + " €");
     }
 }