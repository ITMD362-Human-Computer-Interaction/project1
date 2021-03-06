document.getElementById("submit").addEventListener("click", function(evt) {
  evt.preventDefault();
  
  if(inputCheck() && checkBoxes()){
    section = document.getElementById("main");
    section.innerHTML = "";
    thankYouNode = document.createElement("h2");
    thankYouNode.innerHTML = "Thank You for Applying";
    confirmationNode = document.createElement("h3");
    confirmationNode.innerHTML = "We will contact you soon"
    section.appendChild(thankYouNode);
    section.appendChild(confirmationNode);
  }
 });

 function inputCheck(){
  primaryName = document.getElementById("fname").value;
  familyName = document.getElementById("lname").value;
  city = document.getElementById("city").value;
  country = document.getElementById("country").value;
  phone = document.getElementById("phone").value;

  if(!primaryName || !familyName || !city || !country || !phone){
    alert("Please fill in all fields");
    return false
  }

  console.log(`Primary Name: ${primaryName} \n
  Family Name: ${familyName}\n
  City: ${city} \n
  Country: ${country} \n
  Phone: ${phone} \n
  `);
  return true;
}

 function checkBoxes(){
  if(!document.getElementById("age-verification").checked){
    alert("Must be over 18 to participate");
    return false;
  }
  else if(!document.getElementById("agree").checked){
    alert("Must agree to the terms of service");
    return false;
  }
  else{
    return true;
  }
 }
