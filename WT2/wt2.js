function contact() {
    var a = document.getElementById("form1");
    var b = document.getElementById("contactothers"); 
    var c = document.getElementById("about");    
     a.style.display = "none";
     b.style.display = "block";
     c.style.display = "none";
   
}

function fill(){
    var a = document.getElementById("form1");
    var b = document.getElementById("contactothers"); 
    var c = document.getElementById("about");   
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
}

function validation(){                                     
    var valid = true,
     fname = document.getElementById("fname").value,
     lname = document.getElementById("lname").value,
     eid = document.getElementById("emailid").value,
     phno = document.getElementById("phno").value;

    var atposition=eid.indexOf("@"),
         dotposition=eid.lastIndexOf(".");
  
    if (fname == " "){
      alert("First name cannot be empty");
      valid = false;
    } 
    else if (fname.length > 30) {
      alert("First name too big");
      valid = false;
    } 
    else if ( !isNaN (fname)){
      alert("First name cannot be numeric");
      valid=false;
    }
    else if (lname == " ") {
        alert("Last name cannot be empty");
        valid = false;
      }  
    else if (lname.length > 30) {
        alert("Last name too big");
        valid = false;
    } 
    else if (!isNaN(lname)){
        alert("Last name cannot be numeric");
        valid=false;
        
    }
    else if (eid == "") {
      alert("Email id cannot be empty");
      valid = false;
    } 
    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= eid.length) {
      alert("Invalid Email id");
      valid = false;
    } 
    else if (phno == "") {
      alert("Contact No. cannot be empty");
      valid = false;
    } 
    else if (isNaN(phno) == true) {
      alert("Enter a Valid Phone Number (Only digits) ");
      valid = false;
    } 
    else if (phno.length != 10 ) {
      alert("Enter a Valid Phone Number (10 digit only)");
      valid = false;
    } 
    return valid;
  };
  
  
  function addHtmlTableRow() {                              
  
  
    var table = document.getElementById("mytable");
    if (validation()) {
      alert("Form Submitted :)")
      var newRow = table.insertRow(table.length),           
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5);
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var eid = document.getElementById("emailid").value;
        var phno = document.getElementById("phno").value;
        var state = document.getElementById("state").value;
        var category = document.getElementById("category").value;

      cell1.innerHTML = fname;                                 
      cell2.innerHTML = lname;
      cell3.innerHTML = eid;
      cell4.innerHTML = phno;
      cell5.innerHTML = state;
      cell6.innerHTML = category;
      
      document.getElementById("register").reset();
      selectedRowToInput();                                       
      document.getElementById("register").reset();                    
    }
};
   
  