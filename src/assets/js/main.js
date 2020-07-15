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
// rented image preview for disk image
$(document).on("click", ".browse", function () {
  var file = $(this).parents().find(".file");
  file.trigger("click");
  $("#DiskUpload").change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file").val(fileName);
    var reader = new FileReader();
    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      document.getElementById("preview").src = e.target.result;
    };
    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });
});
// rented image preview for cover image
$(document).on("click", ".browse-2", function () {
  var filetwo = $(this).parents().find(".file-2");
  filetwo.trigger("click");
  $("#CoverUpload").change(function (e) {
    var fileNametwo = e.target.files[0].name;
    $("#file-2").val(fileNametwo);
    var readertwo = new FileReader();
    readertwo.onload = function (e) {
      // get loaded data and render thumbnail.
      document.getElementById("preview-2").src = e.target.result;
    };
    // read the image file as a data URL.
    readertwo.readAsDataURL(this.files[0]);
  });
});

// cart section for promo code
$(document).ready(function () {
    var promoCode;
    var promoPrice;
    var fadeTime = 300;
  
    /* Assign actions */
    $(".quantity input").change(function () {
      updateQuantity(this);
    });
  
    $(document).ready(function () {
      updateSumItems();
    });
  
    $(".promo-code-cta").click(function () {
      promoCode = $("#promo-code").val();
  
      if (promoCode == "10off" || promoCode == "10OFF") {
        //If promoPrice has no value, set it as 10 for the 10OFF promocode
        if (!promoPrice) {
          promoPrice = 100;
        } else if (promoCode) {
          promoPrice = promoPrice * 1;
        }
      } else if (promoCode != "") {
        alert("Invalid Promo Code");
        promoPrice = 0;
      }
      //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
      if (promoPrice) {
        $(".summary-promo").removeClass("hide");
        $(".promo-value").text(promoPrice.toFixed(2));
        recalculateCart(true);
      }
    });
  
    /* Recalculate cart */
    function recalculateCart(onlyTotal) {
      var subtotal = 0;
  
      /* Sum up row totals */
      $(".basket-product").each(function () {
        subtotal += parseFloat($(this).children(".subtotal").text());
      });
  
      /* Calculate totals */
      var total = subtotal;
  
      //If there is a valid promoCode, and subtotal < 10 subtract from total
      var promoPrice = parseFloat($(".promo-value").text());
      if (promoPrice) {
        if (subtotal >= 10) {
          total -= promoPrice;
        } else {
          alert("Order must be more than £10 for Promo code to apply.");
          $(".summary-promo").addClass("hide");
        }
      }
  
      /*If switch for update only total, update only total display*/
      if (onlyTotal) {
        /* Update total display */
        $(".total-value").fadeOut(fadeTime, function () {
          $("#basket-total").html(total.toFixed(2));
          $(".total-value").fadeIn(fadeTime);
        });
      } else {
        /* Update summary display. */
        $(".final-value").fadeOut(fadeTime, function () {
          $("#basket-subtotal").html(subtotal.toFixed(2));
          $("#basket-total").html(total.toFixed(2));
          if (total == 0) {
            $(".checkout-cta").fadeOut(fadeTime);
          } else {
            $(".checkout-cta").fadeIn(fadeTime);
          }
          $(".final-value").fadeIn(fadeTime);
        });
      }
    }
  
    /* Update quantity */
    function updateQuantity(quantityInput) {
      /* Calculate line price */
      var productRow = $(quantityInput).parent().parent();
      var price = parseFloat(productRow.children(".price").text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;
  
      /* Update line price display and recalc cart totals */
      productRow.children(".subtotal").each(function () {
        $(this).fadeOut(fadeTime, function () {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });
      productRow.find(".item-quantity").text(quantity);
      updateSumItems();
    }
    function updateSumItems() {
      var sumItems = 0;
      $(".quantity input").each(function () {
        sumItems += parseInt($(this).val());
      });
      $(".total-items").text(sumItems);
    }
  });
  

