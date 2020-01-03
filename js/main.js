function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar </b>";
    // no HTML no elemento h3 inclui o ID e tira o texto
};

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse";
    // no HTML no elemento h3 inclui o ID e tira o texto
};
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passar o Mouse aqui";
    // no HTML no elemento h3 inclui o ID e tira o texto
};

function abrepagina(){
    window.open("https://web.digitalinnovation.one/home");
    // window.location.href("https://web.digitalinnovation.one/home"); abre na mesma pagina
}

function pagina(){
    alert("Pagina Carregada");
}
// com this na passagem do parametro não precisa pegar a referencia no js document.getelement. ..
function funcaochange(elemento){
    console.log(elemento.value)
}
/*
function clicou(){
    alert("Obrigado por ter clicado")
};



function validaidade(idade){
    var validar;
    if (idade >=18){
       validar = true 
    }else{
       validar = false
    }
        return validar;
}

var idade = 10
var idade = prompt("Qual sua idade");
console.log(validaidade(idade));


function soma(n1,n2){
    return n1 + n2;
}

alert(soma(10,20));

function setreplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome)
}

alert(setreplace("Vai Japão","Japão", "Brasil"))

var d = new Date();

alert(d);

alert(d.getDay());
alert(d.getFullYear());
alert(d.getTime());
alert(d.getMonth()+1);

var i

for(i=0; i <= 5; i++){
    alert(i)
}
*/

/*
var idade = prompt("qual sua idade");

if (idade >= 18){
    alert("maior de idade ");
}else{
    Alert("menor de idade "); // erro doido
};
var i = 1
while (i < idade)
{alert(i)
i++
}
*/


/*
var fruta = [{nome:"maça",preco:10},{nome:"banana",preco:5},{nome:"pera",preco:50}]
console.log(fruta);
 
var nome = "Gilberto Gaspar"
var curso = "Java Script"
alert("Benvindo : - > " + nome + " fazendo curso de --> " + curso);
console.log(nome);
console.log(curso);
alert(curso.replace("Java", "JS") );
alert(curso.toLocaleLowerCase());
alert(curso.toLocaleUpperCase());

var meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

meses.push("2019") // inclui um elemento no vetor
console.log(meses);
meses.pop(); // tira o ultimo elemento no vetor
alert(meses[0].toLocaleUpperCase());
alert(meses.join(" - ")); // troca o delimitador do vetor
var fruta = {nome:"maça",preco:10}
alert(fruta.nome);
console.log(fruta);
*/

