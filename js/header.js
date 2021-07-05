// Get the modal
var modal = document.getElementById('signinmodal');
var modal=document.getElementById('signupmodal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
