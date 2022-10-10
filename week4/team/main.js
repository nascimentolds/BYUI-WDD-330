const box = document.querySelectorAll(".box");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

let play = "O";

let allPlays = [];
let wins = [
  ["b1=O", "b2=O", "b3=O"],
  ["b4=O", "b5=O", "b6=O"],
  ["b7=O", "b8=O", "b9=O"],
  ["b1=O", "b4=O", "b7=O"],
  ["b2=O", "b5=O", "b8=O"],
  ["b3=O", "b6=O", "b9=O"],
  ["b1=O", "b5=O", "b9=O"],
  ["b3=O", "b5=O", "b7=O"],
  ["b1=X", "b2=X", "b3=X"],
  ["b4=X", "b5=X", "b6=X"],
  ["b7=X", "b8=X", "b9=X"],
  ["b1=X", "b4=X", "b7=X"],
  ["b2=X", "b5=X", "b8=X"],
  ["b3=X", "b6=X", "b9=X"],
  ["b1=X", "b5=X", "b9=X"],
  ["b3=X", "b5=X", "b7=X"],
];

box.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.childNodes.length != 1) {
      if (play === "O") {
        item.innerHTML = "X";
        play = "X";
      } else {
        item.innerHTML = "O";
        play = "O";
      }
    }

    allPlays.push(item.getAttribute("id") + "=" + item.innerHTML);

    const winReturn = wins
      .map((x) => x.filter((y) => allPlays.includes(y)))
      .reduce(
        (acc, cur, idx) => {
          cur.length > acc.matchCout &&
            (acc = { matchCout: cur.length, array: wins[idx] });
          return acc;
        },
        { matchCout: 0, array: [] }
      );

    const playerWin = winReturn.array[0].substr(3, 1);

    result.innerHTML =
      winReturn.matchCout === 3
        ? `<strong>${playerWin}</strong> is the Winner`
        : "Tied";
  });
});

btn.addEventListener("click", () => {
  box.forEach((item) => {
    item.innerHTML = "";
    allPlays = [];
  });
});
