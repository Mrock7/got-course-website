$(document).ready(function() {
  
  console.log("JavaScript loaded!");
  console.log("Found buttons:", $('.lang-btn').length);
  console.log("Found par-1:", $('.par-1').length);
  
  $('#year').text(new Date().getFullYear());

  $('.stat-item').hover(
    function() {
      $(this).find('.stat-number').css('font-size', '2.2rem');
    },
    function() {
      $(this).find('.stat-number').css('font-size', '1.8rem');
    }
  );
  
  $('.photo').hover(
    function() {
      $(this).css('transform', 'scale(1.05)');
    },
    function() {
      $(this).css('transform', 'scale(1)');
    }
  );
  
  $('.btn-primary').hover(
    function() {
      $(this).css('transform', 'scale(1.05)');
    },
    function() {
      $(this).css('transform', 'scale(1)');
    }
  );

  var languages = ['en', 'sq', 'de', 'fr'];
  var currentLang = {
    'par-1': 0,
    'par-2': 0
  };

  $('.lang-btn').click(function() {
    var target = $(this).attr('data-target');
    
    currentLang[target] = (currentLang[target] + 1) % languages.length;
    var newLang = languages[currentLang[target]];
    
  
    var paragraph = $('.' + target + ' p').first();
    var newText = paragraph.attr('data-' + newLang);
    paragraph.html(newText);
  });

});

