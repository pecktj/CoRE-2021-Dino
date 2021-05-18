# CoRE-2021-ML-Dino

Have you ever lost internet and you were forced to play that Chrome Dino Game. This project is a recreation of that dino game from scratch but amking it CoRE themed. This game has the CoRE bot soaring through the halls of O'connor having to dodge whatever is in its path. To recreate the Dino game, I used the p5 library in Javascript. This gave me certain features like creating shapes, taking in user inputs like key presses and letting me easily display images to the screen. All of the art assets were made from scratch using MS Paint, ee xcept the CoRE Bot.

## Running the code

In order to run the code I made, I needed to use a Chrome app to display my code on a local server. If you want to try and run my code follow these steps.
1. download the repository 
2. Download the chrome app: Web server for Chrome - https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-app-launcher-info-dialog
3. After downloading the app, run it and select the current folder to be CoRE-2021-ML-Dino
4. Click on the web server and the code should run.

## Sketch.js

Sketch.js is the main file for the program. In this file is the setup and the draw methods. These methods are provided in the p5 library. The setup function is run before the draw and its best for creating a canvas and setting up variables beforehand. The Draw method runs after setup and runs 60 every second, or 60 frames a second. The draw method allows me to have moving parts in my game and have it dynamically change. In this file, I create player, block and door objects and I update there position and show them to the screen. As well I check whether the player and the block collides 60 times a second. For the block/obstacles, I have an array and a new random block is pushed onto the array at random intervals and popped off when it reaches the edge of the screen. This is the same for the doors although they are just background. The keypress method is also located in the sketch file and checks whether the user pressed the space bar fir the bot to jump.

## Player.js

After taking CS140 I wanted to try implementing object oriented programming into my own projects. So I created the player class which contains its location velocity, gravity and whether or not they lost. The methods that appear are update which changes its velocity based on gravity. Show, which diaplys an image based on the location of the player and Jump which changes the velocity and gravity of the bot when the spacebar is pressed.

## Block.js

Block.js is similar to the player but in this class an argument is passed to the class in order to determine which block to create. This is how the randomness is implemented. Like  the plpayer, the block class has the show and update methods. But unlike the player, the block has offscreen whoch checks if the block is offscreen and collide which checks if the block and player are touching.

## Door.js

Door.js is the same as block.js but with one type and there is no collision checking
