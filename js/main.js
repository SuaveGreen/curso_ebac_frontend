$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            rua: {
                required: true,
            },
            numero: {
                required: true,
            },
            bairro: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Nome Inválido',
            telefone: 'Telefone inválido',
            email: 'E-mail inválido',
            cpf: 'CPF inválido',
            rua: 'Rua inválida',
            bairro: 'Bairro inválido',
            numero: 'Número inválido',
            cep: 'CEP inválido'
        },
                submitHendler: function(form) {

        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })

})