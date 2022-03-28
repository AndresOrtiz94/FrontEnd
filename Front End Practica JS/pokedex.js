function fetchPokemon ()  {
    const pokeName = document.getElementById("pokeName");
    if(pokeName.value==""){
        pokeImage("./pikachu-sad.gif");
        resetElements();
        alert("No ingresaste un nombre");
    }
    else{
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res)=> {
        if(res.status == "200"){
            return res.json();
        }
        else{
            console.log(res);
            pokeImage("./pikachu-sad.gif");
            return false;
        }
    }).then((data)=>{
           //console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let moves = data.moves;
            moves.forEach(pokeMoves);
            let types = data.types;
            types.forEach(pokeType);
            let name = data.name;
            pokeNames(name);
            let stats = data.stats;
            stats.forEach(pokeStats);
            console.log(stats);
    }).catch(err => alert("No existe ese pokemon :'("))
}
}

function pokeMoves(moves,index){
const pokmoves = document.getElementById("moves");
if(index==0){
    pokmoves.value="Moves \n"+index+": "+moves.move.name+"\n";
}else{
    pokmoves.value+=index+": "+moves.move.name+"\n";
}
}

function pokeImage(url){
const pokeImg = document.getElementById("pokeImg");
pokeImg.src = url;
}

function pokeType(types, index){
    const pokeTypes = document.getElementById("type");
    if(index==0){
        pokeTypes.textContent ="Types: "+index+": "+ types.type.name+ "  ";
    }else{
        pokeTypes.textContent +=index+": "+ types.type.name+ "  ";
    }
}

function pokeNames(names){
    const NamePoke = document.getElementById("name");
    NamePoke.textContent = names;
}

function pokeStats(stat,index){
    const pokmstat = document.getElementById("stats");
    if(index==0){
        pokmstat.value="Stats \n"+stat.stat.name+": "+stat.base_stat+"\n";
    }else{
        pokmstat.value+=stat.stat.name+": "+stat.base_stat+"\n";
    }
}

function resetElements(){
    const pokmstat = document.getElementById("stats");
    pokmstat.value="";
    const NamePoke = document.getElementById("name");
    NamePoke.textContent="";
    const pokeTypes = document.getElementById("type");
    pokeTypes.textContent="";
    const pokmoves = document.getElementById("moves");
    pokmoves.value="";
}