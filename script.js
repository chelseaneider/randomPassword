function generate(){
  // how complicated it
  let complexity = document.getElementById("length").value;
  // values for the password to choose from
  let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890";
  let password = "";
 
  for(var i = 0; i <= complexity; i++){
     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  document.getElementById("newPassword").value = password;
}
s