$(document).ready(function () {
    const audio = document.getElementById('bg-music');
  
    // Show the modal on page load
    const soundModal = new bootstrap.Modal(document.getElementById('soundModal'), {
      backdrop: 'static',
      keyboard: false
    });
    soundModal.show();
  
    // When user clicks "Proceed", unmute & play, then hide modal
    $('#enable-sound').on('click', function () {
      audio.muted = false;
      audio.play().catch(() => {}); // audible now
      soundModal.hide();
    });
  
    // Initialize mute-button icon
    $('#mute-btn i').attr('class', 'bi bi-volume-up-fill');
  
    // Toggle mute/unmute via that button
    $('#mute-btn').on('click', function () {
      audio.muted = !audio.muted;
      const icon = audio.muted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill';
      $('#mute-btn i').attr('class', `bi ${icon}`);
    });
  
    // Scroll-reveal (unchanged)
    $(window).on('scroll', function () {
      $('.section').each(function () {
        const top = $(this).offset().top;
        const bottom = $(window).scrollTop() + $(window).height();
        if (bottom > top + 100) $(this).addClass('show');
      });
    }).trigger('scroll');
  });
  