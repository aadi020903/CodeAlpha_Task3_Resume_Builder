function addNeWweField()
{
    
    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Your Expirence Here");

    let weob = document.getElementById("we");
    let weAddBUttonob = document.getElementById("weaddbutton");

    weob.insertBefore(newNode, weAddBUttonob);
}

function addNeWeqField()
{
    
    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Your Qualification Here");

    let weob = document.getElementById("eq");
    let weAddBUttonob = document.getElementById("eqaddbutton");

    weob.insertBefore(newNode, weAddBUttonob);
}

function addNeWceField()
{
    
    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("ceField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Your Certificates Here");

    let weob = document.getElementById("ce");
    let weAddBUttonob = document.getElementById("ceaddbutton");

    weob.insertBefore(newNode, weAddBUttonob);
}

// function genrate cv

function generateCV()
{
    // proceess acutally happening

    let nameField= document.getElementById("nameField").value;

    let nameT1= document.getElementById('nameT1');

    nameT1.innerHTML = nameField;

    // we can use directly

    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById('contactT').innerHTML= document.getElementById("contactField").value;
    document.getElementById('addressT').innerHTML= document.getElementById("addressField").value;
    document.getElementById('objectiveT').innerHTML= document.getElementById("summaryField").value;
    document.getElementById('LINT').innerHTML= document.getElementById("LInField").value;
    document.getElementById('GitT').innerHTML= document.getElementById("GitField").value;
    document.getElementById('MT').innerHTML= document.getElementById("EmailField").value;
    
   
    

    //work expirence
    let wef= document.getElementsByClassName("weField");
  
    let str =" ";

   for(let e of wef)
   {
    str = str + `<li> ${e.value} </li>`;
   }
   
   document.getElementById("weT").innerHTML = str;
   
   //acadmic qualifciation

   let eqf= document.getElementsByClassName("eqField");
   let streq =" ";

   for(let f of eqf)
   {
    streq = streq + `<li> ${f.value} </li>`;
   }
   
   document.getElementById("eqT").innerHTML = streq;

   // certificates
   
   let cef= document.getElementsByClassName("ceField");

   let strce =" ";

   for(let g of cef)
   {
    strce = strce + `<li> ${g.value} </li>`;
   }
   
   document.getElementById("ceT").innerHTML = strce;

   // setting up the profile


   let file = document.getElementById("upField").files[0];

   console.log(file);

   let reader = new FileReader()

   reader.readAsDataURL(file);

   console.log(reader.result);

//    document.getElementById("upT").src = reader.result;

   reader.onloadend = function()
   {
    document.getElementById("upT").src = reader.result;
   }


document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';

}

// print funtion for cv

function PrintCV()
{
    window.print();
}

