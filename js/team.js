
var team = [{ fn: "Bruno", ln: "M", telefon: "06589556", email: "bruno@cf.com", profession: "IT", image: "<image width=100% src=img/bruno.jpg>", about: "a" },
    { fn: "Sylvain", ln: "M", telefon: "06589557", email: "sylvain@cf.com", profession: "Seller", image: "<image width=100% src=img/sylvain.jpg>", about: "b" },
    { fn: "Julien", ln: "M", telefon: "06589558", email: "julien@cf.com", profession: "Lawyer", image: "<image width=100% src=img/julien.jpg>", about: "c" },
    { fn: "Sophie", ln: "M", telefon: "06589559", email: "sophie@cf.com", profession: "Boss", image: "<image width=100% src=img/sophie.jpg>", about: "d" }
]



var i = 0

for (i = 0; i < team.length; i++) {
    document.write("<br><table style width=400 border=1><tr><td width=200 rowspan=7>" + team[i].image + "</td></tr>");
    document.write("<tr><td width=200>" + team[i].fn + "</td></tr>");
    document.write("<tr><td width=200>" + team[i].ln + "</td></tr>");
    document.write("<tr><td width=200>" + team[i].telefon + "</td></tr>");
    document.write("<tr><td width=200>" + team[i].email + "</td></tr>");
    document.write("<tr><td width=200>" + team[i].profession + "</td></tr>");
    document.write('<tr><td width=200><button onclick=result' + team[i].about + '()>More Information</button></td></tr></table><br>');
    document.write('<table><tr><td><div id="' + team[i].about + '"></div></td></tr></table><br>');

}

function resulta() {
    return document.getElementById("a").innerHTML = "Bruno is a new insurer broker developing the calculation for our customers"
}

function resultb() {
    return document.getElementById("b").innerHTML = "Sylvain is the seller and always available to give you a quote"
}

function resultc() {
    return document.getElementById("c").innerHTML = "Julien is the lawyer and will help you to deal with the legal issue"
}

function resultd() {
    return document.getElementById("d").innerHTML = "Sophie is the Boss of the company"
}