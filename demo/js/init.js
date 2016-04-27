! function ($) {
    "use strict";

    var theme_list_open = false;

    $(document).on("click", ".current", function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (theme_list_open === true) {

            $(".menu").slideUp(100);

            $(".current").removeClass("open");

            theme_list_open = false;

        } else {
            $(".menu").slideDown(100);

            $(".current").addClass("open");

            theme_list_open = true;
        }

        return false;
    });

    function fixHeight() {
        if ($(".showcase").hasClass("mobile") || $(".showcase").hasClass("tablet")) {
            $(".showcase").css("height", (($(window).height()) - 90) + "px");
        } else {
            $(".showcase").css("height", (($(window).height()) - 50) + "px");
        }
    }

    $(window).resize(function () {
        fixHeight();
    }).resize();
  
    $(document).on("click", ".devices a", function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(".showcase").removeClass("desktop").removeClass("mobile").removeClass("tablet");

        $(".showcase").addClass($(this).data("toggle"));

        fixHeight();
    });

    $(document).on("click", ".menu a", function (e) {
        e.preventDefault();
        e.stopPropagation();

        var theme_data = $(this).data("view").split(",");

        $("purchase a").attr("href", theme_data[1]);

        $(".iframe").attr("src", theme_data[0]);

	$(".remove_frame a").attr("href", theme_data[0]);

        $(".current .theme").text($(this).data("name"));

        $(".menu").hide();

        $(".current").removeClass("open");

        theme_list_open = false;

        return false;

    });

}(window.jQuery);