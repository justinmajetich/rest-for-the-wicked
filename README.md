# REST for the Wicked

## About the Game
REST for the Wicked is inspired by text adventure games of the 70s, 80s and 90s. The look and feel is meant to invoke the graphics of the Apple Macintosh of the early 90s. Some of the inspiration for the game comes from series like Zork, Mist, Out of this World and Flashback.

The story is inspired by dystopian works like 1984, Brave New World, 12 Monkeys, The Matrix and Blade Runner.

The idea for a game that teaches coding with coding challenges comes from games like:

- CodinGame
- Flexbox Froggy
- Code Combat
- Untrusted
- Robocode
- Elevator Saga

We were inspired to create this game because when we created our own RESTful APIs for the Holberton Airbnb Clone project, many of us found the REST API concept difficult to understand. Even students from cohorts above us were unable to explain what a REST API is in a few sentences.

Although there are many text heavy REST API tutorials and explanations, we felt as though they were either too technical or too general. In envisioning REST for the Wicked, we realized that a text adventure game would be the perfect environment to explore what a RESTful API is and what it does.

The game is both played using the ideas of a RESTful API and built using a REST API. We thought this meta-idea a great educational tools.

### How to Play
The central textbox tells the story, but also contains certain words inside a tile. The tiled words are points of interest or items in the game that the player can interact with. Points of interest include rooms as well as places such as the vault and the computer. When a tile is brought onto the game bar, a method tile can be dragged, creating a combination that is then queried after clicking the Make Request button.

![Gamebar-1](https://github.com/justinmajetich/rest-for-the-wicked/blob/master/landing_page/img/gambar-1.JPG)

The game bar is interactive, so, for example, when the "lobby" tile is dragged onthe the "path", the bar expands to allows the player to drag additional tiles, such as a "key" or an item.

gamebar expanded
Using the REST architecture, a point of interest is synonymous with a URL route, while a key is meant to represent an API key or authorization.

Once the player has stacked the tiles necesarry to engage the point of interest or item in the game bar, they can add the requisite REST API method to the begining of the route and hit "Make Request".