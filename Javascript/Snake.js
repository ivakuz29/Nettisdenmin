    // Get the canvas element
    var canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');

    // Set the canvas dimensions
    canvas.width = 800;
    canvas.height = 800;

    // Set the snake and food positions
    var snake = [
      {x: 400, y: 400},
      {x: 390, y: 400},
      {x: 380, y: 400},
      {x: 370, y: 400},
      {x: 360, y: 400}
    ];
    var food = {x: Math.floor(Math.random() * 80) * 10, y: Math.floor(Math.random() * 80) * 10};

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

      // Check for collision with food
      if (snake[0].x === food.x && snake[0].y === food.y) {
        // Generate new food position
        food = {x: Math.floor(Math.random() * 80) * 10, y: Math.floor(Math.random() * 80) * 10};
        // Add new segment to snake
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
        // Update the score
        score += 10;
        scoreElement.textContent = 'Score: ' + score;
      }

      // Check for collision with wall or self
      if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height || checkCollision(snake[0], snake.slice(1))) {
        alert('Game Over! Your score is: ' + score);
        return;
      }

      // Call the draw function again
      setTimeout(draw, 100);
    }

    // Check for collision between two points
    function checkCollision(point1, points) {
      for (var i = 0; i < points.length; i++) {
        if (point1.x === points[i].x && point1.y === points[i].y) {
          return true;
        }
      }
      return false;
    }

    // Handle key presses
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';
      } else if (event.key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';
      } else if (event.key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';
      } else if (event.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right';
      }
    });

    // Start the game
    draw();