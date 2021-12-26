const mainGame = function() {
  /*----- Modal Open --*/
  const modal = function() {
    const modalContainer = document.querySelector('.modal-container');
    const modalOpen = document.querySelector('.btn--rules');
    const modalClose = document.querySelector('.btn--modalClose');

    modalOpen.addEventListener('click', () => {
      modalContainer.classList.add('show-modal');
      document.querySelector('body').style.overflow = 'hidden';
    });

    const closeModal = function() {
      modalContainer.classList.remove('show-modal');
      document.querySelector('body').style.overflowY = 'scroll';
    }

    modalClose.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (event) {
      // When the user click the espace keyboard
      console.log(event.key);
      if (event.key === 'Escape') {
        if (modalContainer.classList.contains('show-modal')) {
          closeModal();
        }
      }
    });
  };
  const pickButton = document.querySelectorAll('.buttonPick');
  const gameBoardGame = document.querySelector('.gameboard__game');
  const gameBoardResult = document.querySelector('.gameboard__result');
  const playerPick = document.querySelector('.playerChoice');
  const computerPick = document.querySelector('.computerChoice');
  const btnReset = document.querySelector('.btn--reset');
  const displayChoose = document.querySelector('.gameboard__result--text');
  let userChoice = undefined;
  let score = 0;

  const initGame = function() {
    pickButton.forEach((btn) => {
      btn.addEventListener('click', function () {
        const scoreElement = document.querySelector('.score');
        const resultElement = document.querySelector('.result-text');
        const timeOut = 1200;
        const shadowTime = 1800;

        userChoice = btn.getAttribute('data-choice');
        const choices = ['paper', 'scissor', 'rock'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        /*-- Animated Elements --*/
        computerPick.style.animation = 'colorChange 0.2s ease infinite';
        playerPick.style.animation = 'waving 2s ease';
        displayChoose.classList.add('show');
        setTimeout(function() {
          computerPick.style.animation = 'none';
        }, timeOut);

        gameBoardGame.classList.add('hide');
        gameBoardResult.classList.add('hide');

        playerPick.classList.add(`btn--${userChoice}`);
        computerPick.classList.add(`btn--${computerChoice}`);

        console.log(userChoice);
        console.log(computerChoice);
        const winner = function() {
          score++;
          setTimeout(function() {
            scoreElement.textContent = score;
          }, timeOut);
          setTimeout(function() {
            computerPick.classList.remove('winnerShadow');
            playerPick.classList.add('winnerShadow');
          }, shadowTime);
        };
        const lose = function(){
          if (score != 0) {
            score--;
          }
          setTimeout(function() {
            scoreElement.textContent = score;
          }, timeOut);
          setTimeout(function() {
            computerPick.classList.add('winnerShadow');
            playerPick.classList.remove('winnerShadow');
          }, shadowTime);
        };
        const chooseImg = function(type) {
          switch (type) {
            case 'paper':
              return '<img class="choices-icon" src="./images/icon-paper.svg" alt="paper" />';
            case 'rock':
              return '<img class="choices-icon" src="./images/icon-rock.svg" alt="rock" />';
            case 'scissor':
              return '<img class="choices-icon" src="./images/icon-scissors.svg" alt="scissor"/>';
          }
        };
        const playerChange = function() {
          playerPick.innerHTML = chooseImg(`${userChoice}`);
          playerPick.setAttribute('data-type', `${userChoice}`);
          playerPick.setAttribute('data-choice', `${userChoice}`);
          playerPick.setAttribute('aria-label', `choose ${userChoice}`);
        }
        const housePickChange = function() {
          setTimeout(function() {
            computerPick.innerHTML = chooseImg(`${computerChoice}`);
            computerPick.setAttribute('data-type', `${computerChoice}`);
            computerPick.setAttribute('data-choice', `${computerChoice}`);
            computerPick.setAttribute('aria-label', `choose ${computerChoice}`);
          }, timeOut);
        }

        if (userChoice === computerChoice) {
          resultElement.textContent = 'DRAW!';
          playerChange();
          housePickChange();
        } else if (userChoice === 'rock' && computerChoice === 'scissor') {
          winner();
          playerChange();
          housePickChange();
          resultElement.textContent = 'YOU WIN';
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
          winner();
          playerChange();
          housePickChange();
          resultElement.textContent = 'YOU WIN';
        } else if (userChoice === 'scissor' && computerChoice === 'paper') {
          winner();
          playerChange();
          housePickChange();
          resultElement.textContent = 'YOU WIN';
        } else if (userChoice === 'rock' && computerChoice === 'paper') {
          lose();
          playerChange();
          housePickChange();
          resultElement.textContent = 'YOU LOSE';
        } else if (userChoice === 'paper' && computerChoice === 'scissor') {
          lose();
          playerChange();
          housePickChange();
          resultElement.textContent = 'YOU LOSE';
        } else if (userChoice === 'scissor' && computerChoice === 'rock') {
          lose();
          playerChange();
          housePickChange();
          resultElement.textContent = 'YOU LOSE';
        }
      });
    });
  };
  const reset = function() {
    btnReset.addEventListener('click', () => {
      playerPick.classList.remove('btn--scissor');
      playerPick.classList.remove('btn--rock');
      playerPick.classList.remove('btn--paper');
      computerPick.classList.remove('btn--scissor');
      computerPick.classList.remove('btn--paper');
      computerPick.classList.remove('btn--rock');

      gameBoardGame.classList.remove('hide');
      gameBoardResult.classList.remove('hide');
      document.querySelector('.playerChoice').classList.remove('winnerShadow');
      document.querySelector('.computerChoice').classList.remove('winnerShadow');
      displayChoose.classList.remove('show');
      document.querySelector('.computerChoice').innerHTML = null;
    });
  };

  initGame();
  reset();
  modal();
};

mainGame();
