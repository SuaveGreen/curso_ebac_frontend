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
                ${novaTarefa}
        </td>
        `).appendTo(novoItem);

        $(novoItem).appendTo('tbody');

        $("td").click(function () {
            $(this).addClass("riscado");
        });

        $('#tarefa').val('');
    })

});





