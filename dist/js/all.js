(function($) {
  $('[data-screen-target]').click(function() {
    p = $(this).closest('.data-screen-parent');
    t = $(this).attr('data-screen-target');

    p.find('[data-screen]').removeClass('is-active');
    p.find('[data-screen="'+t+'"]').addClass('is-active');
  });
})(jQuery);

(function($) {
  $(document).ready(function() {
    $('.cl-modal ._datepicker').each(function() {

      var dataContainer = $(this).closest('.input-field');

      $(this).datepicker({
        language: 'pt-BR',
        format: 'dd/mm/yyyy',
        autoclose: true,
        container: dataContainer
      });
    });
  });
})(jQuery);

(function($) {
  $(document).ready(function() {
    $('._timepicker').timepicker({
      defaultTime: '00:00',
      template : false,
      showMeridian: false
    });
  });
})(jQuery);

(function($) {
  $(document).ready( function () {
    // Init Datatable
    $('._datatable').DataTable({
      'pageLength' : 10,
      'language' : {
          "sEmptyTable": "Nenhum registro encontrado",
          "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
          "sInfoEmpty": "Mostrando 0 até 0 de 0",
          "sInfoFiltered": "(Filtrados de _MAX_ )",
          "sInfoPostFix": "",
          "sInfoThousands": ".",
          "sLengthMenu": "_MENU_ resultados por página",
          "sLoadingRecords": "Carregando...",
          "sProcessing": "Processando...",
          "sZeroRecords": "Nenhum registro encontrado",
          "sSearch": "Pesquisar",
          "oPaginate": {
              "sNext": "Próximo",
              "sPrevious": "Anterior",
              "sFirst": "Primeiro",
              "sLast": "Último"
          },
          "oAria": {
              "sSortAscending": ": Ordenar colunas de forma ascendente",
              "sSortDescending": ": Ordenar colunas de forma descendente"
          }
      }
    });

    // Change DOM
    $('._cl-datatable').each(function() {

      // Set Elements
      var searchInput = $(this).find('.dataTables_filter input');
      var pagenationDiv = $(this).find('.dataTables_paginate');
      var entriesInfo = $(this).find('.dataTables_info');
      var entriesLenght = $(this).find('.dataTables_length');

      // Data Stuff
      var searchPlaceholder = $('.cl-_datatable-search').attr('data-dt-placeholder')

      // Transfer Elements
      searchInput.appendTo($(this).find('.cl-_datatable-search .input-field')).attr('placeholder', searchPlaceholder);
      pagenationDiv.appendTo($(this).find('._cl-datatable-pagenation'));
      entriesInfo.appendTo($(this).find('._cl-datatable-entries'));
      entriesLenght.appendTo($(this).find('._cl-datatable-entries'));
    });
  });
})(jQuery);

(function($) {
  $(document).ready(function() {
    $('._select2').select2({
      language: "pt-BR"
    });
  });
})(jQuery);

//# sourceMappingURL=all.js.map
