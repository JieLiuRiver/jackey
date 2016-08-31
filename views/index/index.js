define([], function() {
    return {
        init : function (){
            $(document).ready(function(){
                $("#index_content").height( $(window).height()-55 );
            })
        }
    }
})