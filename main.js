$(document).ready(function() {

    $('#adicionar').click(function () {
        $('#table-body').slideDown();
    })

    $('#recolher').click(function () {
        $('#table-body').slideUp();
    })

    $('thead').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa');
        const novoItem = $('<tr style="display: none"></tr>');
        $(`
        <td colspan="3" style="display: none">
            <button type="button" id="button-tarefas" >
                ${novaTarefa}
            </button>
        </td>
        `).appendTo(novoItem);
        $(novoItem).appendTo('tbody')
        $(novoItem).fadeIn(1000)
        $('#tarefa').val('')
    })

})



