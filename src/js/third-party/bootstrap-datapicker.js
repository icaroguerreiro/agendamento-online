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
