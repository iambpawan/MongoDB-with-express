document.getElementById("confirmButton").addEventListener("click", function (event) {
  var confirmed = confirm("Are you sure you want to delete this item?");
  
  if (confirmed) {
    return true;
  } else {
    
    event.preventDefault();
    return false; 
  }
});
