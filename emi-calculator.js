function calculateEMI() {
    // Get input values from the form
    let principal = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let tenure = document.getElementById("loanTenure").value;

    // Convert annual interest rate to monthly and tenure to months
    let monthlyInterestRate = (interestRate / 100) / 12;
    let numberOfMonths = tenure * 12;

    // EMI calculation using the formula
    let emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / 
              (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    // Total payment and interest calculations
    let totalPayment = emi * numberOfMonths;
    let totalInterest = totalPayment - principal;

    // Rounding off the results to two decimal places
    emi = emi.toFixed(2);
    totalPayment = totalPayment.toFixed(2);
    totalInterest = totalInterest.toFixed(2);

    // Displaying the results in the respective HTML elements
    document.getElementById("emi").innerHTML = `Your monthly EMI is ₹${emi}`;
    document.getElementById("totalInterest").innerHTML = `Total Interest Payable: ₹${totalInterest}`;
    document.getElementById("totalPayment").innerHTML = `Total Payment (Principal + Interest): ₹${totalPayment}`;
}
