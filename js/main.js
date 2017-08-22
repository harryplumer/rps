function startGame(user_choice){
  choices = ["Rock", "Paper", "Scissors"]
  cpu_choice = choices[Math.floor(Math.random() * 3)]
  document.getElementById("user_choice").innerText = user_choice
  document.getElementById("cpu_choice").innerText = cpu_choice
  printResults(evalGame(user_choice, cpu_choice))
}

function printResults(result){
  document.getElementById("result_block").classList = ""    
  if (result ===  "Win")
        document.getElementById("result_block").classList.add('win-bg');
      else if (result === "Loss")
        document.getElementById("result_block").classList.add('loss-bg');
      else if (result === "Tie")
        document.getElementById("result_block").classList.add('tie-bg');
      
      currentVal = parseInt(document.getElementById(result).innerHTML)
      document.getElementById(result).innerHTML = ++currentVal
    }

function evalGame(user_choice, cpu_choice){
  if (user_choice === cpu_choice){
    return "Tie" } else {
      switch (user_choice){
        case "Rock":
          if (cpu_choice === "Scissors")
            return "Win"
          else
            return "Loss"
        case "Paper":
          if (cpu_choice === "Rock")
            return "Win"
          else
            return "Loss"
        case "Scissors":
          if (cpu_choice === "Paper")
            return "Win"
          else
            return "Loss"
      }
    }
}

var choices = document.getElementsByClassName('image_choice');
for (var i = 0; i < choices.length; i++) {
  choices[i].addEventListener('click', function(e) {
    startGame(e.target.dataset.tag)    
  });
}
