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
$limit          = 3;
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
    <div class="newsPage contentSize">
        <h2 class="subTitle01">애드쿡 소식</h2>
        <ul class="newsBox">
            <?
            foreach ($list as $item){
                ?>
                <li>
                    <a href="news-detail?id=<?=$item["board_id"]?>">
                        <img  src="<?=$item["main_image"]?>" alt="이미지">
                        <strong><?=$item["subject"]?></strong>
                        <time><?=str_replace("-",".",$item["reg_date"])?></time>
                    </a>
                </li>
                <?
            }
            ?>

<!--            <li>-->
<!--                <a href="news-detail">-->
<!--                    <img src="https://placehold.co/340x240" alt="임시 이미지">-->
<!--                    <strong>애드쿡 소식 타이틀 영역</strong>-->
<!--                    <time>2024.04.01</time>-->
<!--                </a>-->
<!--            </li>-->
<!--            <li>-->
<!--                <a href="news-detail">-->
<!--                    <img src="https://placehold.co/340x240" alt="임시 이미지">-->
<!--                    <strong>애드쿡 소식 타이틀 영역</strong>-->
<!--                    <time>2024.04.01</time>-->
<!--                </a>-->
<!--            </li>-->
<!--            <li>-->
<!--                <a href="news-detail">-->
<!--                    <img src="https://placehold.co/340x240" alt="임시 이미지">-->
<!--                    <strong>애드쿡 소식 타이틀 영역</strong>-->
<!--                    <time>2024.04.01</time>-->
<!--                </a>-->
<!--            </li>-->
<!--            <li>-->
<!--                <a href="news-detail">-->
<!--                    <img src="https://placehold.co/340x240" alt="임시 이미지">-->
<!--                    <strong>애드쿡 소식 타이틀 영역</strong>-->
<!--                    <time>2024.04.01</time>-->
<!--                </a>-->
<!--            </li>-->
<!--            <li>-->
<!--                <a href="news-detail">-->
<!--                    <img src="https://placehold.co/340x240" alt="임시 이미지">-->
<!--                    <strong>애드쿡 소식 타이틀 영역</strong>-->
<!--                    <time>2024.04.01</time>-->
<!--                </a>-->
<!--            </li>-->
        </ul>

        <?=settingNavWeb($page, $total_count, $limit)?>
<!--        <div class="pagerBox" data-styleIdx="a">-->
<!--            <a href="">첫 페이지</a>-->
<!--            <a href="">이전 페이지</a>-->
<!--            <ol>-->
<!--                <li><a href="" class="active">1</a></li>-->
<!--                <li><a href="">2</a></li>-->
<!--                <li><a href="">3</a></li>-->
<!--                <li><a href="">4</a></li>-->
<!--            </ol>-->
<!--            <a href="">다음 페이지</a>-->
<!--            <a href="">마지막 페이지</a>-->
<!--        </div>-->
    </div>

    <?php include "kakao.php"; ?>

    <?php include "footer.php"; ?>
</body>
</html>