/**
 * 
 * 水長トップページ indexのjs
 * 
 * ********************
 * 2020-05-23 新規作成
 * 
 * *********************
 */

jQuery(function($) {

    //--------------
    // loading処理
    //-------------
    var h = $(window).height(); // ブラウザウィンドウの高さを取得する
    $('#main-area').css('display', 'none'); // コンテンツを非表示にする

    //--------------
    // headテキスト
    //-------------
    var head_text_pc = $('.head-text-pc');
    var head_text_sp = $('.head-text-sp');

    //--------------
    // 鮮魚説明エリア
    //-------------
    var fresh_fish_explain_head_img = $('.fresh-fish-explain-head-img-area');
    var fresh_fish_explain_head_img_top;

    var fresh_fish_explain_head_title = $('.fresh-fish-explain-head-title-area');
    var fresh_fish_explain_head_title_top;

    var fresh_fish_explain_text = $('.fresh-fish-explain-text-area');
    var fresh_fish_explain_text_top;

    var fresh_fish_explain_slider = $('.fresh-fish-explain-slider-area');
    var fresh_fish_explain_slider_top;

    //--------------
    // 活天然魚エリア
    //-------------
    var wild_fish_title = $('.wild-fish-list-section .title-area');
    var wild_fish_title_top;

    var wild_fish_top_img = $('.wild-fish-list-section .top-img-area');
    var wild_fish_top_img_top;

    var wild_fish_explain_text = $('.wild-fish-list-section .explain-text-area');
    var wild_fish_explain_text_top;

    /*var wild_fish_handling_title = $('.wild-fish-list-section .handling-list-title-area');
    var wild_fish_handling_title_top;*/

    var wild_fish_contents_img_1 = $('.wild-fish-list-section #contents-img-area-1');
    var wild_fish_contents_img_1_top;

    var wild_fish_contents_img_2 = $('.wild-fish-list-section #contents-img-area-2');
    var wild_fish_contents_img_2_top;

    var wild_fish_contents_img_3 = $('.wild-fish-list-section #contents-img-area-3');
    var wild_fish_contents_img_3_top;

    var wild_fish_contents_img_4 = $('.wild-fish-list-section #contents-img-area-4');
    var wild_fish_contents_img_4_top;

    var wild_fish_contents_img_5 = $('.wild-fish-list-section #contents-img-area-5');
    var wild_fish_contents_img_5_top;

    var wild_fish_contents_img_6 = $('.wild-fish-list-section #contents-img-area-6');
    var wild_fish_contents_img_6_top;

    var wild_fish_contents_img_7 = $('.wild-fish-list-section #contents-img-area-7');
    var wild_fish_contents_img_7_top;

    var wild_fish_contents_img_8 = $('.wild-fish-list-section #contents-img-area-8');
    var wild_fish_contents_img_8_top;

    var wild_fish_contents_img_9 = $('.wild-fish-list-section #contents-img-area-9');
    var wild_fish_contents_img_9_top;

    //--------------
    // 穴子エリア
    //-------------
    var conger_title = $('.conger-list-section .title-area');
    var conger_title_top;

    var conger_top_img = $('.conger-list-section .top-img-area');
    var conger_top_img_top;

    var conger_explain_text = $('.conger-list-section .explain-text-area');
    var conger_explain_text_top;

    /*var conger_handling_title = $('.conger-list-section .handling-list-title-area');
    var conger_handling_title_top;*/

    var conger_contents_img_1 = $('.conger-list-section #contents-img-area-1');
    var conger_contents_img_1_top;

    var conger_contents_img_2 = $('.conger-list-section #contents-img-area-2');
    var conger_contents_img_2_top;

    var conger_contents_img_3 = $('.conger-list-section #contents-img-area-3');
    var conger_contents_img_3_top;

    //--------------
    // 加工魚エリア
    //-------------
    var processed_fish_title = $('.processed-fish-list-section .title-area');
    var processed_fish_title_top;

    var processed_fish_top_img = $('.processed-fish-list-section .top-img-area');
    var processed_fish_top_img_top;

    var processed_fish_explain_text = $('.processed-fish-list-section .explain-text-area');
    var processed_fish_explain_text_top;

    /*var processed_fish_handling_title = $('.processed-fish-list-section .handling-list-title-area');
    var processed_fish_handling_title_top;*/

    var processed_fish_contents_img_1 = $('.processed-fish-list-section #contents-img-area-1');
    var processed_fish_contents_img_1_top;

    var processed_fish_contents_img_2 = $('.processed-fish-list-section #contents-img-area-2');
    var processed_fish_contents_img_2_top;

    var processed_fish_contents_img_3 = $('.processed-fish-list-section #contents-img-area-3');
    var processed_fish_contents_img_3_top;

    //--------------
    // 養殖魚エリア
    //-------------
    var farmed_fish_title = $('.farmed-fish-list-section .title-area');
    var farmed_fish_title_top;

    var farmed_fish_top_img = $('.farmed-fish-list-section .top-img-area');
    var farmed_fish_top_img_top;

    var farmed_fish_explain_text = $('.farmed-fish-list-section .explain-text-area');
    var farmed_fish_explain_text_top;

    /*var farmed_fish_handling_title = $('.farmed-fish-list-section .handling-list-title-area');
    var farmed_fish_handling_title_top;*/

    var farmed_fish_contents_img_1 = $('.farmed-fish-list-section #contents-img-area-1');
    var farmed_fish_contents_img_1_top;

    var farmed_fish_contents_img_2 = $('.farmed-fish-list-section #contents-img-area-2');
    var farmed_fish_contents_img_2_top;

    var farmed_fish_contents_img_3 = $('.farmed-fish-list-section #contents-img-area-3');
    var farmed_fish_contents_img_3_top;

    var farmed_fish_contents_img_4 = $('.farmed-fish-list-section #contents-img-area-4');
    var farmed_fish_contents_img_4top;

    var farmed_fish_contents_img_5 = $('.farmed-fish-list-section #contents-img-area-5');
    var farmed_fish_contents_img_5_top;

    //--------------
    // 貝類エリア
    //-------------
    var shellfish_title = $('.shellfish-list-section .title-area');
    var shellfish_title_top;

    var shellfish_top_img = $('.shellfish-list-section .top-img-area');
    var shellfish_top_img_top;

    var shellfish_explain_text = $('.shellfish-list-section .explain-text-area');
    var shellfish_explain_text_top;

    /*var shellfish_handling_title = $('.shellfish-list-section .handling-list-title-area');
    var shellfish_handling_title_top;*/

    var shellfish_contents_img_1 = $('.shellfish-list-section #contents-img-area-1');
    var shellfish_contents_img_1_top;

    var shellfish_contents_img_2 = $('.shellfish-list-section #contents-img-area-2');
    var shellfish_contents_img_2_top;

    var shellfish_contents_img_3 = $('.shellfish-list-section #contents-img-area-3');
    var shellfish_contents_img_3_top;

    var shellfish_contents_img_4 = $('.shellfish-list-section #contents-img-area-4');
    var shellfish_contents_img_4top;

    var shellfish_contents_img_5 = $('.shellfish-list-section #contents-img-area-5');
    var shellfish_contents_img_5_top;

    var shellfish_contents_img_6 = $('.shellfish-list-section #contents-img-area-6');
    var shellfish_contents_img_6_top;

    //--------------
    // 鮨種エリア
    //-------------
    var sushi_fish_title = $('.sushi-fish-list-section .title-area');
    var sushi_fish_title_top;

    var sushi_fish_top_img = $('.sushi-fish-list-section .top-img-area');
    var sushi_fish_top_img_top;

    var sushi_fish_explain_text = $('.sushi-fish-list-section .explain-text-area');
    var sushi_fish_explain_text_top;

    /*var sushi_fish_handling_title = $('.sushi-fish-list-section .handling-list-title-area');
    var sushi_fish_handling_title_top;*/

    var sushi_fish_contents_img_1 = $('.sushi-fish-list-section #contents-img-area-1');
    var sushi_fish_contents_img_1_top;

    var sushi_fish_contents_img_2 = $('.sushi-fish-list-section #contents-img-area-2');
    var sushi_fish_contents_img_2_top;

    var sushi_fish_contents_img_3 = $('.sushi-fish-list-section #contents-img-area-3');
    var sushi_fish_contents_img_3_top;


    //--------------
    // 問い合わせエリア
    //-------------
    var inquiry_title = $('.inquiry-title-area');
    var inquiry_title_top;

    var inquiry_text = $('.inquiry-text-area');
    var inquiry_text_top;

    var inquiry_link_btn = $('.inquiry-link-btn');
    var inquiry_link_btn_top;

    var tel_link_btn = $('.tel-link-btn');
    var tel_link_btn_top;

    //--------------
    // 企業情報エリア
    //-------------
    var company_name = $('.company-name-area');
    var company_name_top;

    var company_info_table = $('.company-info-table');
    var company_info_table_top;




    // ページ読み込み完了したときの処理
    $(window).on('load', function() {

        //--------------
        // loading処理
        //-------------
        $('#loading-wrapper').css('display', 'none');
        $('#main-area').css('display', 'block');

        //--------------
        // headテキスト
        //-------------
        head_text_pc.addClass("entry-LeftToRight");
        head_text_sp.addClass("entry-LeftToRight");

        //-------------
        // slick処理
        //-------------
        $(".slider").slick({
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            fade: true, //フェードの有効化
            responsive: [{
                breakpoint: 800,
                settings: {
                    centerMode: true,
                    centerPadding: '10%',
                    fade: false,
                }
            }]
        });

        //-------------
        // 天然活魚slick処理
        //-------------
        $(".wild-fish-slider").slick({
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            slidesToShow: 3
        });

        //-------------
        // 養殖活魚slick処理
        //-------------
        $(".farmed-fish-slider").slick({
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            slidesToShow: 3
        });

        //-------------
        // 養殖活魚slick処理
        //-------------
        $(".shellfish-fish-slider").slick({
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            slidesToShow: 3
        });

        //-------------
        // 養殖活魚slick処理
        //-------------
        $(".sushi-fish-slider").slick({
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            slidesToShow: 3
        });

    });


    /**
     * スクロールしたときの処理
     * 
     */
    $(window).scroll(function() {

        //--------------
        // 鮮魚説明エリア
        //-------------
        fresh_fish_explain_head_img_top = fresh_fish_explain_head_img.offset().top;
        if ($(this).scrollTop() > fresh_fish_explain_head_img_top - 500) fresh_fish_explain_head_img.addClass("entry-LeftToRight");

        fresh_fish_explain_head_title_top = fresh_fish_explain_head_title.offset().top;
        if ($(this).scrollTop() > fresh_fish_explain_head_title_top - 500) fresh_fish_explain_head_title.addClass("entry-RightToLeft");

        fresh_fish_explain_text_top = fresh_fish_explain_text.offset().top;
        if ($(this).scrollTop() > fresh_fish_explain_text_top - 500) fresh_fish_explain_text.addClass("entry-SlideUp");

        fresh_fish_explain_slider_top = fresh_fish_explain_slider.offset().top;
        if ($(this).scrollTop() > fresh_fish_explain_slider_top - 500) fresh_fish_explain_slider.addClass("entry-SlideUp");

        //--------------
        // 活天然魚エリア
        //-------------
        /*  wild_fish_title_top = wild_fish_title.offset().top;
        if ($(this).scrollTop() > wild_fish_title_top - 500) wild_fish_title.addClass("entry-SlideUp");

        wild_fish_top_img_top = wild_fish_top_img.offset().top;
        if ($(this).scrollTop() > wild_fish_top_img_top - 500) wild_fish_top_img.addClass("entry-SlideUp");

        wild_fish_explain_text_top = wild_fish_explain_text.offset().top;
        if ($(this).scrollTop() > wild_fish_explain_text_top - 500) wild_fish_explain_text.addClass("entry-SlideUp");

        wild_fish_handling_title_top = wild_fish_handling_title.offset().top;
        if ($(this).scrollTop() > wild_fish_handling_title_top - 500) wild_fish_handling_title.addClass("entry-SlideUp");

        wild_fish_contents_img_1_top = wild_fish_contents_img_1.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_1_top - 500) wild_fish_contents_img_1.addClass("entry-LeftToRight");

        wild_fish_contents_img_2_top = wild_fish_contents_img_2.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_2_top - 500) wild_fish_contents_img_2.addClass("entry-SlideUp");

        wild_fish_contents_img_3_top = wild_fish_contents_img_3.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_3_top - 500) wild_fish_contents_img_3.addClass("entry-RightToLeft");

        wild_fish_contents_img_4_top = wild_fish_contents_img_4.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_4_top - 500) wild_fish_contents_img_4.addClass("entry-LeftToRight");

        wild_fish_contents_img_5_top = wild_fish_contents_img_5.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_5_top - 500) wild_fish_contents_img_5.addClass("entry-SlideUp");

        wild_fish_contents_img_6_top = wild_fish_contents_img_6.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_6_top - 500) wild_fish_contents_img_6.addClass("entry-RightToLeft");

        wild_fish_contents_img_7_top = wild_fish_contents_img_7.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_7_top - 500) wild_fish_contents_img_7.addClass("entry-LeftToRight");

        wild_fish_contents_img_8_top = wild_fish_contents_img_8.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_8_top - 500) wild_fish_contents_img_8.addClass("entry-SlideUp");

        wild_fish_contents_img_9_top = wild_fish_contents_img_9.offset().top;
        if ($(this).scrollTop() > wild_fish_contents_img_9_top - 500) wild_fish_contents_img_9.addClass("entry-RightToLeft");
*/
        //--------------
        // 穴子エリア
        //-------------
        conger_title_top = conger_title.offset().top;
        if ($(this).scrollTop() > conger_title_top - 500) conger_title.addClass("entry-SlideUp");

        conger_top_img_top = conger_top_img.offset().top;
        if ($(this).scrollTop() > conger_top_img_top - 500) conger_top_img.addClass("entry-SlideUp");

        conger_explain_text_top = conger_explain_text.offset().top;
        if ($(this).scrollTop() > conger_explain_text_top - 500) conger_explain_text.addClass("entry-SlideUp");

        /*conger_handling_title_top = conger_handling_title.offset().top;
        if ($(this).scrollTop() > conger_handling_title_top - 500) conger_handling_title.addClass("entry-SlideUp");*/

        conger_contents_img_1_top = conger_contents_img_1.offset().top;
        if ($(this).scrollTop() > conger_contents_img_1_top - 500) conger_contents_img_1.addClass("entry-LeftToRight");

        conger_contents_img_2_top = conger_contents_img_2.offset().top;
        if ($(this).scrollTop() > conger_contents_img_2_top - 500) conger_contents_img_2.addClass("entry-SlideUp");

        conger_contents_img_3_top = conger_contents_img_3.offset().top;
        if ($(this).scrollTop() > conger_contents_img_3_top - 500) conger_contents_img_3.addClass("entry-RightToLeft");

        //--------------
        // 加工魚エリア
        //-------------
        processed_fish_title_top = processed_fish_title.offset().top;
        if ($(this).scrollTop() > processed_fish_title_top - 500) processed_fish_title.addClass("entry-SlideUp");

        processed_fish_top_img_top = processed_fish_top_img.offset().top;
        if ($(this).scrollTop() > processed_fish_top_img_top - 500) processed_fish_top_img.addClass("entry-SlideUp");

        processed_fish_explain_text_top = processed_fish_explain_text.offset().top;
        if ($(this).scrollTop() > processed_fish_explain_text_top - 500) processed_fish_explain_text.addClass("entry-SlideUp");

        /*processed_fish_handling_title_top = processed_fish_handling_title.offset().top;
         if ($(this).scrollTop() > processed_fish_handling_title_top - 500) processed_fish_handling_title.addClass("entry-SlideUp");*/

        processed_fish_contents_img_1_top = processed_fish_contents_img_1.offset().top;
        if ($(this).scrollTop() > processed_fish_contents_img_1_top - 500) processed_fish_contents_img_1.addClass("entry-LeftToRight");

        processed_fish_contents_img_2_top = processed_fish_contents_img_2.offset().top;
        if ($(this).scrollTop() > processed_fish_contents_img_2_top - 500) processed_fish_contents_img_2.addClass("entry-SlideUp");

        processed_fish_contents_img_3_top = processed_fish_contents_img_3.offset().top;
        if ($(this).scrollTop() > processed_fish_contents_img_3_top - 500) processed_fish_contents_img_3.addClass("entry-RightToLeft");

        //--------------
        // 養殖魚エリア
        //-------------
        /*farmed_fish_title_top = farmed_fish_title.offset().top;
        if ($(this).scrollTop() > farmed_fish_title_top - 500) farmed_fish_title.addClass("entry-SlideUp");

        farmed_fish_top_img_top = farmed_fish_top_img.offset().top;
        if ($(this).scrollTop() > farmed_fish_top_img_top - 500) farmed_fish_top_img.addClass("entry-SlideUp");

        farmed_fish_explain_text_top = farmed_fish_explain_text.offset().top;
        if ($(this).scrollTop() > farmed_fish_explain_text_top - 500) farmed_fish_explain_text.addClass("entry-SlideUp");

        farmed_fish_handling_title_top = farmed_fish_handling_title.offset().top;
        if ($(this).scrollTop() > farmed_fish_handling_title_top - 500) farmed_fish_handling_title.addClass("entry-SlideUp");

        farmed_fish_contents_img_1_top = farmed_fish_contents_img_1.offset().top;
        if ($(this).scrollTop() > farmed_fish_contents_img_1_top - 500) farmed_fish_contents_img_1.addClass("entry-LeftToRight");

        farmed_fish_contents_img_2_top = farmed_fish_contents_img_2.offset().top;
        if ($(this).scrollTop() > farmed_fish_contents_img_2_top - 500) farmed_fish_contents_img_2.addClass("entry-SlideUp");

        farmed_fish_contents_img_3_top = farmed_fish_contents_img_3.offset().top;
        if ($(this).scrollTop() > farmed_fish_contents_img_3_top - 500) farmed_fish_contents_img_3.addClass("entry-RightToLeft");

        farmed_fish_contents_img_4top = farmed_fish_contents_img_4.offset().top;
        if ($(this).scrollTop() > farmed_fish_contents_img_4top - 500) farmed_fish_contents_img_4.addClass("entry-LeftToRight");

        farmed_fish_contents_img_5_top = farmed_fish_contents_img_5.offset().top;
        if ($(this).scrollTop() > farmed_fish_contents_img_5_top - 500) farmed_fish_contents_img_5.addClass("entry-RightToLeft");*/

        //--------------
        // 貝類エリア
        //-------------
        /*shellfish_title_top = shellfish_title.offset().top;
        if ($(this).scrollTop() > shellfish_title_top - 500) shellfish_title.addClass("entry-SlideUp");

        shellfish_top_img_top = shellfish_top_img.offset().top;
        if ($(this).scrollTop() > shellfish_top_img_top - 500) shellfish_top_img.addClass("entry-SlideUp");

        shellfish_explain_text_top = shellfish_explain_text.offset().top;
        if ($(this).scrollTop() > shellfish_explain_text_top - 500) shellfish_explain_text.addClass("entry-SlideUp");

        shellfish_handling_title_top = shellfish_handling_title.offset().top;
        if ($(this).scrollTop() > shellfish_handling_title_top - 500) shellfish_handling_title.addClass("entry-SlideUp");

        shellfish_contents_img_1_top = shellfish_contents_img_1.offset().top;
        if ($(this).scrollTop() > shellfish_contents_img_1_top - 500) shellfish_contents_img_1.addClass("entry-LeftToRight");

        shellfish_contents_img_2_top = shellfish_contents_img_2.offset().top;
        if ($(this).scrollTop() > shellfish_contents_img_2_top - 500) shellfish_contents_img_2.addClass("entry-SlideUp");

        shellfish_contents_img_3_top = shellfish_contents_img_3.offset().top;
        if ($(this).scrollTop() > shellfish_contents_img_3_top - 500) shellfish_contents_img_3.addClass("entry-RightToLeft");

        shellfish_contents_img_4top = shellfish_contents_img_4.offset().top;
        if ($(this).scrollTop() > shellfish_contents_img_4top - 500) shellfish_contents_img_4.addClass("entry-LeftToRight");

        shellfish_contents_img_5_top = shellfish_contents_img_5.offset().top;
        if ($(this).scrollTop() > shellfish_contents_img_5_top - 500) shellfish_contents_img_5.addClass("entry-SlideUp");

        shellfish_contents_img_6_top = shellfish_contents_img_6.offset().top;
        if ($(this).scrollTop() > shellfish_contents_img_6_top - 500) shellfish_contents_img_6.addClass("entry-RightToLeft");*/

        //--------------
        // 鮨種エリア
        //-------------
        /*sushi_fish_title_top = sushi_fish_title.offset().top;
        if ($(this).scrollTop() > sushi_fish_title_top - 500) sushi_fish_title.addClass("entry-SlideUp");

        sushi_fish_top_img_top = sushi_fish_top_img.offset().top;
        if ($(this).scrollTop() > sushi_fish_top_img_top - 500) sushi_fish_top_img.addClass("entry-SlideUp");

        sushi_fish_explain_text_top = sushi_fish_explain_text.offset().top;
        if ($(this).scrollTop() > sushi_fish_explain_text_top - 500) sushi_fish_explain_text.addClass("entry-SlideUp");

        sushi_fish_handling_title_top = sushi_fish_handling_title.offset().top;
        if ($(this).scrollTop() > sushi_fish_handling_title_top - 500) sushi_fish_handling_title.addClass("entry-SlideUp");

        sushi_fish_contents_img_1_top = sushi_fish_contents_img_1.offset().top;
        if ($(this).scrollTop() > sushi_fish_contents_img_1_top - 500) sushi_fish_contents_img_1.addClass("entry-LeftToRight");

        sushi_fish_contents_img_2_top = sushi_fish_contents_img_2.offset().top;
        if ($(this).scrollTop() > sushi_fish_contents_img_2_top - 500) sushi_fish_contents_img_2.addClass("entry-SlideUp");

        sushi_fish_contents_img_3_top = sushi_fish_contents_img_3.offset().top;
        if ($(this).scrollTop() > sushi_fish_contents_img_3_top - 500) sushi_fish_contents_img_3.addClass("entry-RightToLeft");*/

        //--------------
        // 問い合わせエリア
        //-------------
        inquiry_title_top = inquiry_title.offset().top;
        if ($(this).scrollTop() > inquiry_title_top - 500) inquiry_title.addClass("entry-SlideUp");

        inquiry_text_top = inquiry_text.offset().top;
        if ($(this).scrollTop() > inquiry_text_top - 500) inquiry_text.addClass("entry-SlideUp");

        inquiry_link_btn_top = inquiry_link_btn.offset().top;
        if ($(this).scrollTop() > inquiry_link_btn_top - 500) inquiry_link_btn.addClass("entry-LeftToRight");

        tel_link_btn_top = tel_link_btn.offset().top;
        if ($(this).scrollTop() > tel_link_btn_top - 500) tel_link_btn.addClass("entry-RightToLeft");

        //--------------
        // 企業情報エリア
        //-------------
        company_name_top = company_name.offset().top;
        if ($(this).scrollTop() > company_name_top - 500) company_name.addClass("entry-SlideUp");

        company_info_table_top = company_info_table.offset().top;
        if ($(this).scrollTop() > company_info_table_top - 500) company_info_table.addClass("entry-SlideUp");




    });


    /**
     * ページ内リンクのみ取得します。
     * 
     */
    $('a[href^=#]').click(function() {
        //デフォルトのイベントをキャンセル
        event.preventDefault();

        // 移動先となる要素を取得します。
        var target = $(this.hash);
        if (!target.length) return;

        // 移動先の位置を取得します
        var targetY = target.offset().top;

        // animateで移動します
        $('html, body').animate({ scrollTop: targetY }, 500, 'swing');
    });

});