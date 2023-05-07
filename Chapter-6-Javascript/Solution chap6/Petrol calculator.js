/*Use of function to call values entered by the user in the fields and calculate the total cost using those values */
function calculateprice(){
    let price = document.getElementById("cost").value;
    let purchased = document.getElementById("no.oflitres").value;
    document.getElementById("TOTALCOST").innerHTML= "Total cost of purchased petrol = $"+price*purchased;
}