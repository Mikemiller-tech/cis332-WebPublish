// Array of NFC East teams with names and logos
const teams = [
  { name: "Dallas Cowboys", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Dallas_Cowboys.svg" },
  { name: "New York Giants", logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/New_York_Giants_logo.svg" },
  { name: "Philadelphia Eagles", logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Philadelphia_Eagles_logo.svg" },
  { name: "Washington Commanders", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Washington_Commanders_logo.svg" }
];

// Function to create and display team logos and names
const teamList = document.getElementById('team-list');
if (teamList) {
  teams.forEach(team => {
      // Create a list item for each team
      const listItem = document.createElement('li');

      // Create an image element for the team's logo
      const teamLogo = document.createElement('img');
      teamLogo.src = team.logo;
      teamLogo.alt = `${team.name} Logo`;

      // Create a span element for the team's name
      const teamName = document.createElement('span');
      teamName.textContent = team.name;

      // Append the image and name to the list item
      listItem.appendChild(teamLogo);
      listItem.appendChild(teamName);

      // Add the list item to the team list
      teamList.appendChild(listItem);
  });
}
