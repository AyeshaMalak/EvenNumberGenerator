function generateEvenNumbers() {
    const limit = parseInt(document.getElementById('limitInput').value);
    const resultContainer = document.getElementById('resultContainer');

    // Clear previous results
    resultContainer.innerHTML = '';
    
    if (isNaN(limit) || limit < 0) {
        resultContainer.innerHTML = '<p>Please enter a valid positive number.</p>';
        resultContainer.style.display = 'block';
        return;
    }

    let evenNumbers = [];
    let number = 0;

    while (number <= limit) {
        evenNumbers.push(number);
        number += 2; // Increment by 2 to get the next even number
    }

    // Display the result
    resultContainer.innerHTML = `<h2>Even Numbers up to ${limit}:</h2>`;
    evenNumbers.forEach(num => {
        resultContainer.innerHTML += `<p>${num}</p>`;
    });

    resultContainer.style.display = 'block';
}
