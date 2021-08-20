# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- It's a one time game between 2 players and if you refresh the page the score will turn back to 0

### Screenshot

![](./finished/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This challenge is really great and It's really help me to improve my knowledge in JavaScript and some accessibility for html and making the how to upload properly in github.

To see how you can add code snippets, see below:

```html
<button
  data-toggle="choices"
  data-type="scissor"
  class="playerChoice btn gameboard__game--choices"
  aria-label="choose scissor"
></button>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
function proundOfThisFunc() {
  console.log('HAHAHAHA');
}
function playerChange() {
          playerPick.innerHTML = chooseImg(`${userChoice}`);
          playerPick.setAttribute('data-type', `${userChoice}`);
          playerPick.setAttribute('data-choice', `${userChoice}`);
          playerPick.setAttribute('aria-label', `choose ${userChoice}`);
        }
        function housePickChange() {
          setTimeout(() => {
            computerPick.innerHTML = chooseImg(`${computerChoice}`);
            computerPick.setAttribute('data-type', `${computerChoice}`);
            computerPick.setAttribute('data-choice', `${computerChoice}`);
            computerPick.setAttribute('aria-label', `choose ${computerChoice}`);
          }, timeOut);
        }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**


## Author

- Website - [Benjo Quilario](https://www.your-site.com)
- Frontend Mentor - [@benjoquilario](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@benjoquilario](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

My Tips is to use the @use keyword and not do not use import for scss/sass

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
