$('.shubiao').hover(function() {
        $(this).children().stop().slideToggle()
   });



function searchToggle(obj, evt){
        var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
              container.addClass('active');
              evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
              container.removeClass('active');
              // clear input
              container.find('.search-input').val('');
              // clear and hide result container when we press close
              container.find('.result-container').fadeOut(100, function(){$(this).empty();});
        }
    }
    function submitFn(obj, evt){
        value = $(obj).find('.search-input').val().trim();
        _html = "Yup yup! Your search text sounds like this: ";
        if(!value.length){
            _html = "Yup yup! Add some text friend :D";
        }
        else{
            _html += "<b>" + value + "</b>";
        }
        $(obj).find('.result-container').html('<span>' + _html + '</span>');
        $(obj).find('.result-container').fadeIn(100);
        evt.preventDefault();
    }


    $('.nav_one').find('li').click(function() {
        $(this).addClass('nav_one_one').siblings().removeClass('nav_one_one');
        $(this).find('a').addClass('nav_one_two');
        $(this).siblings().find('a').removeClass('nav_one_two');
    });
    
    
    
    
    $(function(){
		$('.trading_text .title').find('li').click(function(){
			$(this).addClass('li_show').siblings().removeClass('li_show');
			var index=$(this).index();
			$(this).parents().find('.title_content').eq(index).addClass('show').siblings().removeClass('show');
		});
	});
	
	
	
	
	 
  
  
  
  
	
