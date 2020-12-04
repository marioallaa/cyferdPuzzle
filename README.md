# cyferd Puzzle


``` Thomas is running in random directions for the simple reason that people do not think too much when they are in front of dangerous situations, they just do the first thing that comes on their minds.  ```


Make Thomas smarter, 

``` given that the 🐺 will do the same thing always, Thomas should think what step should he take to get as far away as possible from the wolf. 
So he will still have the illusion of free and truly random choice, but he will decide more careful, so that he will literally run away from the wolf, not towards him``` 


Add an API, 

`get` `/field` 
returns `the layout`

`get` `/wolf` 
returns `the wolf position`

`get` `/tom` 
returns `Tom's position`

`post` `/tom/go` 
body: `{"direction": "R"}` 
      `{"direction": "L"}` 
      `{"direction": "T"}` 
      `{"direction": "B"}` 
returns `Tom's position, + 2 🐺 moves`




