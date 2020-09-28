# Game Design Document

## Title of the Game
Pirate Adventure.

## Game Overview
### Concept
The player controls the movements of a pirate to help him collecting diamonds along the way while jumping between platforms to avoid falling into the sea.

### Genre 
Action, platform, casual.

### Target Audience
For all ages.

### Game Flow Summary
<img src="src\assets\images\game-flow.png" alt="screenshot" width="600"/>

## Gameplay and Mechanics
### Scenes
1. Title: Displays three options for the user which are start to initialize the game, options to deactivate the background music and credits to display the game's credits.
<img src="src\assets\images\screenshot-01.PNG" alt="screenshot" width="600"/>    

2. Game: It is the game itself.     
<img src="src\assets\images\screenshot-02.PNG" alt="screenshot" width="600"/>     

3. Game Over: Displays the score of the user and provides a form so the user can save the score.     
<img src="src\assets\images\screenshot-03.PNG" alt="screenshot" width="600"/>     

4. Leaderboard: Shows all the users' scores and two options so the user can restart the game or go to the title scene again.    
<img src="src\assets\images\screenshot-04.PNG" alt="screenshot" width="600"/>      

### Mechanics
- The player earns 10 points each time the pirate overlaps a red diamond.
- The red diamond is removed from the scene once is collected by the player.
- The platforms have a constant movement from right to left and also appear randomly inside a delimited space.
- The player counts with a double jump.
- If the player falls off one of the platforms, the game ends.

## Story and Character
### Story
The captain clown nose tries to recollect all his lost diamonds and return safely to his ship.

## Character and item
### Captain Clown Nose     
<img src="src\assets\images\captain-clown-nose.png" alt="screenshot"/>   
This is the player.

### Red Diamond
<img src="src\assets\images\red-diamond.png" alt="screenshot"/>   
This is the red diamond.

## Interface
### Control System
The player can move the character using the keyboard cursors.
1. Up: To make the character jump. If it is pressed two consecutive times it makes a double jump.
2. Right: It makes the character to run to the right.
3. Left: It makes the character to run to the left.

### Audio
Background music to create an 8-bit action game environment by [Fesliyan Studios](https://www.fesliyanstudios.com/). 