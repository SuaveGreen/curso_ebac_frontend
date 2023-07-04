const form = document.getElementById('form-calculo');
const valorUm = parseFloat(document.getElementById('valor-um').value);
const valorDois = parseFloat(document.getElementById('valor-dois').value);
const resultado =  valorUm + valorDois;

formValido = true;


function validaNumero(numUm, numDois){
    if (numUm > numDois){
        alert('alert test 1')
        return false;
    }else{
        alert('alert test 2')
        return true;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso =  `O resultado desta subtração é: <b>${resultado}</b>.`;

    let numUm = valorUm;
    let numDois = valorDois;
    formValido = validaNumero(numUm, numDois); 
    if (formValido) {

        const containermensagemSucesso = document.querySelector('.success-message');
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = 'block';
        
        // alert('certo')

        valorUm.value = '';
        valorDois.value = '';

    } else {
        document.querySelector('.error-message').style.display = 'block'

        // alert('erro')

        valorUm.value = '';
        valorDois.value = '';
    }

});


