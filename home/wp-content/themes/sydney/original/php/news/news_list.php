<?php

/**
 * 
 * お知らせ一覧 news_list.php
 * 
 * ********************
 * 2020-04-12 新規作成
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
    'posts_per_page' => 30,     // 表示する投稿数(-1を指定すると全投稿を表示)
    'order' => 'DESC'           // ソートの並び順を指定'DESC' 降順、'ASC' 昇順
);

// クエリの定義
$wp_query = new WP_Query($args);

?>

<link rel="stylesheet" type="text/css" href="https://mizucho.com/home/wp-content/themes/sydney/original/css/news_list.css">
<link rel="stylesheet" type="text/css" href="https://mizucho.com/home/wp-content/themes/sydney/original/css/common.css">

<div id='main-area'>

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
                            <div class='news-img-area'>
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail('thumbnail'); ?>
                                <?php else : ?>
                                    <img width="150" height="150" src="https://mizucho.com/home/wp-content/uploads/2020/04/unnamed.png" class="attachment-thumbnail size-thumbnail wp-post-image" alt="">
                                <?php endif; ?>
                            </div>
                            <div class='news-contents-date-area'>
                                <span class='news-contents-date'><?php the_time('Y年m月d日'); ?></span>
                            </div>
                            <div class='news-contents-title-area'>
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

    </section>
</div>