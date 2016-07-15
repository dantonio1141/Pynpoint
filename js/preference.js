/**
 * Created by HellWolf on 24/06/2016.
 */
var Preference = function() {

    var checkhandler = false;

    var handlePreferenceChecks = function() {
        if(checkhandler)
            return;
        $('body').on('click','.preference-item', function(event){
            event.preventDefault();
            var el = $(this);
            console.log("Clicked");

            if($(this).hasClass('unchecked')) {
                $(".preference-check").children('input[type=checkbox]').attr('checked',true);
                console.log($(".preference-check").children('input[type=checkbox]'));
                $(this).addClass('checked');
                $(this).removeClass('unchecked');
            }
            else {
                $(".preference-check").children('input[type=checkbox]').attr('checked',false);
                console.log($(".preference-check").children('input[type=checkbox]'));
                $(this).removeClass('checked');
                $(this).addClass('unchecked');
            }
        });

        $('body').on('mouseover','.preference-item', function(event){
            event.preventDefault();
            $(this).addClass("hover");
        });

        $('body').on('mouseout','.preference-item', function(event){
            event.preventDefault();
            $(this).removeClass("hover");
        });
        checkhandler = true;
    };

    return {
        init: function() {
            handlePreferenceChecks();
        }
    }

}();