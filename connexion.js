////////////////// Obtenez le modal d'inscription ///////////////////////
function userInfo (){

    // Todo
    document.location='accueil.html';
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