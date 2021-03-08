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
    var head_text = $('.head-text');

    //--------------
    // トップメッセージ
    //-------------

    var company_message_title_bar = $('.fresh-fish-title-bar');
    var company_message_title_bar_top;

    var company_message_text_title = $('.fresh-fish-title');
    var company_message_text_title_top;

    var company_message_text = $('.fresh-fish-text-area');
    var company_message_text_top;

    var company_message_slider = $('.fresh-fish-slider-area');
    var company_message_slider_top;

    var company_message_list_btn = $('.fresh-fish-list-btn-area');
    var company_message_list_btn_top;

    //--------------
    // aboutエリア
    //-------------
    var about_company_title = $('.about-company-title');
    var about_company_title_top;

    var about_company_title_bar = $('.about-company-title-bar');
    var about_company_title_bar_top;

    var company_strength_img_1 = $('#strength-1 .company-strength-img');
    var company_strength_img_1_top;

    var company_strength_title_1 = $('#strength-1 .company-strength-title');
    var company_strength_title_1_top;

    var company_strength_text_1 = $('#strength-1 .company-strength-text');
    var company_strength_text_1_top;

    var company_strength_img_2 = $('#strength-2 .company-strength-img');
    var company_strength_img_2_top;

    var company_strength_title_2 = $('#strength-2 .company-strength-title');
    var company_strength_title_2_top;

    var company_strength_text_2 = $('#strength-2 .company-strength-text');
    var company_strength_text_2_top;

    var company_strength_img_3 = $('#strength-3 .company-strength-img');
    var company_strength_img_3_top;

    var company_strength_title_3 = $('#strength-3 .company-strength-title');
    var company_strength_title_3_top;

    var company_strength_text_3 = $('#strength-3 .company-strength-text');
    var company_strength_text_3_top;

    //--------------
    // 歴史
    //-------------
    var history_title = $('.history-head-text-area');
    var history_title_top;

    var history_text = $('.history-text-area');
    var history_text_top;

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
    // お知らせエリア
    //-------------
    var news_title = $('.news-title-area');
    var news_title_top;

    var news_contents_list = $('.news-contents-list-area');
    var news_contents_list_top;

    var news_btn = $('.news-list-btn-area');
    var news_btn_top;


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
        head_text.addClass("entry-SlideUp");

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

    });


    /**
     * スクロールしたときの処理
     * 
     */
    $(window).scroll(function() {

        //--------------
        // メッセージエリア
        //-------------
        company_message_text_title_bar_top = company_message_text_title.offset().top;
        if ($(this).scrollTop() > company_message_text_title_bar_top - 500) company_message_text_title.addClass("entry-SlideUp");

        company_message_title_bar_top = company_message_title_bar.offset().top;
        if ($(this).scrollTop() > company_message_title_bar_top - 500) company_message_title_bar.addClass("entry-SlideUp");

        company_message_text_top = company_message_text.offset().top;
        if ($(this).scrollTop() > company_message_text_top - 500) company_message_text.addClass("entry-SlideUp");

        company_message_slider_top = company_message_slider.offset().top;
        if ($(this).scrollTop() > company_message_slider_top - 500) company_message_slider.addClass("entry-SlideUp");

        company_message_list_btn_top = company_message_list_btn.offset().top;
        if ($(this).scrollTop() > company_message_list_btn_top - 500) company_message_list_btn.addClass("entry-SlideUp");

        //--------------
        // aboutエリア
        //-------------
        about_company_title_top = about_company_title.offset().top;
        if ($(this).scrollTop() > about_company_title_top - 500) about_company_title.addClass("entry-SlideUp");

        about_company_title_bar_top = about_company_title_bar.offset().top;
        if ($(this).scrollTop() > about_company_title_bar_top - 500) about_company_title_bar.addClass("entry-SlideUp");

        company_strength_img_1_top = company_strength_img_1.offset().top;
        if ($(this).scrollTop() > company_strength_img_1_top - 500) company_strength_img_1.addClass("entry-LeftToRight");

        company_strength_title_1_top = company_strength_title_1.offset().top;
        if ($(this).scrollTop() > company_strength_title_1_top - 500) company_strength_title_1.addClass("entry-RightToLeft");

        company_strength_text_1_top = company_strength_text_1.offset().top;
        if ($(this).scrollTop() > company_strength_text_1_top - 500) company_strength_text_1.addClass("entry-SlideUp");

        company_strength_img_2_top = company_strength_img_2.offset().top;
        if ($(this).scrollTop() > company_strength_img_2_top - 500) company_strength_img_2.addClass("entry-RightToLeft");

        company_strength_title_2_top = company_strength_title_2.offset().top;
        if ($(this).scrollTop() > company_strength_title_2_top - 500) company_strength_title_2.addClass("entry-LeftToRight");

        company_strength_text_2_top = company_strength_text_2.offset().top;
        if ($(this).scrollTop() > company_strength_text_2_top - 500) company_strength_text_2.addClass("entry-SlideUp");

        company_strength_img_3_top = company_strength_img_3.offset().top;
        if ($(this).scrollTop() > company_strength_img_3_top - 500) company_strength_img_3.addClass("entry-LeftToRight");

        company_strength_title_3_top = company_strength_title_3.offset().top;
        if ($(this).scrollTop() > company_strength_title_3_top - 500) company_strength_title_3.addClass("entry-RightToLeft");

        company_strength_text_3_top = company_strength_text_3.offset().top;
        if ($(this).scrollTop() > company_strength_text_3_top - 500) company_strength_text_3.addClass("entry-SlideUp");


        //--------------
        // 歴史
        //-------------
        history_title_top = history_title.offset().top;
        if ($(this).scrollTop() > history_title_top - 500) history_title.addClass("entry-SlideUp");

        history_text_top = history_text.offset().top;
        if ($(this).scrollTop() > history_text_top - 500) history_text.addClass("entry-SlideUp");

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
        // お知らせエリア
        //-------------
        news_title_top = news_title.offset().top;
        if ($(this).scrollTop() > news_title_top - 500) news_title.addClass("entry-SlideUp");

        news_contents_list_top = news_contents_list.offset().top;
        if ($(this).scrollTop() > news_contents_list_top - 500) news_contents_list.addClass("entry-SlideUp");

        news_btn_top = news_btn.offset().top;
        if ($(this).scrollTop() > news_btn_top - 500) news_btn.addClass("entry-SlideUp");





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