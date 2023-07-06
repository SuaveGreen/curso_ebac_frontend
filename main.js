const form = document.getElementById('form-calculo');

formValido = true;


function validaNumero(numUm, numDois){
    if (numUm > numDois){
        return false;
    }else{
        return true;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorUm = parseFloat(document.getElementById('valor-um').value);
    const valorDois = parseFloat(document.getElementById('valor-dois').value);
    const resultado =  (-valorUm) + valorDois;

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

        valorUm.value = '';
        valorDois.value = '';
    }

});

// valorUm.addEventListener('keyup', function(e) {
//     console.log(e.target.value);
//     formValido = validaNumero(e.target.value);

//     if (!formValido) {
//         valorUm.classList.add('error');
//         document.querySelector('.error-message').style.display = 'block';
//     } else {
//         valorUm.classList.remove('error');
//         document.querySelector('.error-message').style.display = 'none'
//     }
// });