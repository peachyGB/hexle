# Honey Code

## Description

I wont pretend this isnt wordle for colors.
Can you match the two colors?

---

## Play

[You can play Honey Code here!](https://main.dujwbk2t2ztij.amplifyapp.com/)

---

## Installation

To install and run this game on your local machine, follow these steps:

1. Clone this repository to your local machine using git clone https://github.com/peachyGB/hexle.git
2. Navigate to the project directory using `cd hexle`
3. Install the required dependencies using `npm install`
4. Run the game using `npm start`

---

## How to Play

Match the "Current Guess" color on the right to the "Answer" color on the left by filling in the 6 empty spaces with the correct hexcode.

- A grey square indicates the character is not present in the hexcode.
- A light grey circle indicates a correct character but in the wrong spot.
- A black hexagon indicates a correct character in the correct spot.

Use your understanding of color hexcodes and the process of elimination to find the solution.
If you are new to hexcodes, read on below.

## Understanding Hexcodes

Hex codes are divided into 3 sets. The first set represents how much red is in the color, the second set represents the amount of green, and the third set represents the amount of blue. Darker tones are on the lower end (00) and brighter tones are on the higer end (FF).

By adjusting these values you can select the hex code for over 16 million colors!

---

## Technologies Used

Built using create-react-app

---

## Credits

The core understanding of wordle and much of the structure of this game can be credited to [How to Build a Wordle Clone in JavaScript](https://www.freecodecamp.org/news/build-a-wordle-clone-in-javascript/) by Paul Akinyemi
