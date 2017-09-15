(function () {
    'use strict';

    var title = true;

    $('.switch-info').click(function () {
       $('.layout__header').toggleClass('layout__header_gray');
       $('.layout__info').toggle();

       title = !title;
       if (title) {
           $('.switch-info a').text('stories');
       } else {
           $('.switch-info a').text('info');
       }
    });
})();