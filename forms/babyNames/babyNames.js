let listBabyNames = ['Teresa', 'Stephanie', 'Sarah', 'Isabella', 'Abigail', 'Nora', 'Cat', 'Brandi', 'Mari', 'Leia', 'Kaitlyn', 'Daniella', 'Gabriella', 'Maeve','Karlie','Amelia','Rowan','Emily','Samantha','Darlene']
let chosen = ""


babyNames.onshow=function(){
  for (i = 0; i < listBabyNames.length; i++) 
        selNames.addItem(listBabyNames[i])
  if (chosen.length > 5) {
    lblAlert.show()
    }
}

btnContinue.onclick=function(){
  ChangeForm(favBabyNames)
 
}

selNames.onchange=function(){
  chosen = selNames.value
}
