// back to top

$(document).ready(function(){
// Check distance to top and display back-to-top.
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 800 ) {
		$( '.back-to-top' ).addClass( 'show-back-to-top' );
	} else {
		$( '.back-to-top' ).removeClass( 'show-back-to-top' );
	}
});

// Click event to scroll to top.
$( '.back-to-top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 800 );
	return false;
});
// load more
  $(".loading-more").slice(0,3).show();
  $(".hide-load").click(function(e){
    e.preventDefault();
    $(".loading-more:hidden").slice(0,2).fadeIn("slow");
    
    if($(".loading-more:hidden").length == 0){
       $(".hide-load").fadeOut("slow");
      }
  });
  });
// menu active
$(document).ready(function(){
  $('.menu-list-bottom .for-active a').click(function(){
    $('.for-active a').removeClass("active");
    $(this).addClass("active");
});
$('.thumbnails li a').click(function(){
    $('.thumbnails li a').removeClass("active");
    $(this).addClass("active");
});

// dropdown animation
$('.dropdown').on('show.bs.dropdown', function(){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });
  
  $('.dropdown').on('hide.bs.dropdown', function(){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  });
});

  $(function() {
  //toggle class open on button
  $('#exCollapsingNavbar').on('hide.bs.collapse', function () {
    $('.navbar-toggler').removeClass('open');
  })
  $('#exCollapsingNavbar').on('show.bs.collapse', function () {
    $('.navbar-toggler').addClass('open');
  });

      // filter
      $("#filter-options :checkbox").click(function()
      {
          $("#product-list li").hide();
          $("#filter-options :checkbox:checked").each(function()
          {
              $("." + $(this).val()).fadeIn();
          });

          if($('#filter-options :checkbox').filter(':checked').length < 1)
          {
              $("#product-list li").fadeIn();

          }
      });
// filter option checkbox dropdown
      (function($) {
          var CheckboxDropdown = function(el) {
              var _this = this;
              this.isOpen = false;
              this.areAllChecked = false;
              this.$el = $(el);
              this.$label = this.$el.find('.dropdown-label');
              this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
              this.$inputs = this.$el.find('[type="checkbox"]');

              this.onCheckBox();

              this.$label.on('click', function(e) {
                  e.preventDefault();
                  _this.toggleOpen();
              });

              this.$checkAll.on('click', function(e) {
                  e.preventDefault();
                  _this.onCheckAll();
              });

              this.$inputs.on('change', function(e) {
                  _this.onCheckBox();
              });
          };

          CheckboxDropdown.prototype.onCheckBox = function() {
              this.updateStatus();
          };

          CheckboxDropdown.prototype.updateStatus = function() {
              var checked = this.$el.find(':checked');

              this.areAllChecked = false;
              this.$checkAll.html('Check All');

              if(checked.length <= 0) {
                  this.$label.html('');
              }
              else if(checked.length === 0) {
                  this.$label.html(checked.parent('label').text());
              }
              else if(checked.length === this.$inputs.length) {
                  this.$label.html('All Selected');
                  this.areAllChecked = true;
                  this.$checkAll.html('Uncheck All');

              }
              else {
                  this.$label.html(checked.length + ' Selected');

              }
          };
          CheckboxDropdown.prototype.onCheckAll = function(checkAll) {
              if(!this.areAllChecked || checkAll) {
                  this.areAllChecked = true;
                  this.$checkAll.html('Uncheck All');
                  this.$inputs.prop('checked', true);
              }
              else {
                  this.areAllChecked = false;
                  this.$checkAll.html('Check All');
                  this.$inputs.prop('checked', false);
              }

              this.updateStatus();
          };

          CheckboxDropdown.prototype.toggleOpen = function(forceOpen) {
              var _this = this;

              if(!this.isOpen || forceOpen) {
                  this.isOpen = true;
                  this.$el.addClass('on');
                  $(document).on('click', function(e) {
                      if(!$(e.target).closest('[data-control]').length) {
                          _this.toggleOpen();
                      }
                  });
              }
              else {
                  this.isOpen = false;
                  this.$el.removeClass('on');
                  $(document).off('click');
              }
          };

          var checkboxesDropdowns = document.querySelectorAll('[data-control="checkbox-dropdown"]');
          for(var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
              new CheckboxDropdown(checkboxesDropdowns[i]);
          }
      })(jQuery);
});

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });
// recharge --->button collapse
$(document).ready(function() {


    $('.rechargebtn').click(function() {
        $(this).toggleClass( "active" );
        if ($(this).hasClass("active")) {
            $(this).text("Cancel");
        } else {
            $(this).text("Recharge $");
        }
    });
    // recharge amount input

    $("input[data-type='currency']").on({
        keyup: function() {
            formatCurrency($(this));
        },
        blur: function() {
            formatCurrency($(this), "blur");
        }
    });


    function formatNumber(n) {
// format number 1000000 to 1,234,567
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }


    function formatCurrency(input, blur) {
// appends $ to value, validates decimal side
// and puts cursor back in right position.

// get input value
        var input_val = input.val();

// don't validate empty input
        if (input_val === "") { return; }

// original length
        var original_len = input_val.length;

// initial caret position
        var caret_pos = input.prop("selectionStart");

// check for decimal
        if (input_val.indexOf(".") >= 0) {

            // get position of first decimal
            // this prevents multiple decimals from
            // being entered
            var decimal_pos = input_val.indexOf(".");

            // split number by decimal point
            var left_side = input_val.substring(0, decimal_pos);
            var right_side = input_val.substring(decimal_pos);

            // add commas to left side of number
            left_side = formatNumber(left_side);

            // validate right side
            right_side = formatNumber(right_side);

            // On blur make sure 2 numbers after decimal
            if (blur === "blur") {
                right_side += "00";
            }

            // Limit decimal to only 2 digits
            right_side = right_side.substring(0, 2);

            // join number by .
            input_val = "$" + left_side + "." + right_side;

        } else {
            // no decimal entered
            // add commas to number
            // remove all non-digits
            input_val = formatNumber(input_val);
            input_val = "$" + input_val;

            // final formatting
            if (blur === "blur") {
                input_val += ".00";
            }
        }

// send updated string to input
        input.val(input_val);

// put caret back in the right position
        var updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input[0].setSelectionRange(caret_pos, caret_pos);
    }

});





