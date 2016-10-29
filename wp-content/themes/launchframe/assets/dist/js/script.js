"use strict";

jQuery(document).ready(function () {
    (function (jQuery, w) {
        "use strict";
        /* global
         * console, setTimeout */

        var theWindow = jQuery(window);
        var wb = {
            nav: {
                test: function test() {
                    return true;
                },
                run: function run() {
                    jQuery("body").on("click", ".nav-trigger", function () {
                        jQuery("body").toggleClass("nav--open");
                    });
                }
            },
            faq: {
                test: function test() {
                    return true;
                },
                run: function run() {
                    jQuery("body").on("click", ".faq__question", function () {
                        jQuery(".faq li").removeClass("faq--active");
                        jQuery(this).parent("li").addClass("faq--active");
                    });
                }
            },
            commit: {
                test: function test() {
                    return true;
                },
                run: function run() {
                    jQuery("form.commitment-card").on("submit", function (event) {
                        event.preventDefault();
                        jQuery.post({
                            url: "/email-commitment",
                            data: {
                                "annualGift": jQuery("[name=annual-gift]").val(),
                                "devotedGift": jQuery("[name=annual-addition]").val(),
                                "oneTimeGift": jQuery("[name=one-time]").val(),
                                "oneYearGift": jQuery("[name=total]").val(),
                                "twoYearGift": jQuery("[name=campaign-double]").val(),
                                "firstName": jQuery("[name=fname]").val(),
                                "lastName": jQuery("[name=lname]").val(),
                                "emailAddress": jQuery("[name=email]").val(),
                                "phoneNumber": jQuery("[name=phone]").val()
                            },
                            success: function success(data) {
                                jQuery(".cc-info").html("<p class=\"text-xs-center\">Thank you for your commitment.</p>");
                            }
                        });
                    });
                }
            },
            giving: {
                test: function test() {
                    return true;
                },
                run: function run() {
                    jQuery("body").on("blur", ".calculate-giving input", function () {
                        var gift = jQuery(".annual-gift").val() ? jQuery(".annual-gift").val() : 0;
                        var addition = jQuery(".annual-addition").val() ? jQuery(".annual-addition").val() : 0;
                        var one_time = jQuery(".one-time").val() ? jQuery(".one-time").val() : 0;
                        var total = parseInt(gift) + parseInt(addition) + parseInt(one_time);
                        var double = parseInt(gift) * 2 + parseInt(addition) * 2 + parseInt(one_time);
                        jQuery(".total").val(total);
                        jQuery(".campaign-double").val(double);
                    });
                }
            },
            videolauncher: {
                test: function test() {
                    return true;
                },
                run: function run() {
                    var b = jQuery("body");
                    b.append("<div class=\"video-player\"><div class=\"player-container\"><div class=\"player-inner-wrap\"><div class=\"iframe-wrapper\"><div class=\"close-btn\"><svg width=\"12px\" height=\"12px\" viewPort=\"0 0 12 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"1\" y1=\"11\" x2=\"11\" y2=\"1\" stroke=\"#FFF\" stroke-width=\"2\"/><line x1=\"1\" y1=\"1\" x2=\"11\" y2=\"11\" stroke=\"#FFF\" stroke-width=\"2\"/></svg></div></div></div></div></div>");

                    var vp = jQuery(".video-player");
                    b.on("click", ".video-player-start", function (event) {
                        event.preventDefault();
                        var url = jQuery(this).data("vimeoid");

                        b.addClass("video-on");
                        vp.css("display", "block");

                        function loadVideoIntoPlayer(iframeUrl) {
                            setTimeout(function () {
                                vp.find("iframe").remove();
                                vp.css("opacity", "1");
                                vp.addClass("zoomed");
                                setTimeout(function () {
                                    vp.find(".iframe-wrapper").append("<iframe src=\"https://player.vimeo.com/video/" + iframeUrl + "?autoplay=1\" width=\"100%\" height=\"100%\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
                                }, 500);
                            }, 50);
                        }
                        loadVideoIntoPlayer(url);
                    });
                    vp.on("click", ".close-btn", function (event) {
                        event.preventDefault();
                        vp.css("opacity", "0").removeClass("zoomed");
                        b.removeClass("video-on");
                        setTimeout(function () {
                            vp.css("display", "none");
                            vp.find("iframe").remove();
                        }, 500);
                    });
                }
            }
        };

        Object.keys(wb).forEach(function (key) {
            if (wb[key].test()) {
                wb[key].run();
            }
        });
    })(jQuery, window);
});