<?php
require_once 'web.php';
global $PHP_SELF;
$thisfilename = basename(__FILE__, ".php");
?>
<?php include "head.php"; ?>
<body>
<?php include "header.php"; ?>
<?
$page           = 1;
$limit          = 20;
$search         = "";

if (checkArrayVal("page", $_REQUEST)) $page  = $_REQUEST["page"];

$params = array(
    "page"=>$page,
    "limit"   => $limit);

$result     = board($params);
$list       = $result["list"];
$data       = $result["data"];
$total_count= $data["total_count"];
?>
<form id="formSearch" action="<?= $thisfilename ?>">
    <input type="hidden" name="page" id="page" value="<?=$page?>">
</form>
    <div class="newsPage">
        <h2 class="contentSize-padding subTitle02">애드쿡 소식</h2>

        <div class="subMenu contentSize-padding">
            <a href="news.html">전체</a>
            <a href="news-aboutUs.html" class="active">회사소식</a>
            <a href="news-success.html">성공사례</a>
        </div>

        <ul class="newsBox contentSize">
            <!-- 소식 회사소식 페이지 -->
            <?
            foreach ($list as $item){
                ?>
                <li>
                    <a href="news-detail?id=<?=$item["board_id"]?>">
                        <img  src="<?=$item["main_image"]?>" alt="이미지">
                        <!-- 회사소식 -->
                        <mark class="color-red">회사소식</mark>
                        <strong><?=$item["subject"]?></strong>
                        <time><?=str_replace("-",".",$item["reg_date"])?></time>
                    </a>
                </li>
                <?
            }
            ?>
        </ul>

        <?=settingNavWeb($page, $total_count, $limit)?>
    </div>

    <?php include "kakao.php"; ?>

    <?php include "footer.php"; ?>
</body>
</html>