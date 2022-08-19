var user = prompt("Enter You Name ?");
if (user == null || user == " ") {
  txt = "No Name Enterd";
} else {
  txt = "Welcome To Our Restorant " + user;
}
alert(txt);

function myFunction() {
  window.open("Order.html", "_blank");
  // location.href = "/Order.html" , "_blank";
}
