<?php
require_once 'web.php';
global $PHP_SELF;
$thisfilename = basename(__FILE__, ".php");
$id = (checkArrayVal("id",$_REQUEST)) ? $_REQUEST["id"] :"";
if(empty($id)) backPage('news');
$detail = boardDetail($_REQUEST["id"]);
updatePageView($id);



?>
<?php include "head.php"; ?>
<body>
<?php include "header.php"; ?>


    <div class="newsDetailPage contentSize">
        <!-- 회사소식 -->
        <!-- <mark class="color-red">회사소식</mark> -->
        <!-- 성공사례 -->
        <!-- <mark class="color-green">성공사례</mark> -->
        <strong><?=$detail["subject"]?></strong>
        <time><?=str_replace("-",".",$detail["reg_date"])?></time>
        <div class="editor">
<!--            <img src="https://placehold.co/620x465" alt="임시 이미지">-->
<!--            <p>-->
<!--                애드쿡 소식 본문 내용 애드쿡 소식 본문 내용 애드쿡 소식 본문 내용 애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용 애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용-->
<!--                애드쿡 소식 본문 내용 애드쿡 소식 본문 내용 애드쿡 소식 본문 내용 애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용 애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용애드쿡 소식 본문 내용-->
<!--            </p>-->
            <?=$detail["content"]?>
        </div>
        <a href="news" class="btn-red">목록</a>
    </div>

    <?php include "kakao.php"; ?>

    <?php include "footer.php"; ?>
</body>
</html>