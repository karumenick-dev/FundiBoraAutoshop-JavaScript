const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const garageServices = ["Engine Check", "Suspension Check", "Gearbox Check", "Alignment Check"];

function selectGarageServices() {
  readline.question(
    "Please select a garage service: \n\n- Enter 'Engine Check' to select Engine Check \n- Enter 'Suspension Check' to select Suspension Check \n- Enter 'Gearbox Check' to select Gearbox Check \n- Enter 'Alignment Check' to select Alignment Check\n > ",
    (userInput) => {
      let description = "";

      if (userInput === "Engine Check") {
        description = "An engine check looks out for any issues related to your internal combustion engine.";
      } else if (userInput === "Suspension Check") {
        description = "A suspension check diagnoses your shock absorbers.";
      } else if (userInput === "Gearbox Check") {
        description = "A gearbox check troubleshoots any potential issues with your gearbox.";
      } else if (userInput === "Alignment Check") {
        description = "An alignment check ensures your wheels are properly aligned.";
      } else {
        description = "No description available for this service.";
      }

      console.log(`You selected ${userInput} service. Here is the description: ${description}`);
      readline.close();
    }
  );
}

// Call the function to run it
console.log("Welcome to Fundi Bora Autoservices!");
selectGarageServices();