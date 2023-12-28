document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) !== "undefined") {
        var existingInputs = localStorage.getItem('userInputs');

        var inputsArray = existingInputs ? JSON.parse(existingInputs) : [];

        var userInputList = document.getElementById('userInputList');

        if (inputsArray.length > 0) {
            userInputList.innerHTML = "";

            inputsArray.forEach(function (input) {
                var listItem = document.createElement('li');
                listItem.textContent = input;
                userInputList.appendChild(listItem);
            });
        } else {
            userInputList.innerHTML = "<li>No user inputs yet.</li>";
        }
    } else {
        alert("Sorry, your browser does not support local storage. The 'Pin It' feature won't work.");
    }
    function removeItem(index) {
        inputsArray.splice(index, 1);
        localStorage.setItem('userInputs', JSON.stringify(inputsArray));
        displayUserInputs();
    }
    function displayUserInputs() {
        if (inputsArray.length > 0) {
            userInputList.innerHTML = "";

            inputsArray.forEach(function (input, index) {
                var listItem = document.createElement('li');
                listItem.textContent = input;

                var removeButton = document.createElement('button');
                removeButton.textContent = 'REMOVE';
                removeButton.onclick = function () {
                    removeItem(index);
                };

                listItem.appendChild(removeButton);
                userInputList.appendChild(listItem);
            });
        } else {
            userInputList.innerHTML = "<li>No user inputs yet.</li>";
        }
    }

    displayUserInputs();
});