document.addEventListener('DOMContentLoaded', (event) => {
  // Get the canvas element
  var canvas = document.getElementById('gameCanvas');
  var ctx = canvas.getContext('2d');

  // Set the canvas dimensions
  canvas.width = 400;
  canvas.height = 400;

  // Set the snake and food positions
  var snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
  ];
  var food = {x: Math.floor(Math.random() * 40) * 10, y: Math.floor(Math.random() * 40) * 10};

  // Set the snake direction
  var direction = 'right';

  // Set the score
  var score = 0;
  var scoreElement = document.getElementById('score');

  // Set the restart button
  var restartButton = document.getElementById('restart');
  restartButton.addEventListener('click', function() {
    location.reload();
  });

  // Main game loop
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the arena outline
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    for (var i = 0; i < snake.length; i++) {
      ctx.fillStyle = 'green';
      ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
    }

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 10, 10);

    // Update the snake position
    for (var i = snake.length - 1; i > 0; i--) {
      snake[i].x = snake[i - 1].x;
      snake[i].y = snake[i - 1].y;
    }

    // Update the snake head position based on direction
    if (direction === 'right') {
      snake[0].x += 10;
    } else if (direction === 'left') {
      snake[0].x -= 10;
    } else if (direction === 'up') {
      snake[0].y -= 10;
    } else if (direction === 'down') {
      snake[0].y += 10;
    }

    // Check if the snake has eaten the food
    if (snake[0].x === food.x && snake[0].y === food.y) {
      score++;
      scoreElement.textContent = 'Score: ' + score;
      food.x = Math.floor(Math.random() * 40) * 10;
      food.y = Math.floor(Math.random() * 40) * 10;
      snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
    }

    // Check if the snake has hit the wall or itself
    if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
      clearInterval(gameLoop);
      alert('Game Over! Your score is: ' + score);
    }
    for (var i = 1; i < snake.length; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        clearInterval(gameLoop);
        alert('Game Over! Your score is: ' + score);
      }
    }
  }

  // Set the game loop
  var gameLoop = setInterval(draw, 100);

  // Set the keydown event listener
  document.addEventListener('keydown', function(event) {
    if (event.key === 'd' && direction !== 'left') {
      direction = 'right';
    } else if (event.key === 'a' && direction !== 'right') {
      direction = 'left';
    } else if (event.key === 'w' && direction !== 'down') {
      direction = 'up';
    } else if (event.key === 's' && direction !== 'up') {
      direction = 'down';
    }
  });
});


