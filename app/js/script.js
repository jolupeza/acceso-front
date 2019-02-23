"use strict";

;

(function ($) {
  var $window = $(window),
      statusSearch = false,
      bxFigureCars = null;
  $(function () {
    $window.on('scroll', function () {
      checkScroll();
    });
    $window.on('resize', function () {
      setTopSidebar();
      checkSearch();
    });
    checkScroll();
    setTopSidebar();
    checkSearch();
    initColumnTable();
    $('.ArrowTop').on('click', function (ev) {
      ev.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
    $('.js-toggle-sidebar a').on('click', function (ev) {
      ev.preventDefault();
      var $this = $(this),
          Sidebar = $('.Sidebar'),
          icon = $this.children();

      if (Sidebar.hasClass('active')) {
        Sidebar.removeClass('active');
        icon.removeClass('icon-close').addClass('icon-bars');
        document.documentElement.style.setProperty('--body-ov', 'auto');
      } else {
        Sidebar.addClass('active');
        icon.removeClass('icon-bars').addClass('icon-close');
        document.documentElement.style.setProperty('--body-ov', 'hidden');
      }
    });
    $('[data-toggle="collapse"]').on('click', function (ev) {
      ev.preventDefault();
      var $this = $(this),
          parent = $this.closest('.Form__collapse'),
          content = parent.find('.Form__collapse__content');

      if (content.hasClass('show')) {
        $this.removeClass('icon-minus').addClass('icon-plus');
        content.removeClass('show');
      } else {
        $this.removeClass('icon-plus').addClass('icon-minus');
        content.addClass('show');
      }
    });
    $('#js-toggle-search').on('click', function (ev) {
      ev.preventDefault();
      var search = $('#js-search');

      if (search.hasClass('active')) {
        search.fadeOut('slow', function () {
          search.removeClass('active');
          statusSearch = false;
        });
      } else {
        search.fadeIn('slow', function () {
          search.addClass('active');
          statusSearch = true;
        });
      }
    });
    bxFigureCars = $('.bxslider').bxSlider({
      pagerCustom: '.bx-pager',
      auto: true,
      onSliderLoad: bxSliderIsSolid()
    });
    $('#js-show-form').on('click', function (ev) {
      ev.preventDefault();
      var $this = $(this),
          form = $('.Single__form');
      $this.fadeOut();
      form.fadeIn();
    });
  });

  var checkScroll = function checkScroll() {
    var arrow = $('.ArrowTop');

    if (wViewport() < 992) {
      arrow.fadeOut();
      return;
    }

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  };

  var setTopSidebar = function setTopSidebar() {
    var topSidebar = heightHeader() + heightMenuMovil();
    document.documentElement.style.setProperty('--top-sidebar', topSidebar);
  };

  var checkSearch = function checkSearch() {
    var search = $('#js-search');

    if (statusSearch) {
      return;
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
      search.fadeOut('fast', function () {
        search.removeClass('active');
      });
    } else {
      search.fadeIn('fast', function () {
        search.addClass('active');
      });
    }
  };

  var initColumnTable = function initColumnTable() {
    var table = $('#nav-characteristics .Table'),
        items = table.children('article'),
        totalItems = items.length,
        halfItems = Math.ceil(totalItems / 2);
    items.wrapAll('<div class="row"></div>');
    items.slice(0, halfItems).wrapAll('<div class="col-lg-6"></div>');
    items.slice(halfItems, totalItems).wrapAll('<div class="col-lg-6"></div>');
  };

  var bxSliderIsSolid = function bxSliderIsSolid() {
    var bxSlider = $('.bxslider'),
        isSold = bxSlider.data('issold') === 'on' ? true : false;

    if (isSold) {
      // console.log(bxSlider.closest('.bx-viewport'))
      bxSlider.parent().addClass('isSold');
    }
  };

  var hViewport = function hViewport() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  var wViewport = function wViewport() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  };

  var heightHeader = function heightHeader() {
    return parseFloat($('.Header').innerHeight());
  };

  var heightMenuMovil = function heightMenuMovil() {
    return parseFloat($('.Header__menuMovil').innerHeight());
  }; // let getHHeader = () => {
  //   return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-header'));
  // }
  // let heightHeader = () => {
  //   let hHeader = parseFloat($('.Header').innerHeight());
  //   document.documentElement.style.setProperty('--height-header', `${hHeader}px`);
  // }

})(jQuery);
//# sourceMappingURL=script.js.map
