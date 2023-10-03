function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter Here");
  newNode.setAttribute("rows", "3");
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter Here");
  newNode.setAttribute("rows", "3");
  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating CV

function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;

  let contactField = document.getElementById("contactField").value;
  let contactT = document.getElementById("contactT");
  contactT.innerHTML = contactField;

  let addressField = document.getElementById("addressField").value;
  let addressT = document.getElementById("addressT");
  addressT.innerHTML = addressField;

  let emailField = document.getElementById("emailField").value;
  let emailT = document.getElementById("emailT");
  emailT.innerHTML = emailField;

  let fbField = document.getElementById("fbField").value;
  let fbT = document.getElementById("fbT");
  fbT.innerHTML = fbField;

  let instaFeild = document.getElementById("instaFeild").value;
  let instaT = document.getElementById("instaT");
  instaT.innerHTML = instaFeild;

  let linkedField = document.getElementById("linkedField").value;
  let linkedT = document.getElementById("linkedT");
  linkedT.innerHTML = linkedField;

  //   objective

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //work experience

  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //aq
  let eqs = document.getElementsByClassName("eqField");
  let str1 = "";
  for (let e of eqs) {
    str1 = str1 + `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

document.getElementById("cv-form").style.display='none'
document.getElementById("cv-template").style.display='block'
}

function printCV() {
    window.print();
}
