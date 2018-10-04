(function($) {
  $('[data-screen-target]').click(function() {
    p = $(this).closest('.data-screen-parent');
    t = $(this).attr('data-screen-target');

    p.find('[data-screen]').removeClass('is-active');
    p.find('[data-screen="'+t+'"]').addClass('is-active');
  });
})(jQuery);
