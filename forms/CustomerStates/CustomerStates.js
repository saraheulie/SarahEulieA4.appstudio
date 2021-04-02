let query = ""
let req = {}
let netID = "sme89450"
let pw = "Chocolate-0-"
let results = []

CustomerStates.onshow = function() {
  query = "SELECT `state` FROM customer GROUP BY `state`"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  
  if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length === 0)    
           lblMessage.value = "There are no customers in the database."
        else {       
            console.log(results)
            for (i = 0; i < results.length; i++)
             drpStates.addItem(results[i])
                }
        }
}

/*
 for (i = 0; i < results.length; i++)
             drpStates.addItem(results[i])
*/
             
            
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
               message = message + results2[i] + "\n"
           lblCustomers.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblCustomers.value = "Error code: " + req.status

 }
} 
    
/*    
    
    let state = drpStates.selection     
    query = `SELECT name FROM customer WHERE state = '${state}'`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length === 0)    
           lblCustomers.value = "There are no customers in the database."
        else {       
            let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           lblCustomers.value = message
                }
        }
  }
  
}
*/
