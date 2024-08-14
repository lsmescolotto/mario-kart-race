const player1 = {
  name: "Mario",
  speed: 4,
  maneuverability: 3,
  power: 3,
  points: 0,
};

const player2 = {
  name: "Peach",
  speed: 3,
  maneuverability: 4,
  power: 2,
  points: 0,
};

const player3 = {
  name: "Yoshi",
  speed: 2,
  maneuverability: 4,
  power: 3,
  points: 0,
};

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "STRAIGHT";
      break;
    case random < 0.66:
      result = "CURVE";
      break;
    default:
      result = "CONFRONTATION";
      break;
  }

  return result;
}

function blockRollResult(racer, attribute, diceResult) {
  let racerSkill;
  if (attribute === "maneuverability") {
    racerSkill = racer.maneuverability;
  } else if (attribute === "speed") {
    racerSkill = racer.speed;
  } else if (attribute === "power") {
    racerSkill = racer.power;
  }
  console.log(
    `${racer.name} 🎲 rolled the dice for ${attribute} ${diceResult} + ${racerSkill} = ${diceResult + racerSkill}`,
  );
}

function scoreboard() {
  console.log("---");
  console.log("Current scoreboard: 🚩");
  console.log(`${player1.name}: ${player1.points} point(s)`);
  console.log(`${player2.name}: ${player2.points} point(s)`);
}

async function playRaceEngine(racer1, racer2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Round ${round}`);
    // choose random block
    let block = await getRandomBlock();
    console.log(`Block: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "STRAIGHT") {
      totalTestSkill1 = diceResult1 + racer1.speed;
      totalTestSkill2 = diceResult2 + racer2.speed;

      await blockRollResult(racer1, "speed", diceResult1);
      await blockRollResult(racer2, "speed", diceResult2);
    }
    if (block === "CURVE") {
      totalTestSkill1 = diceResult1 + racer1.maneuverability;
      totalTestSkill2 = diceResult2 + racer2.maneuverability;

      await blockRollResult(racer1, "maneuverability", diceResult1);
      await blockRollResult(racer2, "maneuverability", diceResult2);
    }
    if (block === "CONFRONTATION") {
      let powerResult1 = diceResult1 + racer1.power;
      let powerResult2 = diceResult2 + racer2.power;

      await blockRollResult(racer1, "power", diceResult1);
      await blockRollResult(racer2, "power", diceResult2);

      if (powerResult1 > powerResult2 && player2.points > 0) {
        console.log(`${player2.name} has lost a point! 🔽`);
        player2.points--;
      } else if (powerResult2 > powerResult1 && player1.points > 0) {
        console.log(`${player1.name} has lost a point! 🔽`);
        player1.points--;
      } else if (powerResult1 === powerResult2) {
        console.log("Tied round! No point was lost! ⚖️");
      } else {
        console.log(
          "🚘 Who lost this round had 0 points and didn't lose any points because of it",
        );
      }
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${player1.name} scored a point! 🥇`);
      player1.points++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${player2.name} scored a point! 🥇`);
      player2.points++;
    } else if (
      block !== "CONFRONTATION" &&
      totalTestSkill1 === totalTestSkill2
    ) {
      console.log("Tied round! No one has scored a point! ⚖️");
    }
    scoreboard();

    console.log("------------------------------------");
  }
}

async function declareWinner(p1, p2) {
  console.log("Final results:");
  console.log(`${p1.name}: ${p1.points} point(s)`);
  console.log(`${p2.name}: ${p2.points} point(s)`);

  if (p1.points > p2.points) {
    console.log(`\n${p1.name} won the race! 🏆`);
  } else if (p2.points > p1.points) {
    console.log(`\n${p2.name} won the race! 🏆`);
  } else {
    console.log(`\n${p1.name} and ${p2.name} tied the race! 🏅`);
  }
}

//self-invoking function, does not need to be called elsewhere
(async function main() {
  console.log(
    `🏁🚨 ${player1.name} and ${player2.name} race has started... \n `,
  );
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
