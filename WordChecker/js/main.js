(function() {
    'use strict';

    var comment = document.getElementById('comment');
    var label = document.getElementById('label');

    var LIMIT = 20;
    var warning = 10;

    label.innerHTML = LIMIT;

    comment.addEventListener('keyup', function() {
        var remaning = LIMIT - this.value.length;
        label.innerHTML = remaning;
        if(remaning < warning) {
            label.className = 'warning';
        } else {
            label.className ='';
        }

    });

})();