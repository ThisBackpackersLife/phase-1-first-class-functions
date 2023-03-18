const receivesAFunction = callback => callback();

function returnsANamedFunction() {
  return receivesAFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("I'm an anonymous function.")
  }
}









// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }

// function liftWeights() {
//   console.log("Pump iron");
// }

// function swimFortyLaps() {
//   console.log("Swim 40 laps");
// }

// function Monday() {
//   exerciseRoutine(liftWeights);
// }

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }

// exerciseRoutine(() => console.log("Stretch! Work that core!"));

// function morningRoutine(exerecise) {
//   let breakfast;

//   if (exerecise === liftWeights) {
//     breakfast = "kale smoothie";
//   } else {
//     breakfast = "granola";
//   }

//   exerciseRoutine(exerecise);

//   return function () {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//   };
// }

// const afterExercise = morningRoutine(liftWeights);

// afterExercise;
// afterExercise();
