   
function addnewf(){
 // alert("hiii");
 let newnode = document.createElement("textarea");
  newnode.classList.add("form-control");
  newnode.classList.add("weField");
  newnode.classList.add("mt-3");
  newnode.setAttribute("rows",4);
  newnode.setAttribute("placeholder","Enter here");
    
  let weob=document.getElementById("we");
  let weaddbuttonob=document.getElementById("weaddbutton");

  weob.insertBefore(newnode,weaddbuttonob);
    }

function generatecv(){
  let namefield = document.getElementById("namefield").value;
  let namet1 = document.getElementById("namet");

  namet1.innerHTML =namefield;
  document.getElementById("namet2").innerHTML=namefield;

  let cont=document.getElementById("contactfield").value;
  let cont2=document.getElementById("phonet");

  cont2.innerHTML=cont;

  document.getElementById("addresst").innerHTML=document.getElementById("addressfield").value;

  document.getElementById("ght").innerHTML=document.getElementById("githublink").value;

  document.getElementById("lint").innerHTML=document.getElementById("linkedinLink").value;

  document.getElementById("inst").innerHTML=document.getElementById("instagramlink").value;

  document.getElementById("objt").innerHTML=document.getElementById("objectivefield").value;

  document.getElementById("weet").innerHTML=document.getElementById("wefield").value;

  document.getElementById("acdt").innerHTML=document.getElementById("acqfiled").value;


  let file =document.getElementById("imgfield").files[0];

  console.log(file);
  let reader=new FileReader();

  reader.readAsDataURL(file);
  console.log(reader.result);

  reader.onloadend=function(){
    document.getElementById("imgt").src=reader.result;
  };


  document.getElementById("cv-form").style.display='none';
  document.getElementById("cv-template").style.display='block';
}

function printcv(){

  window.print();


}