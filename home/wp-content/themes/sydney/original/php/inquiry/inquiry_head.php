<?php

/**
 * 
 * 問合せヘッド inquiry_head.php
 * 
 * ********************
 * 2020-05-24 新規作成
 * 
 * *********************
 */

?>

<section class='inquiry-head-section'>

    <div class='inquiry-title-area'>
        お問い合わせ
    </div>
    <div class="sea-object-ara" id="sea-object-1">
        <img src='https://mizucho.com/home/wp-content/uploads/2020/05/sea_object.png'>
    </div>

    <div class='inquiry-text-area'>
        <img src='https://danya.co.jp/home/wp-content/uploads/2020/04/inquiry_head_text-.png'>
    </div>
    <div class="sea-object-ara" id="sea-object-2">
        <img src='https://mizucho.com/home/wp-content/uploads/2020/05/sea_object.png'>
    </div>

</section>

<style>
    .entry-content {
        background: url(https://mizucho.com/home/wp-content/uploads/2020/05/mizucho_bg_creme.png);
        background-size: 100% 100%;
        width: 100%;
    }

    .inquiry-head-section {
        width: 100%;
        display: inline-block;
        text-align: center;
        padding-top: 100px;
        position: relative;
        padding: 100px 0px 20px;
        max-width: 800px;
    }

    .inquiry-head-section .inquiry-title-area {
        text-align: center;
        line-height: 2.0;
        font-size: 40px;
        font-weight: 1000;
        color: #171c61;
    }

    .inquiry-head-section .inquiry-text-area {
        text-align: center;
        max-width: 500px;
        margin: auto;
        padding: 50px 0px;
    }

    .inquiry-head-section .inquiry-text-area img {
        width: 60%;
        margin: auto;
        padding: 25px 0px;
    }

    .sea-object-ara {
        position: absolute;
        width: 300px;
    }

    #sea-object-1 {
        top: 10%;
        left: 2%;
    }

    #sea-object-2 {
        bottom: 0;
        right: 2%;
    }

    @media (max-width: 800px) {
        .inquiry-head-section .inquiry-title-area {
            font-size: 25px;
            padding: 30px 0px 10px;
        }

        .inquiry-head-section {
            padding-top: 0px;
            padding-bottom: 20px;
        }

        .inquiry-head-section .inquiry-text-area {
            padding: 0px;
        }
    }

    @media (max-width: 800px) {

        .sea-object-ara {
            position: absolute;
            width: 100px;
        }

    }


    #inquiry-area {
        text-align: center;
        padding: 30px 0px !important;
        width: 90%;
        max-width: 800px;
        margin: auto;
    }

    .inquiry-form-table {
        display: inline-table;
        border: 1px solid #b6b6b6 !important;
    }

    .inquiry-form-table th {
        padding: 20px;
        background-color: #a5c0cc;
        color: black;
        text-align: left;
        line-height: 1.0;
        opacity: 0.8;
        font-size: 18px;
        border: none;
    }

    .inquiry-form-table td {
        padding: 10px;
        background-color: rgb(235, 235, 235);
        text-align: center;
        opacity: 0.8;
        border: none;
    }

    .inquiry-form-table td select,
    .inquiry-form-table td textarea,
    .inquiry-form-table td input {
        width: 100%;
        text-align: left;
        max-width: unset !important;
        padding: 5px;
    }

    .form-submit-btn-area {
        width: 100%;
        text-align: center;
        padding: 40px 0;
    }

    .form-submit-btn-area input {
        width: 70%;
        margin: auto;
        background-color: #a5c0cc;
        border: none;
        color: black;
        font-size: 18px;
        border-radius: 0px;
        box-shadow: 2px 2px 4px #7b7b7b;
        padding: 15px 0px;
    }

    @media (max-width: 480px) {
        .inquiry-form-table th {
            font-size: 14px;
        }

        .form-submit-btn-area input {
            padding: 0px;
        }
    }
</style>