////////////////// Obtenez le modal d'inscription ///////////////////////
function login (event){

  let user = document.getElementById("user").value;
  let mdp = document.getElementById("mdp").value;
  let userL = localStorage.getItem("user");
  let mdpL = localStorage.getItem("mdp");

  if(user===userL && mdp===mdpL){
    event.preventDefault();
    document.location = 'acceuil.html';
  }
  else{
    alert("erreur mot de passe ou utilisateur érronée");
    event.preventDefault();
  }
  }
  
  function InfoInscris(){

    let user=document.getElementById("user1").value;
    let mdp=document.getElementById("mdp1").value;
    localStorage.setItem("user", user);
    localStorage.setItem("mdp", mdp);

    location.reload();
  }
  
  
  // ////////////////// Obtenez le modal d'inscription ///////////////////////
   var modal = document.getElementById('id01');
  
   
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }
  
  
  // ///////////////// Obtenez le modal de connexion //////////////////////////
   var modal2 = document.getElementById('id02');
  
   
   window.onclick = function(event) {
       if (event.target == modal2) {
         modal.style.display = "none";
       }
   }