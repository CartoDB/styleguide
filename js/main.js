$( document ).ready(function() {

    var client = new ZeroClipboard( document.getElementsByClassName("copy-box") );

    client.on( "ready", function( readyEvent ) {
      // alert( "ZeroClipboard SWF is ready!" );

      client.on( "aftercopy", function( event ) {
        // `this` === `client`
        // `event.target` === the element that was clicked
        // event.target.style.display = "none";
        alert("Copied text to clipboard: " + event.data["text/plain"] );
      } );
    } );


    $( ".js-navigation a" ).click(function(e) {
       e.preventDefault();
       $( ".js-navigation a" ).toggleClass("is-selected");
    });


    $(".js-dropdown").click(function(e){
      e.preventDefault();
      var posX = $(this).position().left ,posY = $(this).position().top;

      $(".Dropdown").toggleClass('is-active');

      $(".Dropdown").css('left', (e.pageX)-130);
      $(".Dropdown").css('top', (e.pageY)+20);
    });

    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
});


