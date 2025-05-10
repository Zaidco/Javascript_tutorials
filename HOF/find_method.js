//find() method is impoertant, it helps finding the elements exactly desired by the user

const gameScore=[100,180,200,320,540,89]
//find score above 200
const score200= gameScore.find((score)=> score>200)
console.log(`the game score is:${score200}`); // or console.log("the game score is:" + score200 )


