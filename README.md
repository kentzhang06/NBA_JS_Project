# NBA_JS_Project

# Background:

NBA players data visualizer
This data visualizer will dynamically display the 30 players, one from each NBA team, stats from the time they joined the league until the present day.
Each team will have one player as a representative of their team aka the face of the team. The home page will be a map of the USA with selectable pins locating each NBA team.
Once a player is selected from the home screen, a dynamically growing bar graph will display the stats of the player from their rookie season to current day.

# Functionality:
In NBA Players Stats, users will be able to:

- Clickable selections of a map of the USA with selectable pins for each NBA team
- Zoom in and out closer to the map by scrolling
- Visualize a selected player's stats dynamically grow over the years
- Manually select a year to display total stats or average stats of a player that year
- Select background music

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
- D3.js for dynamic bar graph visualization

# Implementation Timeline:
-  Friday Afternoon & Weekend: Setup project, get webpack running. Get used to D3 for data visualization. Learn how to implement a zoomable map of the USA. Create classes for a single player and a city on the map.
- Monday: Ensure that each pin on the map is clickable and redirects to a different page (player's show page). Add searching feature to NAV bar and links to socials.
- Tuesday: On the player's show page, implement dynamically growing bar graphs of the players stats. Implement ability to statically show player's stats from a selected year using the filter bar.
- Wednesday: Focus on styling each step of the project, if have time add background sound on home page and player's show page.
- Thursday Morning: Deploy to GitHub pages. Rewrite proposal.

# Bonus features:
- Add beats that goes with the growth of bar graphs in player's show page.
- Add a morphing image of the selected player from rookie season to present day.


