function exo7(x, y){
    if(y == "Homme" ){
        if(x >= 18){
            return "Vous êtes un homme et vous êtes majeur"
        } else {
            return "Vous êtes un homme et vous êtes mineur"
        }
    } else if(y == "Femme"){
        if(x >= 18){
            return "Vous êtes une femme et vous êtes majeure"
        } else {
            return "Vous êtes une femme et vous êtes mineure"
        }
    }
}

console.log(exo7(15, "Femme"));