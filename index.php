<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>小蚁</title>
    <!-- 公用css -->
    <link rel="stylesheet" href="public/css/reset.css">
    <link rel="stylesheet" href="public/css/common.css">
    <link rel="stylesheet" href="public/libs/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="views/index/index.css">

    <!-- require.js -->
    <script data-main="config" src="public/libs/require/require.js"></script>
</head>
<body>
<!-- 导航 -->
<nav class="navbar navbar-default navbar-fixed-top" id="index_nav">
    <div class="container">
        <div class="navbar-header"><!--兼容移动-->
            <a href="#"
               class="navbar-brand"><span class="glyphicon glyphicon-star-empty" style="color:#fff;"></span></a><!--logo-->
        </div>
        <!--<button class="btn btn-default navbar-btn">搜索</button>navbar-btn-->
        <!--<a href="#" class="navbar-link">链接</a>navbar-link-->
        <p class="navbar-left navbar-text" id="logo_name">业精于勤</p><!--navbar-text-->
        <form class="navbar-form navbar-left">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="输入关键字" style="color:#5D5B5B;font-size:12px;"/>
                <span class="input-group-addon">
                      <a href="#"><span class="glyphicon glyphicon-search" style="color:#5D5B5B"></span></a>
                </span>
            </div>
        </form>
        <ul class="nav navbar-nav navbar-left">
            <li><a href="#a" class="navbar-link" data-toggle="tab">
                    <span class="glyphicon glyphicon-cog"></span>
                    分类
                </a>
            </li>
            <li><a href="#b" class="navbar-link" data-toggle="tab">
                    <span class="glyphicon glyphicon-plus"></span>
                    新增
                </a>
            </li>
            <li><a href="#c" class="navbar-link" data-toggle="tab">
                    <span class="glyphicon glyphicon-file"></span>
                    其他
                </a>
            </li>
        </ul>

        <ul class="nav navbar-nav navbar-right"><!--navbar-right-->
            <li><a href="#resigin"><span class="glyphicon glyphicon-home"></span> 注册</a></li>
            <li><a href="#login"><span class="glyphicon glyphicon-user"></span>登陆</a></li>
        </ul>
    </div>
</nav>

<!-- index_content -->
<div class="container" id="index_content">
    <div class="row">
    </div>
</div>

<div class="container">
    <div id="index_footer" class="col-md-12">
    </div>
</div>


</body>
</html>