var icons = new Skycons({"color": "white"});

icons.set('icon', Skycons.CLEAR_DAY);
icons.play();

/*
$('#uber_list').hide();
$('#uber_values').hide();
$('#lyft_list').hide();
$('#lyft_values').hide();
$('#metro_list').hide();
$('#metro_values').hide();



function pressed(button, list, values) {
  switch (button) {
    case '#uber':
      visible = visible_uber;
      visible_uber = !visible_uber;
      break;
    case '#lyft':
      visible = visible_lyft;
      visible_lyft = !visible_lyft;
      break;
    case '#metro':
      visible = visible_metro;
      visible_metro = !visible_metro;
      break;
  }

  var $button = $(button);
  var $list = $(list);
  var $values = $(values);

  if (!visible) {
    $button.addClass('press');
    setTimeout(function() {
      //$list.fadeIn(300);
      //$values.fadeIn(300);
      $list.slideToggle(300);
      $values.slideToggle(300);
    }, 500);

  } else {
    $button.removeClass('press');
    $list.fadeOut(200);
    $values.fadeOut(200);
  }
}
*/

$('#uber_list').hide();
$('#uber_values').hide();
$('#lyft_list').hide();
$('#lyft_values').hide();
$('#metro_list').hide();
$('#metro_values').hide();


function pressed(button, list, values) {
    
    var $button = $(button);
    
    $(button).toggleClass('press');
    
    if($(list).is(':visible')) {
        $(list).fadeOut(200);
        $(values).fadeOut(200);
    }
    else {
        setTimeout(function() {
            $(list).fadeIn(1000);
            $(values).fadeIn(1000);
        }, 500);
    }
}
