class Game{
    constructor(){}

    getState(){

        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
        gameState=data.val()
        })

}

update(state){
    database.Ref('/').update({
        gameState:state
    })
}
Start(){
    if(gameState===0){
        form= new Form();
        form.display();
    }

}
}
