function pinIt() {
    var userInput = document.getElementById('userInput').value;

    if (typeof(Storage) !== "undefined") {
        var existingInputs = localStorage.getItem('userInputs');

        var inputsArray = existingInputs ? JSON.parse(existingInputs) : [];

        inputsArray.push(userInput);

        localStorage.setItem('userInputs', JSON.stringify(inputsArray));

        window.location.href = 'wall_page.html';
    } else {
        alert("Sorry, your browser does not support local storage. The 'Pin It' feature won't work.");
    }
}