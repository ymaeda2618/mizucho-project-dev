<?php

/**
 * 
 * 水長トップページ index.php
 * 
 * ********************
 * 2020-05-23 新規作成
 * 
 * *********************
 */

//--------------
// 新着情報一覧を取得
//--------------

// 条件の設定
$args = array(
    'post_type' => 'post',      // 投稿
    'post_status' => 'publish', // 公開された投稿、または固定ページを表示(デフォルト)
    'posts_per_page' => 3,      // 表示する投稿数(-1を指定すると全投稿を表示)
    'order' => 'DESC'           // ソートの並び順を指定'DESC' 降順、'ASC' 昇順
);

// クエリの定義
$wp_query = new WP_Query($args);

?>

<script type="text/javascript" src="https://mizucho.com/home/wp-content/themes/sydney/original/js/index.js"></script>
<script type="text/javascript" src="https://mizucho.com/home/wp-content/themes/sydney/original/slick/slick.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://mizucho.com/home/wp-content/themes/sydney/original/css/common.css">
<link rel="stylesheet" type="text/css" href="https://mizucho.com/home/wp-content/themes/sydney/original/css/loading.css">
<link rel="stylesheet" type="text/css" href="https://mizucho.com/home/wp-content/themes/sydney/original/css/fadein_animation.css">
<link rel="stylesheet" type="text/css" href="https://mizucho.com/home/wp-content/themes/sydney/original/slick/slick.css">
<link rel="stylesheet" type="text/css" href="https://mizucho.com/home/wp-content/themes/sydney/original/slick/slick-theme.css">

<div id="loading-wrapper">
    <div class="balls-guruguru">
        <span class="ball ball-1"></span>
        <span class="ball ball-2"></span>
        <span class="ball ball-3"></span>
        <span class="ball ball-4"></span>
        <span class="ball ball-5"></span>
        <span class="ball ball-6"></span>
        <span class="ball ball-7"></span>
        <span class="ball ball-8"></span>
    </div>
</div>

<div id='main-area'>

    <!--トップ画像エリア-->
    <section class='top-img-area'>
        <div class="img-div-area">
            <img class="pc-zone" src='https://mizucho.com/home/wp-content/uploads/2020/06/head_img_pc-1.png'>
            <img class="sp-zone" src='https://mizucho.com/home/wp-content/uploads/2020/06/head_img_sp-1.png'>
        </div>
        <div class="head-text-area">
            <div class="head-text">
                <span>美味しいと喜ばれる</span><br>
                <span>鮮魚へのこだわり</span>
            </div>
        </div>
        <div class="fst-circle">
            <a href="#scroll-position">
                <div class="fst-arrow"></div>
            </a>
        </div>
    </section>

    <section class='fresh-fish-section' id='scroll-position'>
        <div class='fresh-fish-title'>
            <span>明治10年創業の実績と信頼</span>
        </div>
        <div class='fresh-fish-title-bar'>
            <span></span>
        </div>
        <div class="fresh-fish-text-area">
            「活魚・活穴子・活貝類・鮮魚・鮨種」の<br>
            水長水産はおいしい魚・おいしかったへの<br>
            こだわりを持ち。新鮮な魚を日々大事な<br>
            お客様へ提供しており、「鮮度・品質・味」に<br>
            こだわりのある飲食店の店主に喜ばれています。
        </div>
        <div class="fresh-fish-list-btn-area">
            <a href="https://mizucho.com/home/fresh-fish-list/">
                <div class="outline-btn-text">取り扱い鮮魚一覧</div>
                <div class="outline-btn-icon">
                    <img src='https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_arrow.png'>
                </div>
            </a>
        </div>

    </section>

    <section class='fresh-fish-section'>

        <div class="fresh-fish-slider-area">
            <ul class="slider">
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/fresh_fish_1.png" alt="fresh-fish1">
                </li>
                <!--<li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/company_strength_img_3.png" alt="fresh-fish2">
                </li>-->
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/fresh_fish_3.png" alt="fresh-fish3">
                </li>
                <!--<li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/company_strength_img_1.png" alt="fresh-fish4">
                </li>-->
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/05/fresh_fish_5_sample.png" alt="fresh-fish5">
                </li>
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/05/fresh_fish_6_sample.png" alt="fresh-fish6">
                </li>
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/05/fresh_fish_7_sample.png" alt="fresh-fish7">
                </li>
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/mizucho_1.png" alt="mizucho-fish1">
                </li>
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/mizucho_2.png" alt="mizucho-fish2">
                </li>
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/mizucho_3.png" alt="mizucho-fish3">
                </li>
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/mizucho_4.png" alt="mizucho-fish4">
                </li>
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/mizucho_5.png" alt="mizucho-fish5">
                </li>
                <li>
                    <img src="https://mizucho.com/home/wp-content/uploads/2020/06/mizucho_6.png" alt="mizucho-fish6">
                </li>
            </ul>
        </div>

    </section>

    <!--about-->
    <section class='about-company-section'>
        <div class='about-company-title'>
            <span>水長が選ばれる3つの理由</span>
        </div>
        <div class='about-company-title-bar'>
            <span></span>
        </div>

        <div class="company-strength-area" id="strength-1">
            <div class="company-strength-relative-area">
                <div class="strength-top-area">
                    <div class="company-strength-img"><img src='https://mizucho.com/home/wp-content/uploads/2020/06/fresh_fish_2.png'></div>
                    <div class="company-strength-title"><img src='https://mizucho.com/home/wp-content/uploads/2020/06/strength_title_1_2.png'></div>
                </div>
                <div class="clear"></div>
                <div class="company-strength-text">
                    水長水産は、品質にこだわっている多くの<br>
                    飲食店様に長くご愛顧を頂いております。<br>
                    お店の品格に合うような最高鮮度の魚を、<br>
                    代々受け継がれてきた目利きで選び抜き、<br>
                    150年の歴史に恥じぬ鮮度でお届けします。
                </div>
            </div>
        </div>

        <div class="clear"></div>

        <div class="company-strength-area" id="strength-2">
            <div class="company-strength-relative-area">
                <div class="strength-top-area">
                    <div class="company-strength-img"><img src='https://mizucho.com/home/wp-content/uploads/2020/06/company_strength_img_2.png'></div>
                    <div class="company-strength-title"><img src='https://mizucho.com/home/wp-content/uploads/2020/06/strength_title_2_3.png'></div>
                </div>
                <div class="clear"></div>
                <div class="company-strength-text">
                    魚の扱いに長けた技術スタッフだけでなく<br>
                    魚の鮮度を保つための濾過システムや、<br>
                    加工した魚を最高品質で冷凍するための<br>
                    3D急速冷凍機など、高品質を保つための<br>
                    設備を取り揃え、鮮度を守り抜いています。
                </div>
            </div>
        </div>

        <div class="clear"></div>

        <div class="company-strength-area" id="strength-3">
            <div class="company-strength-relative-area">
                <div class="strength-top-area">
                    <div class="company-strength-img"><img src='https://mizucho.com/home/wp-content/uploads/2020/06/fresh_fish_4.png'></div>
                    <div class="company-strength-title"><img src='https://mizucho.com/home/wp-content/uploads/2020/06/strength_title_3_2.png'></div>
                </div>
                <div class="clear"></div>
                <div class="company-strength-text">
                    お客様に新鮮でおいしい魚を届ける為、<br>
                    長い歴史の中で構築したパイプを使い、<br>
                    様々な配送業者様と提携しております。<br>
                    お客様のもとに届くまで、責任をもって<br>
                    最高鮮度でお届けすることを約束します。
                </div>
            </div>
        </div>

        <div class="clear"></div>
    </section>

    <!--歴史と共に歩んできた水長水産-->
    <section class='history-section'>
        <div class='history-head-img-area'>
            <img class="pc-zone" src='https://mizucho.com/home/wp-content/uploads/2020/06/head_img_history_pc_2.png' alt="history-head-img">
            <img class="sp-zone" src='https://mizucho.com/home/wp-content/uploads/2020/06/head_img_history_sp_2.png' alt="history-head-img">
        </div>
        <div class='history-head-text-area'>
            <img src='https://mizucho.com/home/wp-content/uploads/2020/06/head_message_history.png' alt="history-head-img">
        </div>
        <div class="history-text-area">
            <div class="history-text">
                明治時代から長きに渡り<br>
                受け継いできた、<br>
                「お客様に喜ばれる品質と鮮度」を<br>
                守り続けていくことが、<br>
                私たちの大切な使命です。<br>
                <br>
                そのためにも、<br>
                感謝の気持ちを忘れることなく、<br>
                お客様から頂くご意見・ご要望<br>
                などを積極的に取り入れ、<br>
                次代の担い手を育成して参ります
            </div>
        </div>
    </section>

    <section class='inquiry-section'>
        <div class='inquiry-title-area'>
            お問い合わせ
        </div>
        <div class='inquiry-text-area'>
            水長水産は 100 年を超える歴史とともに<br>
            培われた経験や知識により<br>
            「鮮度・品質・味」にこだわりを持っています。
        </div>
        <a href="https://mizucho.com/home/contact/">
            <div class='inquiry-link-btn'>
                <img src='https://mizucho.com/home/wp-content/uploads/2020/06/mail_btn.png'>
            </div>
        </a>
        <a href="tel:0366335320">
            <div class='tel-link-btn'>
                <img src='https://mizucho.com/home/wp-content/uploads/2020/06/tel_btn_3.png'>
            </div>
        </a>
    </section>

    <!--新着情報-->
    <section class='news-area'>
        <div class='news-title-area'>
            <span>水長水産からのお知らせ</span><br>
            <span>-NEWS-</span>
        </div>

        <div class='news-contents-list-area'>
            <?php
            // ループ
            if ($wp_query->have_posts()) {
                while ($wp_query->have_posts()) {

                    $wp_query->the_post();

            ?>
                    <div class='news-contents-area'>
                        <a href='<?php the_permalink(); ?>'>
                            <div class='news-contents-title-area'>
                                <span class='news-contents-date'><?php the_time('Y年m月d日'); ?></span>
                                <span class='news-contents-title'><?php the_title(); ?></span>
                            </div>
                        </a>
                    </div>
            <?php
                }
            }
            // 投稿データのリセット
            wp_reset_postdata();
            ?>
        </div>

        <div class="news-list-btn-area">
            <a href="https://mizucho.com/home/news-list/">
                <div class="outline-btn-text">お知らせ一覧</div>
                <div class="outline-btn-icon">
                    <img src='https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_arrow.png'>
                </div>
            </a>
        </div>

    </section>

    <!--<section id="company-info-section">

        <div class='company-name-area'>
            <img src='https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_logo_bl.png'>
        </div>

        <div class='company-info-table-area'>
            <table class='company-info-table'>
                <tr>
                    <th>法人名</th>
                    <td>株式会社 水長水産</td>
                </tr>
                <tr>
                    <th>所在地</th>
                    <td>
                        <span>〒650-0001</span><br>
                        <span class="pc-zone">東京都江東区豊洲6-5-1 6街区口棟103~105</span>
                        <span class="sp-zone">東京都江東区豊洲6-5-1<br>6街区口棟103~105</span>
                        <div class='map-area'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.341910089836!2d139.77812791563525!3d35.64394688020304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889f31cc4d933%3A0x100a7253c6366b12!2z44CSMTM1LTAwNjEg5p2x5Lqs6YO95rGf5p2x5Yy66LGK5rSy77yW5LiB55uu77yV4oiS77yR!5e0!3m2!1sja!2sjp!4v1590228245873!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>場内地図</th>
                    <td>
                        <div class='map-area'>
                            <img src='https://mizucho.com/home/wp-content/uploads/2020/05/水長場内地図.png'>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>売場店舗</th>
                    <td>
                        03-6633-5320（電話）<br>
                        03-6633-4320（FAX）
                    </td>
                </tr>
                <tr>
                    <th>事務所</th>
                    <td>
                        047-464-1638（電話）<br>
                        047-464-1626（FAX）
                    </td>
                </tr>
                <tr>
                    <th>営業時間</th>
                    <td>
                        売場店舗　4:00～12:00<br>
                        事務所　　8:00～15:00
                    </td>
                </tr>
                <tr>
                    <th>代表者</th>
                    <td>
                        石塚貞雄
                    </td>
                </tr>
            </table>
        </div>
    </section>-->

</div>

<style>
    /*top image area */
    #primary #main {
        margin-top: 0px !important;
    }

    #main-area {
        width: 100%;
        display: inline-block;
        margin: auto;
        text-align: center;
        margin-left: auto;
        padding: 0px;
    }

    .top-img-area {
        width: 100%;
        position: relative;
        display: block;
    }

    .top-img-area img .img-div-area img {
        max-height: 800px;
        overflow-y: hidden;
    }

    .head-logo {
        width: 30%;
        max-width: 200px;
        text-align: center;
        margin: auto;
        padding: 25px 0px;
    }

    /*.head-text-pc {
        display: inline-block;
        position: absolute;
        text-align: center;
        margin: 0 auto;
        top: 70%;
        bottom: 0;
        left: 0;
        width: 50%;
        max-width: 700px;
        height: auto;
        z-index: 10;
        background-image: url(https://mizucho.com/home/wp-content/uploads/2020/05/head_text_v2.png);
        background-size: 100%;
        background-repeat: no-repeat;
        opacity: 0.0;
    }*/

    .head-text {
        display: inline-block;
        position: absolute;
        text-align: left;
        margin: 0 auto;
        bottom: 10%;
        left: 0;
        width: 70%;
        max-width: 1000px;
        height: auto;
        z-index: 10;
        opacity: 0.0;
        line-height: 2.0;
        font-size: 48px;
        color: white;
        letter-spacing: 20px;
    }

    .head-text span {
        background-color: #fff;
        color: #171c61;
        padding: 5px 50px;
        font-weight: 500;
    }

    /*.head-text-sp {
        display: none;
    }*/

    .fst-circle {
        display: none;
        position: absolute;
        text-align: center;
        text-align: -webkit-center;
        margin: 0 auto;
        bottom: 5vh;
        left: 0;
        right: 0;
        width: 5vw;
        height: 5vw;
        border-radius: 50%;
        border: 1px solid #fff;
        background: 0 0;
        z-index: 10;
    }

    .fst-arrow {
        content: '';
        margin: 1.5vw 0;
        width: 1.5vw;
        height: 1.5vw;
        border: 0;
        border-top: solid 2px #fff;
        border-right: solid 2px #fff;
        -ms-transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
        z-index: 1;
        -webkit-animation: blink 1s ease-in-out infinite alternate;
        -moz-animation: blink 1s ease-in-out infinite alternate;
        animation: flash 1.5s linear infinite;
    }

    @keyframes flash {

        0%,
        100% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }

    @media (max-width: 480px) {

        .head-logo {
            max-width: 200px;
        }

        .top-img-area img .img-div-area img {
            max-height: unset;
        }

        /*.head-text-pc {
            display: none;
        }

        .head-text-sp {
            display: inline-block;
            position: absolute;
            text-align: center;
            margin: 0 auto;
            bottom: 0vh;
            left: 0;
            top: 70%;
            width: 80%;
            height: 100px;
            z-index: 10;
            background-image: url(https://mizucho.com/home/wp-content/uploads/2020/05/head_text_v2.png);
            background-size: 100%;
            background-repeat: no-repeat;
        }*/

        .head-text {
            display: inline-block;
            position: absolute;
            text-align: left;
            margin: 0 auto;
            bottom: 20%;
            left: 0;
            width: 100%;
            height: 100px;
            z-index: 10;
            line-height: 2.5;
            font-size: 24px;
            letter-spacing: 8px;
            color: white;
        }

        .head-text span {
            background-color: #fff;
            color: #171c61;
            padding: 5px 20px;
            font-weight: 1000;
        }

        .fst-circle {
            display: inline-block;
            bottom: 3vh;
            width: 10vw;
            height: 10vw;
        }

        .fst-arrow {
            margin: 2vw 0;
            width: 4vw;
            height: 4vw;
        }
    }

    .clear {
        clear: both;
    }


    /* 歴史と共に歩んできた水長水産*/
    .history-section {
        display: block;
        margin: auto;
        position: relative;
        background-color: black;
    }

    .history-head-img-area {
        width: 100%;
        display: block;
        max-width: 1300px;
        margin: auto;
    }

    .history-head-text-area {
        position: absolute;
        top: 3%;
        width: 100%;
    }

    .history-head-text-area img {
        width: 15%;
        max-width: 200px;
    }

    .history-text {
        line-height: 2.5;
        font-size: 24px;
        color: black;
        padding: 100px 0px;
    }

    .history-text-area {
        width: 100%;
        display: block;
        background: url(https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_bg_washi.png);
        background-size: 100% auto;
    }

    @media (max-width: 480px) {
        .history-head-text-area {
            top: 5%;
        }

        .history-head-text-area img {
            width: 20%;
        }

        .history-text-area {
            width: 100%;
            display: block;
            background: url(https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_bg_washi.png);
            background-size: 100% auto;
        }

        .history-text {
            font-size: 12px;
            padding: 50px 0px;
        }
    }

    /* about */
    .about-company-section {
        display: block;
        margin: auto;
        /*background: url(https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_bg_creme.png);
        background-size: 100% 100%;*/
        padding-bottom: 100px;
    }

    .about-company-title {
        display: block;
        margin-right: auto;
        width: 100%;
        margin: auto;
        padding: 100px 0px 0px;
        font-size: 40px;
        color: #171c61;
    }

    .about-company-title-bar span {
        width: 10%;
        height: 5px;
        display: block;
        margin: auto;
        padding: 50px 0px 0px;
        border-bottom: 1px solid #171c61;
    }

    .company-strength-area {
        display: inline-block;
        /*background-color: #fff;*/
        max-width: 800px;
        margin: auto;
        width: 90%;
        margin-left: 5%;
        margin: 100px auto 0px;
        /* filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));*/
    }

    .company-strength-relative-area {
        display: block;
        margin: auto;
    }

    .company-strength-img {
        width: 80%;
        float: left;
        padding-top: 10px;
        /*position: absolute;
        left: -2%;
        top: 0%;
        filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));*/
    }

    .company-strength-title {
        width: 15%;
        float: right;
        /*position: absolute;
        right: 0%;
        top: 0%;*/
    }

    .company-strength-text {
        width: 90%;
        display: block;
        margin: auto;
        line-height: 2.5;
        font-size: 28px;
        color: #171c61;
        /*position: absolute;
        bottom: 0%;
        text-align: center;
        left: 5%;*/
        font-weight: 400;
        padding-top: 50px;
    }

    #strength-2 .company-strength-area {
        display: inline-block;
        background-color: #fff;
        max-width: 800px;
        margin: auto;
        width: 90%;
        margin-right: 5%;
        margin: 100px auto 0px;
        /*filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));*/
    }

    #strength-2 .company-strength-img {
        width: 80%;
        float: right;
        /*position: absolute;
        right: -2%;
        left: auto;
        top: 0%;
        filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));*/
    }

    #strength-2 .company-strength-title {
        width: 15%;
        float: left;
        /*position: absolute;
        left: 2%;
        right: auto;
        top: 2%;*/
    }

    /*#strength-2 .company-strength-text {
        width: 100%;
        margin-left: 0;
        line-height: 3;
        font-size: 28px;
        color: #171c61;
        font-weight: 1000;
        display: block;
        position: absolute;
        bottom: 10%;
        text-align: center;
        right: 0;
        left: auto;
    }*/

    .clear {
        clear: both;
    }

    @media (max-width: 480px) {

        .about-company-section {
            padding-bottom: 50px;
        }

        .about-company-title {
            padding: 50px 0px 0px;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 4px;
        }

        .about-company-title-bar span {
            width: 20%;
            padding: 30px 0px 0px;
        }

        .company-strength-area {
            width: 90%;
            /*margin-left: 5%;
            margin-right: auto;*/
            margin: 50px auto 0px;
        }

        /*#strength-2 .company-strength-area {
            width: 90%;
            margin-right: 5%;
            margin-left: auto;
            margin: 50px auto;
        }*/

        .company-strength-text,
        #strength-2 .company-strength-text {
            font-size: 12px;
            letter-spacing: 2px;
            padding-top: 30px;
        }

    }

    /* 鮮魚エリア */

    .fresh-fish-section {
        display: inline-block;
        background-size: 100%;
        width: 100%;
        padding: 0px 0px 100px;
        background: url(https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_bg_washi.png);
        background-size: 100% auto;
    }

    .fresh-fish-title {
        max-width: 1080px;
        display: block;
        margin-right: auto;
        width: 100%;
        margin: auto;
        padding: 120px 0px 0px;
        font-size: 32px;
        color: #171c61;
        letter-spacing: 10px;
    }

    .fresh-fish-title-bar span {
        width: 10%;
        height: 5px;
        display: block;
        margin: auto;
        padding: 50px 0px 0px;
        border-bottom: 1px solid #171c61;
    }

    .fresh-fish-head-img-area {
        display: block;
        background-size: 100% 100%;
        max-width: 800px;
        margin: auto;
        padding: 100px 0px;
    }

    .frech-fish-head-img {
        width: 80%;
        margin: auto;
    }

    .frech-fish-head-text {
        width: 15%;
        position: absolute;
        top: 5%;
        left: 6%;
        z-index: 99;
    }

    .fresh-fish-text-area {
        line-height: 3.0;
        font-size: 20px;
        color: #171c61;
        text-align: center;
        width: 80%;
        margin: auto;
        max-width: 800px;
        font-weight: 500;
        padding: 100px 0px 60px;
        letter-spacing: 8px;
    }

    /*.frech-fish-sea-bg-left {
        width: 35%;
        position: absolute;
        top: 10%;
        right: 6%;
        z-index: 10;
    }

    .frech-fish-sea-bg-right {
        width: 30%;
        position: absolute;
        bottom: 5%;
        left: 15%;
        z-index: 10;
    }*/

    .fresh-fish-slider-area {
        max-width: 1200px;
        margin: auto;
        padding: 50px 0px 50px;
    }

    .fresh-fish-slider-area li {
        margin: 0 10px;
    }

    .fresh-fish-slider-area ul {
        padding: 0px;
    }

    .fresh-fish-slider-area img {
        margin: auto;
    }

    .fresh-fish-list-btn-area {
        line-height: 1.0;
        margin: 50px auto;
        display: inline-block;
        border: 1px solid #171c61;
        padding: 20px;
        max-width: 500px;
        width: 80%;
        font-size: 18px;
        letter-spacing: 3px;
    }

    .fresh-fish-list-btn-area .outline-btn-text {
        float: left;
        width: 80%;
        color: #171c61;
    }

    .fresh-fish-list-btn-area .outline-btn-icon {
        float: left;
        width: 20%;
    }

    @media (max-width: 480px) {
        .fresh-fish-section {
            padding: 0px 0px 20px;
        }

        .fresh-fish-title {
            padding: 50px 0px 0px;
            font-size: 15px;
            letter-spacing: 4px;
        }

        .fresh-fish-title-bar span {
            width: 20%;
            padding: 30px 0px 0px;
        }

        .fresh-fish-text-area {
            width: 90%;
            font-size: 10px;
            letter-spacing: 3px;
            line-height: 2.5;
            padding: 50px 0px 30px;
        }

        .fresh-fish-slider-area li {
            margin: 0 5px;
        }

        .fresh-fish-head-img-area {
            padding: 30px 0px;
        }

        .fresh-fish-slider-area {
            padding: 30px 0px 30px;
        }

        .fresh-fish-list-btn-area {
            padding: 10px 15px 10px 15px;
            width: 60%;
            font-size: 10px;
            margin: 20px auto;
        }
    }

    /* お知らせエリア */
    .news-area {
        display: inline-block;
        background-size: 100%;
        width: 100%;
        padding: 100px 0px;
        background: url(https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_bg_washi.png);
        background-size: 100% auto;
    }

    .news-area .news-title-area {
        max-width: 800px;
        margin: auto;
        letter-spacing: 5.0px;
    }

    .news-title-area {
        width: 80%;
        margin: auto;
        line-height: 1.3;
        font-size: 30px;
        color: #171c61;
        padding: 0px 0 50px;
    }

    .news-area .news-title-area img {
        width: 15%;
        max-width: 100px;
        margin: auto;
        padding: 50px 0px;
    }

    .news-contents-list-area {
        max-width: 800px;
        margin: auto;
    }

    .news-contents-area {
        display: inline-table;
        width: 80%;
        max-width: 600px;
        margin: 10px auto;
        text-align: center;
        color: gray;
    }

    .news-img-area {
        width: 20%;
        float: left;
    }

    .news-contents-title-area {
        width: 100%;
        float: left;
        border-bottom: solid 1px black;
        display: block;
    }

    .news-contents-date {
        font-size: 20px;
        color: black;
        text-align: right;
        line-height: 2.0;
        margin-bottom: 5px;
        width: 30%;
        padding: 0px;
        display: block;
        float: left;
    }

    .news-contents-title {
        font-size: 20px;
        color: black;
        text-align: left;
        line-height: 2.0;
        width: 60%;
        margin-left: 5%;
        padding: 0px;
        display: block;
        float: left;
        text-align: left;
    }

    .news-list-btn-area {
        line-height: 1.0;
        margin: 50px 0px;
        display: inline-block;
        border: 1px solid #171c61;
        padding: 15px 15px 15px 15px;
        width: 330px;
        font-size: 20px;
        letter-spacing: 3px;
    }

    .outline-btn-text {
        float: left;
        width: 80%;
        color: #171c61;
    }

    .outline-btn-icon {
        float: left;
        width: 20%;
    }

    @media (max-width: 480px) {
        .news-area {
            padding: 30px 0px;
        }

        .news-title-area {
            font-size: 16px;
            padding: 0px 0 20px;
        }

        .news-area .news-title-area img {
            padding: 25px 0px;
        }

        .news-contents-date {
            font-size: 12px;
            line-height: 1.0;
        }

        .news-contents-title {
            font-size: 12px;
            line-height: 1.0;
        }

        .news-list-btn-area {
            padding: 10px 20px 10px 10px;
            width: 230px;
            font-size: 12px;
            margin: 20px 0px;
        }
    }

    /* お問い合わせエリア */

    .inquiry-section {
        display: inline-block;
        padding: 30px 0px 100px;
        width: 100%;
        background: url(https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_bg_creme.png);
        background-size: 100% 100%;
    }

    .inquiry-title-area {
        display: block;
        margin-right: auto;
        width: 100%;
        margin: auto;
        padding: 100px 0px;
        font-size: 40px;
        color: #171c61;
    }

    .inquiry-text-area {
        font-size: 30px;
        line-height: 2.0;
        padding-bottom: 50px;
    }

    .inquiry-link-btn,
    .tel-link-btn {
        width: 90%;
        margin: auto;
        max-width: 800px;
        margin: 50px auto;
    }

    @media (max-width: 480px) {
        .inquiry-section {
            display: inline-block;
            padding: 30px 0px;
            width: 100%;
        }

        .inquiry-title-area {
            padding: 40px 0px;
            font-size: 20px;
        }

        .inquiry-text-area {
            font-size: 15px;
            padding-bottom: 0px;
        }

        .inquiry-link-btn,
        .tel-link-btn {
            margin: 20px auto;
        }
    }

    /*--企業情報エリア---*/

    #company-info-section {
        width: 100%;
        display: inline-block;
        padding: 50px 0px;
        background: url(https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_bg_washi.png);
        background-size: 100% auto;
    }

    .company-name-area {
        width: 80%;
        margin: auto;
        max-width: 350px;
        padding: 50px 0px;
    }

    .company-info-table-area {
        padding: 30px 0px;
        max-width: 1000px;
        margin: auto;
    }

    .company-info-table {
        width: 95%;
        display: inline-table;
    }

    .company-info-table th {
        width: 30%;
        line-height: 1.0;
        padding: 20px;
        font-size: 24px;
        border: none;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }

    .company-info-table td {
        width: 70%;
        line-height: 3.0;
        text-align: left;
        padding: 10px;
        font-size: 24px;
        border: none;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }

    .company-info-table .map-area {
        width: 100%;
        text-align: center;
    }

    .company-info-table .map-area iframe {
        width: 100%;
        height: 400px;
        padding: 10px 0px;
    }

    @media (max-width: 480px) {

        #company-info-section {
            padding: 50px 0px 20px;
        }

        .company-name-area {
            padding: 0px 0px 30px;
            max-width: 150px;
        }

        .company-info-table th {
            padding: 10px;
            font-size: 14px;
        }

        .company-info-table td {
            line-height: 1.5;
            padding: 10px;
            font-size: 12px;
        }

        .company-info-table .map-area iframe {
            height: 150px;
        }
    }

    /* フェードインの処理 */
    .news-title-area,
    .news-contents-list-area,
    .news-list-btn-area,

    .about-company-title,
    .about-company-title-bar,
    #strength-1 .company-strength-img,
    #strength-1 .company-strength-title,
    #strength-1 .company-strength-text,
    #strength-2 .company-strength-img,
    #strength-2 .company-strength-title,
    #strength-2 .company-strength-text,
    #strength-3 .company-strength-img,
    #strength-3 .company-strength-title,
    #strength-3 .company-strength-text,

    .fresh-fish-title,
    .fresh-fish-title-bar,
    .fresh-fish-text-area,
    .fresh-fish-slider-area,
    .fresh-fish-list-btn-area,

    .history-head-text-area,
    .history-text-area,


    .inquiry-title-area,
    .inquiry-text-area,
    .inquiry-link-btn,
    .tel-link-btn,

    .company-name-area,
    .company-info-table {
        opacity: 0.0;
    }
</style>