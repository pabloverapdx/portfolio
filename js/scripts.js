$(document).ready(function() {
	// Collapsable navbar code
	$('.button-collapse').sideNav({
		edge: 'left',
		closeOnClick: true,
	});

	// Shows thumbnails of all projects-details
	$(".html-cssss").click(function() {
		$(".project-thumbnail").show();
		$(".projects").hide();
	});

  $('.thumbnail-item').click(function() {
    $('.project-thumbnail').hide();

    $thumbnail_item = $(this);

    var thumbnail_item_id = parseInt($thumbnail_item.attr('id').replace('thumbnail', ''), 10);

    var $projects = $('.projects');
    $projects.each(function() {

      $div = $(this);
      var div_id = parseInt($div.attr('id').replace('project', ''), 10);

      $div.fadeOut(500, function() {
        if (div_id === thumbnail_item_id) {
          var $selectedDiv = $div;
          $selectedDiv.fadeIn(500);
        }
      });
    });
  });


$('.list').click(function(){
  $('.project-thumbnail').hide()
    $list = $(this);
    var list_id = parseInt($list.attr('id').replace('list', ''), 10);
    var $projects = $('.projects');

    $projects.each(function(){
      $div = $(this);
      var div_id = parseInt($div.attr('id').replace('project', ''), 10);

      $div.hide().promise().done(function(){
        if (div_id === list_id) {
          var $selectedDiv = $(this);
          $selectedDiv.fadeIn(500);
        }
    });
  });
});
  event.preventDefault();
});
