const operators = [
    { name: "Ash", team: "Aanvaller", gadget: "Haar breaching rounds openen snel zachte muren." },
    { name: "Thermite", team: "Aanvaller", gadget: "Zijn exothermische ladingen openen versterkte muren." },
    { name: "Aruni", team: "Verdediger", gadget: "Ze kan een electrische barrière maken met haar Surya Gates die schade en controle geeft." },
    { name: "Thatcher", team: "Aanvaller", gadget: "Zijn EMP-granaten schakelen elektronische gadgets tijdelijk uit." },
    { name: "Jäger", team: "Verdediger", gadget: "Zijn ADS-systemen onderscheppen bepaalde inkomende projectielen." },
    { name: "Rook", team: "Verdediger", gadget: "Hij kan zijn team pantserplaten geven voor extra bescherming." },
    { name: "Bandit", team: "Verdediger", gadget: "Zijn shock wire kan versterkte muren en prikkeldraad elektrificeren." }
];

const pickButton = document.querySelector("#pick-operator");
const result = document.querySelector("#operator-result");
let previousOperatorIndex = -1;

pickButton.addEventListener("click", () => {
    let operatorIndex = Math.floor(Math.random() * operators.length);

    if (operators.length > 1) {
        while (operatorIndex === previousOperatorIndex) {
            operatorIndex = Math.floor(Math.random() * operators.length);
        }
    }

    previousOperatorIndex = operatorIndex;
    const operator = operators[operatorIndex];
    result.textContent = `${operator.name} (${operator.team}): ${operator.gadget}`;
});