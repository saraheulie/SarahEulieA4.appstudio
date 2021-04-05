let query = ""
let req = {}
let netID = "sme89450"
let pw = "Chocolate-0-"
let results = []

CustomerStates.onshow = function() {
   drpStates.clear() 
  query = "SELECT DISTINCT `state` FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  
  if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length === 0)    
           lblMessage.value = "There are no customers in the database."
        else {       
            for (i = 0; i < results.length; i++)
             drpStates.addItem(results[i])
                }
     } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage.value = "Error code: " + req.status
}
             
            
drpStates.onclick=function(s){
  let state = drpStates.selection
    query = `Select name FROM customer WHERE state = '${state}'`
    // call 
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    
    //check if call worked
        if (req.status == 200) { //transit trip worked. 
        results2 = JSON.parse(req.responseText)
        if (results2.length == 0)    
           lblCustomers.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results2.length; i++)
               message = message + results2[i][0] + "\n"
           txtaCustomerStates.value = `The customer(s) in ${state} are: \n` + message
        } // end else

      } else   // the transit didn't work - bad wifi? server turned off?
          lblCustomers.value = "Error code: " + req.status

 }
} 
    

