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
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }

  return result;
}

function blockRollResult(racer, attribute, diceResult) {
  let racerSkill;
  if (attribute === "manobrabilidade") {
    racerSkill = racer.maneuverability;
  } else if (attribute === "velocidade") {
    racerSkill = racer.speed;
  } else if (attribute === "poder") {
    racerSkill = racer.power;
  }
  console.log(
    `${racer.name} 🎲 rolou o dado de ${attribute} ${diceResult} + ${racerSkill} = ${diceResult + racerSkill}`,
  );
}

function scoreboard() {
  console.log("---");
  console.log("Placar atual: 🚩");
  console.log(`${player1.name}: ${player1.points} ponto(s)`);
  console.log(`${player2.name}: ${player2.points} ponto(s)`);
}

async function playRaceEngine(racer1, racer2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);
    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + racer1.speed;
      totalTestSkill2 = diceResult2 + racer2.speed;

      await blockRollResult(racer1, "velocidade", diceResult1);
      await blockRollResult(racer2, "velocidade", diceResult2);
    }
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + racer1.maneuverability;
      totalTestSkill2 = diceResult2 + racer2.maneuverability;

      await blockRollResult(racer1, "manobrabilidade", diceResult1);
      await blockRollResult(racer2, "manobrabilidade", diceResult2);
    }
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + racer1.power;
      let powerResult2 = diceResult2 + racer2.power;

      await blockRollResult(racer1, "poder", diceResult1);
      await blockRollResult(racer2, "poder", diceResult2);

      if (powerResult1 > powerResult2 && player2.points > 0) {
        console.log(`${player2.name} perdeu um ponto! 🔽`);
        player2.points--;
      } else if (powerResult2 > powerResult1 && player1.points > 0) {
        console.log(`${player1.name} perdeu um ponto! 🔽`);
        player1.points--;
      } else if (powerResult1 === powerResult2) {
        console.log("Confronto empatado! Nenhum ponto foi perdido! ⚖️");
      } else {
        console.log(
          "🚘 Quem perdeu essa rodada tinha 0 pontos por isso não perdeu nenhum ponto",
        );
      }
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${player1.name} marcou um ponto! 🥇`);
      player1.points++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${player2.name} marcou um ponto! 🥇`);
      player2.points++;
    } else if (block !== "CONFRONTO" && totalTestSkill1 === totalTestSkill2) {
      console.log("Rodada empatada! Ninguém ganhou ponto! ⚖️");
    }
    scoreboard();

    console.log("------------------------------------");
  }
}

async function declareWinner(p1, p2) {
  console.log("Resultado final:");
  console.log(`${p1.name}: ${p1.points} ponto(s)`);
  console.log(`${p2.name}: ${p2.points} ponto(s)`);

  if (p1.points > p2.points) {
    console.log(`\n${p1.name} ganhou a corrida! 🏆`);
  } else if (p2.points > p1.points) {
    console.log(`\n${p2.name} ganhou a corrida! 🏆`);
  } else {
    console.log(`\n${p1.name} e ${p2.name} empataram a corrida! 🏅`);
  }
}

//função auto invocável, não precisa ser chamada em outro lugar
(async function main() {
  console.log(
    `🏁🚨 Corrida entre ${player1.name} e ${player2.name} começou... \n `,
  );
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
