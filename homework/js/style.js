$(window).load(function() {
    var animate = "";
    $('a').click(function() {
        $(this).parent().addClass('liactive');
        $(this).parent().siblings().removeClass('liactive');
        animate = true;
        $('body').stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500, function() {
            animate = false;
            return false;
        });

    })


    $(window).scroll(function() {
        if ($('body').scrollTop() > $('#hw1').offset().top) {
            $('#back').stop().fadeIn("fast");
        } else {
            $('#back').stop().fadeOut("fast");
        }
        $('#back').click(function() {
            animate = true;
            $('body').stop().animate({
                scrollTop: 0
            }, 500, function() {
                animate = false;
                $("a").parent().removeClass();
                return false;
            });

        })
        if (!animate) {
            if ($('body').scrollTop() >= $('#hw1').offset().top && $('body').scrollTop() < $('#hw2').offset().top) {
                $("a[href='#hw1']").parent().addClass('liactive');
                $("a[href='#hw1']").parent().siblings().removeClass('liactive');

            }
            if ($('body').scrollTop() >= $('#hw2').offset().top && $('body').scrollTop() < $('#hw3').offset().top) {
                $("a[href='#hw2']").parent().addClass('liactive');
                $("a[href='#hw2']").parent().siblings().removeClass('liactive');

            }
            if ($('body').scrollTop() >= $('#hw3').offset().top) {
                $("a[href='#hw3']").parent().addClass('liactive');
                $("a[href='#hw3']").parent().siblings().removeClass('liactive');

            }

        }

    })


})
