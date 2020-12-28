//function definition
function isTouchingbyDivye(gameObject1,gameObject2){
    if (gameObject1.x - gameObject2.x < gameObject2.width/2 + gameObject1.width/2
      && gameObject2.x - gameObject1.x < gameObject2.width/2 + gameObject1.width/2
      && gameObject1.y - gameObject2.y < gameObject2.height/2 + gameObject1.height/2
      && gameObject2.y - gameObject1.y < gameObject2.height/2 + gameObject1.height/2) {
    return true; 
    }
    else{
      return false; 
    }
}