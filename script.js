function compute()
{
    var principal = document.getElementById("principal").value;

    // Validate the principal value 
    if (principal<="0") {
        alert("Enter a positive number")
        return false;
    }
    // Get the rate 
    var rate = document.getElementById("rate").value;

    // Get the number of years
    var years = document.getElementById("years").value;

    // Calculate interest
    var interest = principal*years*rate/100;

    // Get the present year from the date object and add it to the numbber of years 
    // to calculate future years
    var year = new Date().getFullYear()+parseInt(years)

    // Calculate the amount received with interest
    var amount_received = parseInt(principal)+parseInt(interest);
    document.getElementById("result").innerHTML = "If you deposit " + principal+", <br>at an interest rate of " +rate+"%.<br>You will receive an amount of "+ amount_received+",<br>in the year "+ year
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval
}