$(document).ready(function () {
    $("#calculateBtn").click(function () {
        // Set your hourly rate
        let ratePerKey = 1;

        // Display the hourly rate
        $("#ratePerKey").text(ratePerKey);

        // Get the number of hours entered by the user
        let keys = parseFloat($("#keys").val());

        // Validate that the entered value is a positive number
        if (isNaN(keys) || keys < 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Calculate the total cost
        let totalCost = keys * ratePerKey + 35;

        // Display the total cost
        $("#totalCost").text(totalCost);
    });
}); 