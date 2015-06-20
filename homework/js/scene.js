      var currentScene = 0;

      function changeScene(decision) {
          if (decision === 3) {
              currentScene = 0;
              document.getElementById('sceneimg').src = "images/scene" + currentScene + ".png";
              return true;
          }

          if (currentScene === 0) {
              if (decision === 1) {
                  currentScene = 1;
              } else {
                  currentScene = 1;
              }
          } else if (currentScene === 1) {
              if (decision === 1) {
                  currentScene = 2;
              } else {
                  currentScene = 3;
              }
          } else if (currentScene === 2) {
              if (decision === 1) {
                  currentScene = 4;
              } else {
                  currentScene = 5;
              }
          } else if (currentScene === 3) {
              if (decision === 1) {
                  currentScene = 7;
              } else {
                  currentScene = 8;
              }
          } else if (currentScene === 4) {
              if (decision === 1) {
                  currentScene = 7;
              } else {
                  currentScene = 5;
              }

          } else if (currentScene === 7) {
              if (decision === 1) {
                  currentScene = 6;
              } else {
                  currentScene = 8;
              }
          }
          document.getElementById('sceneimg').src = "images/scene" + currentScene + ".png";
      }
