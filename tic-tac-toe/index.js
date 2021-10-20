let turn = "x";
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
let isDialogShown = false;

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;

  // moved checkWin() here, so i don't have to change turn type
  checkWin();

  turn = turn === "x" ? "o" : "x";
  displayTurn(turn);
});

function displayTurn(turn) {
  document.querySelector("h1[class=turn]").innerHTML = `${turn} turn`;
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const symbolsVector = [...symbols[0], ...symbols[1], ...symbols[2]];
  let isWin = true;
  for (condition of conditions) {
    isWin = true;
    for (position of condition) {
      if (symbolsVector[position] !== turn) {
        isWin = false;
        break;
      }
    }
    if (isWin) {
      break;
    }
  }

  if (isWin) {
    showWinDialog();
  }
}

// showWinDialog();
function showWinDialog() {
  isDialogShown = true;
  const curtain = document.createElement("div");
  curtain.className = "curtain";
  document.querySelector(".wrapper").classList.add("blur");

  const text = document.createTextNode(`You Have Won! (${turn})`);
  curtain.appendChild(text);

  const button = document.createElement("button");
  button.addEventListener("click", reset);
  button.textContent = "Reset";
  button.className = "reset-button";
  curtain.appendChild(button);
  document.querySelector("body").appendChild(curtain);
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  // 4. zresetuj stan gry

  for (tile of tiles) {
    tile.classList = "tile";
  }

  turn = "x";
  displayTurn(turn);

  symbols = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  if (isDialogShown) {
    isDialogShown = false;

    document.querySelector('.reset-button').removeEventListener('click', reset);
    document.querySelector(".curtain").remove();
    document.querySelector(".wrapper").classList.remove("blur");
  }
}

document.querySelector(".reset").addEventListener("click", reset);
