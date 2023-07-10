$(document).ready(function() {

    $('#expandir').click(function () {
        $('#table-body').slideDown();
    })

    $('#recolher').click(function () {
        $('#table-body').slideUp();
    })

    $('thead').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<tr></tr>');
        $(`
        <td colspan="3">
            <div id="conteudo">
                ${novaTarefa}
            </div>
        </td>
        `).appendTo(novoItem);

        $(novoItem).appendTo('tbody');

        $('#tarefa').val('')

        $('td').fadeIn();

        $('#conteudo').click(function () {
            $(this).toggleClass("riscado");
        });
    })



});
