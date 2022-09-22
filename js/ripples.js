$(document).ready(function() {
    try {
        $('body').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });
        $('#page-header').ripples({
            resolution: 512,
            dropRadius: 10, //px
            perturbance: 0.04,
        });
        // $('#footer').ripples({
        //     resolution: 512,
        //     dropRadius: 20, //px
        //     perturbance: 0.04,
        // });
        // $('#post').ripples({
        //     resolution: 512,
        //     dropRadius: 20, //px
        //     perturbance: 0.04,
        // });
        
    }
    catch (e) {
        $('.error').show().text(e);
    }
});
