# Arkanoid

uses Typescript and Parcel

### how to play
use the arrow keys to move the paddle
<kbd>&larr;</kbd> <kbd>&rarr;</kbd>

### bricks
Each type of brick has a certain energy level. This determines how many times the ball has to strike the brick in order to make the brick disappear.

- red brick: energy level 1
- green brick: energy level 1
- yellow rbick energy level 2
- blue brick: energy level 2
- purple brick: energy level 3
### score
The score in the bottom left corner increments by 1 each time the ball strikes a brick and resets when on every game over.

## dev

```shell
# clone the repo & go into the folder
$ git clone https://github.com/exu3/arkanoid.git && cd arkanoid

# install dependencies
$ npm install

# run it at localhost:1234
$ npm run start

# build & deploy
$ npm run build
```
In the `/src` directory: 

1. `/images` - where all the images for the sprites are stored (bricks, paddle, ball)

1. `/sprites` - define how the sprites move, position, etc

1. `/styles` - css for the site

1. `/view` - the canvas

1. `Collision.ts` - what happens when the ball touches the edges, paddle, or bricks

1. `helpers.ts` - creates the layout for the bricks

1. `index.html` - what you see in the browser

1. `setup.ts` - defines the constants for the game including size, position, etc

1. `types.ts` - because typescript
