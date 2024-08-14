<h1>Node.JS Project Challenge: Mario Kart.JS</h1>

<table>
    <tr>
        <td>
            <img src="./assets/images/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objective:</b>
            <p>Mario Kart is a series of racing games developed and published by Nintendo. Our challenge will be to create the logic of a video game to simulate Mario Kart races, taking into account the rules and mechanics below.</p>
        </td>
    </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="./assets/images/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 4</p>
            <p>Maneuverability: 3</p>
            <p>Power: 3</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="./assets/images/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Maneuverability: 4</p>
            <p>Power: 2</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="./assets/images/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Maneuverability: 4</p>
            <p>Power: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="./assets/images/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 5</p>
            <p>Maneuverability: 2</p>
            <p>Power: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="./assets/images/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Maneuverability: 4</p>
            <p>Power: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="./assets/images/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Maneuverability: 2</p>
            <p>Power: 5</p>
        </td>
    </tr>
</table>

<p></p>

<h3>🕹️ Rules & Mechanics:</h3>

<b>Players:</b>

<input type="checkbox" id="players-item" />
<label for="players-item">The Computer must receive two characters to compete in the race, each in its own object</label>

<b>Tracks:</b>

<ul>
  <li><input type="checkbox" id="tracks-1-item" /> <label for="tracks-1-item">The characters will race on a random track of 5 rounds</label></li>
  <li><input type="checkbox" id="tracks-2-item" /> <label for="tracks-2-item">In each round, a track section will be randomly selected, which can be a straight, curve, or confrontation</label>
    <ul>
      <li><input type="checkbox" id="tracks-2-1-item" /> <label for="tracks-2-1-item">If the track section is a STRAIGHT, the player must roll a 6-sided die and add the SPEED attribute; the winner gets a point</label></li>
      <li><input type="checkbox" id="tracks-2-2-item" /> <label for="tracks-2-2-item">If the track section is a CURVE, the player must roll a 6-sided die and add the MANEUVERABILITY attribute; the winner gets a point</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">If the track section is a CONFRONTATION, the player must roll a 6-sided die and add the POWER attribute; the loser loses a point</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">No player can have a negative score (below 0)</label></li>
    </ul>
  </li>
</ul>

<b>Victory Condition:</b>

<input type="checkbox" id="victory-item" />
<label for="victory-item">At the end, the player with the most points wins</label><br>

<b>To play the game:</b>

<ul>
  <li>Clone the repository</li>
  <li>Run "npm install" in your CLI to install all dependencies</li>
  <li>Run "node src/index.js" in your CLI</li>
</ul>
