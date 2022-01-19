
function clique(){

    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.google.com"); /*Abre outra aba*/
    //window.location.href = "http://www.google.com"; /*Abre na mesma aba*/
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    //alert("Trocar texto")
}

function voltar(elemento){
    elemento.innerHTML  = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
}


function load(){
    alert("Pagina carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    //alert("Trocar texto")
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
}
*/

/*
var validar  0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }    
}

var idade = prompt("Qual é sua idade?");
validaIdade(idade)
console.log(validar);
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

//var d = new Date();
    //alert(d.getDay());
    //alert(d.getHours());
    //alert(d.getMinutes());

    //alert(d.getMonth() + 1);


/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 10){
    console.log(count);
    alert(count);
    count++;
        //count = count + 1
}
*/

/*
var idade = prompt("Qual sua idade?");
//var idade = 18
if  (idade >= 18){
    alert("maior de idade");
    } else{
        alert("menor de idade")
    }
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"verde"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

/*var nome = "Rodrigo de Carvalho Santos";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time  do mundo!"
//alert(nome + " tem " + idade + " anos!");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));*/