const formula = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarsenha = document.getElementById('confirmarsenha');
//href='javascript:form.submit()'
formula.addEventListener("submit", (e) => {
    e.preventDefault();


    check();
});

function check() {
    const namevalue = nome.value;
    const emailvalue = email.value;
    const senhavalue = senha.value;
    const senhaconfvalue = confirmarsenha.value;
    if (namevalue === "") {
        error(nome, "campo vazio!")
    } else if (namevalue == 'drica') {
        error(nome, "nome n permitido")
    } else {
        sucess(nome)
    }
    if (emailvalue === "") {
        error(email, "campo vazio!")
    } else if (!emailcheck(emailvalue)) {
        error(email, "Email inválido!")
    } else {
        sucess(email)
    }
    if (senhavalue === "") {
        error(senha, "senha inválida!")
    } else if (!senhavalue.match(/[?!;]/)) {
        error(senha, "senha deve ter caracter um especial!")
    } else(
        sucess(senha)
    )
    if (senhaconfvalue === "") {
        error(confirmarsenha, "campo vazio!")
    } else if (senhaconfvalue != senhavalue) {
        error(confirmarsenha, "senha diferente")
    } else(
        sucess(confirmarsenha)
    )


    //validação para envio 
    const formControls = formula.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";

        //every retorna valor verdadeiro cada um se n tiver retorn false
    });
    const but = document.querySelector('.but')
    const span = document.querySelector('.sucesso')
    const buto = document.querySelector('.buto')





    if (formIsValid) {
        span.innerHTML = 'formulário válido!'


        span.style.display = 'block'
        but.style.display = 'block'
        buto.style.display = 'none'






    } else {
        span.style.display = 'none'
        buto.style.display = 'block'
        but.style.display = 'none'




    }
}







function error(input, message) {
    const form = input.parentElement;
    const small = form.querySelector("small");

    small.innerText = message

    form.className = "form-control error"

}

function sucess(input) {
    const form = input.parentElement;

    form.className = "form-control success"
}

function emailcheck(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );

}

//olho
const eye = document.querySelector('#eye')
const eyeslash = document.querySelector('#eye-slash')
const passofirst = document.querySelector('#senha')

function clickeye() {
    if (passofirst.type === 'password') {
        passofirst.type = 'text'
        eye.style.display = 'none'
        eyeslash.style.display = 'block'


    }
}

function clickslah() {
    if (passofirst.type === 'text')
        passofirst.type = 'password'
    eye.style.display = 'block'
    eyeslash.style.display = 'none'

}