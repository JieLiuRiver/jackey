/*
* 配置require相关内容、文件目录，加载模块等
* author : heliujie
* */
require.config({
   // baseUrl : ''
    paths : {
        'jquery' : "./public/libs/jquery/dist/jquery",
        'bootstrap' : "./public/libs/bootstrap/dist/js/bootstrap.min",
        "index" : "./views/index/index"
    }
});

require(['jquery', 'bootstrap', 'index'], function(jquery, bootstrap, index){
    index.init();
});