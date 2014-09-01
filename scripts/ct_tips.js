



$(document).ready(function(){
    $('.qtbase').qtip({
        style: {
            classes: 'ui-tooltip-rounded ui-tooltip-shadow',
        },
        show: {
	        solo: true
	    },
        hide: {
            delay: 500,
            fixed: true
        }
    });


    $('.or_replay_button').qtip({
        content: {
            text:"Or the play button from <a href=\"Play%20button.html\">the add-on</a>.",
        }
    });

    $('.left_or_top').qtip({
        content: {
            text:"It may appear at the top under certain circumstances. Drag-and-drop it to the left.",
        }
    });

});
