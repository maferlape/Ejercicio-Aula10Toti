let pessoas = []
let form = document.querySelector("#registro")
let pessoasReg = document.querySelector(".pessoasReg")
let tabela = document.getElementById("listaPessoas")


form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    pessoasReg.classList.add("on")

    let dados = new FormData(form)
    let registro = registrarPessoa(dados)
   
    pessoas.push(registro)
    alert("Pessoa registrada!")
    console.log(pessoas)
    limpiar()
    
    tabela.innerHTML += `<tbody><td>${registro.nome}</td><td>${registro.idade}</td></tbody>`;

    PessoaMaior(pessoas)

})

function limpiar(){
    document.getElementById("nome").value=""
    document.getElementById("idade").value=""
}

function registrarPessoa(formData) {
    let nome = formData.get("nome")
    let idade = Number(formData.get("idade"))
    
    let registro = {
        nome: nome,
        idade
    }
    
    return registro
}

function ordenarPessoas(pessoas){
    pessoas.sort((a,b)=>{

        if(a.idade < b.idade){
            return 1
        }else if(a.idade > b.idade){
            return -1
        }else{
            return 0
        }

    })

    console.log(pessoas)
}

function PessoaMaior(pessoas){
    ordenarPessoas(pessoas)
    document.getElementById('pessoaMaior').innerHTML = (`A pessoa com maior idade é ${pessoas[0].nome} e tem ${pessoas[0].idade} anos`);
}