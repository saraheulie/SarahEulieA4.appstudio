let CustomerList = []


btnShow.onclick = function() {
  query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        CustomerList = JSON.parse(req.responseText)
        console.log(`The results are \n ${CustomerList}`)
        if (CustomerList.length === 0)    
           lblMessage2.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < CustomerList.length; i++)
               message = message + CustomerList[i] + "\n"
           txtaCustomers.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage2.value = "Error code: " + req.status
}

btnDelete.onclick=function(){
  let CustomerDel = inptDelete.value
    
    // make sure the customer is in the database before you try to 
    // delete it
    let found = false
    for (i = 0; i < CustomerList.length; i++) {
        if (CustomerDel == CustomerList[i]){
            found = true
            break // if found the item in the database jump out of loop
        }
    }
    if (found == false) 
       lblMessage2.value = "That customer name is not in the database."
    else if (found == true) {
      query = `DELETE FROM customer WHERE name = '${CustomerDel}'`
      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
      if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {    // means the insert succeeded
                lblMessage2.value = `You have successfully deleted the customer named ${CustomerDel}`
            } else
                lblMessage2.value = `There was a problem deleting ${CustomerDel} from the database.`
     } else  // transit error
        lblMessage5.textContent = `Error: ${req.status}`
    } // found is true
} // end event handler


btnRepeat.onclick=function(){
    txtaCustomers.value = ""
    inptDelete.value = ""
    lblMessage2.value = ""
}
