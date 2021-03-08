/**
 * 
 * 水長企業概要 js
 * 
 * ********************
 * 2020-06-11 新規作成
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
    // 理念エリア
    //-------------
    var company_philosophy_title = $('.company-philosophy-title-area');
    var company_philosophy_title_top;

    var company_philosophy_message_title = $('.company-philosophy-message-title-area');
    var company_philosophy_message_title_top;

    var company_philosophy_message = $('.company-philosophy-message');
    var company_philosophy_message_top;

    var company_year = $('.company-year-area');
    var company_year_top;

    //--------------
    // 沿革エリア
    //-------------
    var company_history_title = $('.company-history-title-area');
    var company_history_title_top;

    //--------------
    // 沿革エリア1
    //-------------
    var company_history1_text_title = $('#company-history-1 .company-history-text-title-area');
    var company_history1_text_title_top;

    var company_history1_text = $('#company-history-1 .company-history-text');
    var company_history1_text_top;

    var company_history1_text_img_title = $('#company-history-1 .company-history-text-img-title');
    var company_history1_text_img_title_top;

    var company_history1_text_img = $('#company-history-1 .company-history-text-img');
    var company_history1_text_img_top;

    //--------------
    // 沿革エリア2
    //-------------
    var company_history2_text_title = $('#company-history-2 .company-history-text-title-area');
    var company_history2_text_title_top;

    var company_history2_text = $('#company-history-2 .company-history-text');
    var company_history2_text_top;

    var company_history2_text_img_title = $('#company-history-2 .company-history-text-img-title');
    var company_history2_text_img_title_top;

    var company_history2_text_img = $('#company-history-2 .company-history-text-img');
    var company_history2_text_img_top;

    //--------------
    // 沿革エリア3
    //-------------
    var company_history3_text_title = $('#company-history-3 .company-history-text-title-area');
    var company_history3_text_title_top;

    var company_history3_text = $('#company-history-3 .company-history-text');
    var company_history3_text_top;

    var company_history3_text_img_title = $('#company-history-3 .company-history-text-img-title');
    var company_history3_text_img_title_top;

    var company_history3_text_img = $('#company-history-3 .company-history-text-img');
    var company_history3_text_img_top;

    //--------------
    // 沿革エリア4
    //-------------
    var company_history4_text_title = $('#company-history-4 .company-history-text-title-area');
    var company_history4_text_title_top;

    var company_history4_text = $('#company-history-4 .company-history-text');
    var company_history4_text_top;

    var company_history4_text_img_title = $('#company-history-4 .company-history-text-img-title');
    var company_history4_text_img_title_top;

    var company_history4_text_img = $('#company-history-4 .company-history-text-img');
    var company_history4_text_img_top;


    //--------------
    // 企業情報エリア
    //-------------
    var company_name = $('.company-name-area');
    var company_name_top;

    var company_info_table = $('.company-info-table');
    var company_info_table_top;

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
        head_text_pc.addClass("entry-SlideUp");
        head_text_sp.addClass("entry-SlideUp");

    });


    /**
     * スクロールしたときの処理
     * 
     */
    $(window).scroll(function() {

        //--------------
        // 理念エリア
        //-------------
        company_philosophy_title_top = company_philosophy_title.offset().top;
        if ($(this).scrollTop() > company_philosophy_title_top - 500) company_philosophy_title.addClass("entry-SlideUp");

        company_philosophy_message_title_top = company_philosophy_message_title.offset().top;
        if ($(this).scrollTop() > company_philosophy_message_title_top - 500) company_philosophy_message_title.addClass("entry-LeftToRight");

        company_philosophy_message_top = company_philosophy_message.offset().top;
        if ($(this).scrollTop() > company_philosophy_message_top - 500) company_philosophy_message.addClass("entry-LeftToRight");

        company_year_top = company_year.offset().top;
        if ($(this).scrollTop() > company_year_top - 500) company_year.addClass("entry-LeftToRight");

        //--------------
        // 沿革エリア
        //-------------
        company_history_title_top = company_history_title.offset().top;
        if ($(this).scrollTop() > company_history_title_top - 500) company_history_title.addClass("entry-SlideUp");

        //--------------
        // 沿革エリア1
        //-------------
        company_history1_text_title_top = company_history1_text_title.offset().top;
        if ($(this).scrollTop() > company_history1_text_title_top - 500) company_history1_text_title.addClass("entry-RightToLeft");

        company_history1_text_top = company_history1_text.offset().top;
        if ($(this).scrollTop() > company_history1_text_top - 500) company_history1_text.addClass("entry-RightToLeft");

        company_history1_text_img_title_top = company_history1_text_img_title.offset().top;
        if ($(this).scrollTop() > company_history1_text_img_title_top - 500) company_history1_text_img_title.addClass("entry-RightToLeft");

        company_history1_text_img_top = company_history1_text_img.offset().top;
        if ($(this).scrollTop() > company_history1_text_img_top - 500) company_history1_text_img.addClass("entry-RightToLeft");

        //--------------
        // 沿革エリア2
        //-------------
        company_history2_text_title_top = company_history2_text_title.offset().top;
        if ($(this).scrollTop() > company_history2_text_title_top - 500) company_history2_text_title.addClass("entry-LeftToRight");

        company_history2_text_top = company_history2_text.offset().top;
        if ($(this).scrollTop() > company_history2_text_top - 500) company_history2_text.addClass("entry-LeftToRight");

        company_history2_text_img_title_top = company_history2_text_img_title.offset().top;
        if ($(this).scrollTop() > company_history2_text_img_title_top - 500) company_history2_text_img_title.addClass("entry-LeftToRight");

        company_history2_text_img_top = company_history2_text_img.offset().top;
        if ($(this).scrollTop() > company_history2_text_img_top - 500) company_history2_text_img.addClass("entry-LeftToRight");

        //--------------
        // 沿革エリア3
        //-------------
        company_history3_text_title_top = company_history3_text_title.offset().top;
        if ($(this).scrollTop() > company_history3_text_title_top - 500) company_history3_text_title.addClass("entry-RightToLeft");

        company_history3_text_top = company_history3_text.offset().top;
        if ($(this).scrollTop() > company_history3_text_top - 500) company_history3_text.addClass("entry-RightToLeft");

        company_history3_text_img_title_top = company_history3_text_img_title.offset().top;
        if ($(this).scrollTop() > company_history3_text_img_title_top - 500) company_history3_text_img_title.addClass("entry-RightToLeft");

        company_history3_text_img_top = company_history3_text_img.offset().top;
        if ($(this).scrollTop() > company_history3_text_img_top - 500) company_history3_text_img.addClass("entry-RightToLeft");

        //--------------
        // 沿革エリア4
        //-------------
        company_history4_text_title_top = company_history4_text_title.offset().top;
        if ($(this).scrollTop() > company_history4_text_title_top - 500) company_history4_text_title.addClass("entry-LeftToRight");

        company_history4_text_top = company_history4_text.offset().top;
        if ($(this).scrollTop() > company_history4_text_top - 500) company_history4_text.addClass("entry-LeftToRight");

        company_history4_text_img_title_top = company_history4_text_img_title.offset().top;
        if ($(this).scrollTop() > company_history4_text_img_title_top - 500) company_history4_text_img_title.addClass("entry-LeftToRight");

        company_history4_text_img_top = company_history4_text_img.offset().top;
        if ($(this).scrollTop() > company_history4_text_img_top - 500) company_history4_text_img.addClass("entry-LeftToRight");

        //--------------
        // 企業情報エリア
        //-------------
        company_name_top = company_name.offset().top;
        if ($(this).scrollTop() > company_name_top - 500) company_name.addClass("entry-SlideUp");

        company_info_table_top = company_info_table.offset().top;
        if ($(this).scrollTop() > company_info_table_top - 500) company_info_table.addClass("entry-SlideUp");

        //--------------
        // 問い合わせエリア
        //-------------
        inquiry_title_top = inquiry_title.offset().top;
        if ($(this).scrollTop() > inquiry_title_top - 500) inquiry_title.addClass("entry-SlideUp");

        inquiry_text_top = inquiry_text.offset().top;
        if ($(this).scrollTop() > inquiry_text_top - 500) inquiry_text.addClass("entry-SlideUp");

        //inquiry_text_top = inquiry_link_btn.offset().top;
        if ($(this).scrollTop() > inquiry_text_top - 500) inquiry_link_btn.addClass("entry-LeftToRight");

        //inquiry_text_top = tel_link_btn.offset().top;
        if ($(this).scrollTop() > inquiry_text_top - 500) tel_link_btn.addClass("entry-RightToLeft");


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