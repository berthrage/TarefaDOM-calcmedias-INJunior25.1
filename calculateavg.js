let scores = []

function AddScore() {
    let textArea = document.querySelector("#scores-text");
    let scoreInputUnfiltered = document.querySelector("#score-input").value;

    if (scoreInputUnfiltered === "") {
        alert("Por favor, insira uma nota");
        return;
    }

    let scoreInputFiltered = scoreInputUnfiltered.replace(",", ".");
    let scoreInput = parseFloat(scoreInputFiltered);

    if (isNaN(scoreInput) || !(scoreInput >= 0 && scoreInput <= 10)) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida");
        return;
    }
    scores.push(scoreInput.toFixed(2));

    textArea.value += `A nota ${scores.length} foi ${scoreInput.toFixed(2)}\n`;
}

function CalculateAvg() {
    let resultP = document.querySelector("#result");
    let total = 0;
    for (let score of scores) {
        total += parseFloat(score);
    }
    let avg = (total / scores.length);
    resultP.innerText = `A média é ${avg.toFixed(2)}`;
}

let scoreSubmitButton = document.querySelector("#score-submit-button");
scoreSubmitButton.addEventListener("click", ()=>AddScore());

let calculateAvgButton = document.querySelector("#calculate-avg-button");
calculateAvgButton.addEventListener("click", ()=>CalculateAvg());

