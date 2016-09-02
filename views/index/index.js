define([], function() {
    var objIndex = {
        DOM : function(){
            return {                         //DOM节点对象
                $doc : $(document),
                $win : $(window),
                $content : $("#index_content"),
                $imgList : $("#index_list"),
                $btnWrap : $("#btnWrap"),
                $btnALi : $("#btnWrap").find('li'),
                $imgALi : $("#index_list").find('li')
            }
        },
        init : function ($){
            var self = this;
            var DOM = self.DOM();
            $(document).ready(function(){
                DOM.$content.height( $(window).height()-55 );
                self.handleEvent().btnLiHoverEvent();
                self.handleEvent().btnLiClickEvent();
            })
        },
        handleEvent : function(){
            var self = this;
            var DOM = self.DOM();
            function touchBtn(){   //按钮hover事件
                for( var i=0; i<DOM.$btnALi.length; i++ ){
                    DOM.$btnALi.eq(i).attr('index',i)
                    DOM.$btnALi.eq(i).mouseover(function(){
                        for( var k=0; i<DOM.$btnALi.length; k++ ){
                            DOM.$btnALi.eq(i).css({
                                left : "-80px",
                                backgroundColor : "#f60"
                            })
                        }
                        $(this).css({
                            left : 0,
                            backgroundColor:"#333"
                        })
                    })
                }
            }

            function clickBtn(){           //按钮点击事件
                for( var i=0; i<DOM.$btnALi.length; i++ ){
                    var e = DOM.$btnALi.eq(i);
                    e.click(function(){
                        for( var i=0; i<DOM.$imgALi.length; i++ ){
                            DOM.$imgALi.eq(i).attr('index',i);
                        }
                        console.log('...');
                        for(  var i=0; i<DOM.$imgALi.length; i++ ){
                            if( $(this).attr('index') ==  DOM.$imgALi.eq(i).attr('index')){
                                switch( i+1 ){
                                    case 4 :
                                        DOM.$imgList.css({
                                            transform : "rotateY(90deg)",
                                            WebkitTransform : "rotateY(90deg)"
                                        })
                                        break;
                                    case 2 :
                                        DOM.$imgList.css({
                                            transform : "rotateY(-90deg)",
                                            WebkitTransform : "rotateY(-90deg)"
                                        })
                                        break;
                                    case 1 :
                                        DOM.$imgList.css({
                                            transform : "rotateY(0deg)",
                                            WebkitTransform : "rotateY(0deg)"
                                        })
                                        break;
                                    case 3 :
                                        DOM.$imgList.css({
                                            transform : "rotateY(180deg)",
                                            WebkitTransform : "rotateY(180deg)"
                                        })
                                        break;
                                }
                            }
                        }
                    })
                }
            }

            return {
                btnLiHoverEvent : touchBtn,
                btnLiClickEvent : clickBtn
            }
        }
    }
    return objIndex;
})