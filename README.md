# NBA_JS_Project
Link to live project:
https://kentzhang06.github.io/NBA_JS_Project/

![nba-project](https://user-images.githubusercontent.com/44277861/140581542-c20252e3-c62c-46f6-ab73-e058539faaae.gif)

# Background:

NBA players data visualizer will dynamically display 30 players, one from each NBA team, average stats from the time they joined the league until the present day.
Each team will have one player as a representative of their team aka the face of the team. The home page will be a map of the USA with selectable pins locating each NBA team.
Once a player is selected from the home screen, a dynamically growing bar graph will display the stats of the player from their rookie season to current day.


The image below is the splash page utilizing SimpleMaps.com interactive map to display locations of NBA teams around the USA. On the left is an interactive list that allows you to hover over a state's name to locate that state.
![image](https://user-images.githubusercontent.com/44277861/140581036-21ff7ce5-5eae-4e69-bcbb-5a3e34de7c62.png)

When selecting a specific location marker when zoomed in on a state, automatically displayed will be averages for the most recent completed season for the most popular player of that team. Below shows Stephen Curry of the Golden State Warriors' 2020 average stats. The buttons on the left allow for the user to select which season averages they would like to display.
![screen-shot](https://user-images.githubusercontent.com/44277861/140581838-6248a5d2-d782-4264-84e5-f8d0ba590cd8.jpg)

```
  for (let i = rookieYear; i < currentYear; i++) {
    let childButton = document.createElement("div");
    childButton.className = "year-btn";
    childButton.innerHTML = `<div>${i}</div> <ion-icon name="basketball"></ion-icon>`;
    childButton.addEventListener("click", async function () {
      res = await fetchPlayer(name, i);
      stats = res.data[0];
      pieChart.destroy();
      barChart.destroy();
      pieChart = createPieChart(stats.fg_pct, stats.fg3_pct, stats.ft_pct);
      barChart = createBarChart(
        stats.pts,
        stats.ast,
        stats.reb,
        stats.stl,
        stats.blk,
        stats.turnover,
        stats.games_played
      );
    });
    btnsContainer.appendChild(childButton);
  }
 ```

# Functionality:
In NBA Players Stats, users will be able to:

- Clickable selections of a map of the USA with selectable pins for each NBA team
- Zoom in and out closer to the map by scrolling
- Visualize a selected player's average stats from each season (rookie-present)
- Manually select a year to display average stats of a player that year

In addition, this project will include:
- Directions on how to use the visualizer
- A production README

# Wireframes:
![image](https://user-images.githubusercontent.com/44277861/131954838-8a682d7b-c7f2-40b9-b7f3-afedff0b1542.png)

- Nav links will include links to this project's Github repo, my LinkedIn and AngelList, and directions on how to use the visualizer
- Nav link will also include a search bar to manually search for a player/team.
- Home page will display clickable pins in a team's state location. Pin will take them to player's show page.
- Player's show page will automatically display growing bar graphs of players stats.
- To show a specific year of stats, filter bar will allow filtering based on year.
- Each bar will also allow for muting/volume of background music.

# Technologies, Libraries, APIs:
- https://balldontlie.io/ API
- Vanilla DOM manipulation for click handling
- Chart.js for dynamic bar graph visualization


# Bonus features:
- Add beats that goes with the growth of bar graphs in player's show page.
- Add a morphing image of the selected player from rookie season to present day.


