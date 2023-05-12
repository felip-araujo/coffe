function retornarNomes(array) {
    var indice = Math.floor(Math.random() * array.length);
    return array[indice];
}


function inserirNomes(){
var calab = ["Zeca", "Mauricio", "Felipe", "Josely", "Guilherme", "Marlene", "Vagner", "Tiago", "Edy", "Ceila", "Neidiane", "Araujo", "Everton","João","William","Janaina"];
    var nomeSeg = retornarNomes(calab); 
    console.log(nomeSeg) 

    var calab = ["Zeca", "Mauricio", "Felipe", "Josely", "Guilherme", "Marlene", "Vagner", "Tiago", "Edy", "Ceila", "Neidiane", "Araujo", "Everton","João","William","Janaina"];
    var nomeTer = retornarNomes(calab); 
    console.log(nomeTer) 

    var calab = ["Zeca", "Mauricio", "Felipe", "Josely", "Guilherme", "Marlene", "Vagner", "Tiago", "Edy", "Ceila", "Neidiane", "Araujo", "Everton","João","William","Janaina"];
    var nomeQua = retornarNomes(calab); 
    console.log(nomeQua) 

    var calab = ["Zeca", "Mauricio", "Felipe", "Josely", "Guilherme", "Marlene", "Vagner", "Tiago", "Edy", "Ceila", "Neidiane", "Araujo", "Everton","João","William","Janaina"];
    var nomeQui = retornarNomes(calab); 
    console.log(nomeQui) 

    var calab = ["Zeca", "Mauricio", "Felipe", "Josely", "Guilherme", "Marlene", "Vagner", "Tiago", "Edy", "Ceila", "Neidiane", "Araujo", "Everton","João","William","Janaina"];
    var nomeSex = retornarNomes(calab); 
    console.log(nomeSex);

document.getElementById("nome1").innerHTML=nomeSeg; 
document.getElementById("nome2").innerHTML=nomeTer;
document.getElementById("nome3").innerHTML=nomeQua;
document.getElementById("nome4").innerHTML=nomeQui;
document.getElementById("nome5").innerHTML=nomeSex;    

} 

function windowprint(){
    
}
    

