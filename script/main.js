// JavaScript Document

$(document).ready(function(e) {


    /****** ToolTip 觸發 ******/
    $("[data-toggle='tooltip']").tooltip();


    /****** 弹出框功能初始化 ******/
    $(function() {
        $('[data-toggle="popover"]').popover();
    });



    /****** 錨點滑動 ******/
    $("#toBankBlock").click(function(e) {
        $("html,body").animate({
            scrollTop: $("#BankBlock").offset().top
        }, 800);
        return false;
    });


    $("#toCreditBlock").click(function(e) {
        $("html,body").animate({
            scrollTop: $("#CreditBlock").offset().top
        }, 800);
        return false;
    });




    /****** 置頂部按鈕偵測 *******/
    $("#BACKTO_TOP").click(function() {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 600);

        return false;
    });
    //超過某高度範圍顯示按鈕
    $(document).scroll(function() {
        var _jumpOutHeight = 500;
        //取得目前捲動的高度
        var height = $(document).scrollTop();
        if (height > _jumpOutHeight && $("#BACKTO_TOP").css("display") == "none") {
            $("#BACKTO_TOP").fadeIn();
        } else if (height < _jumpOutHeight && $("#BACKTO_TOP").css("display") == "block") {
            $("#BACKTO_TOP").fadeOut();
        }
    });




    /*********** sort icon設定 ***********/

    /*-----搜尋結果用-----*/
    $(".result_table button.sort_change").click(function(e) {
        var sort_status = $(this).val();
        if (sort_status == 0) {
            $(".result_table button.sort_change").removeClass("sorting_asc");
            $(".result_table button.sort_change").removeClass("sorting_desc");
            $(".result_table button.sort_change").val(0);
            $(this).addClass("sorting_asc");
            $(this).val(1);
        } else if (sort_status == 1) {
            $(this).removeClass("sorting_asc");
            $(this).addClass("sorting_desc");
            $(this).val(2);
        } else if (sort_status == 2) {
            $(this).addClass("sorting_asc");
            $(this).removeClass("sorting_desc");
            $(this).val(1);
        }

    });




    /************ 開/關批次處理功能區塊 ************/
    $(".list_table .check_item").change(function(e) {
        if (this.checked) {
            $(".list_table .function_block").fadeIn(50);
        } else {
            $(".list_table .function_block").fadeOut(50);

        }
    });









    /****** 編輯表單 - 更多欄位 顯示/隱藏 *******/
    $(".show_field").click(function() {

        var block_status = $(this).siblings(".other_field").css("display");
        var control_block = $(this).siblings(".other_field");

        if (block_status == "none") {
            $(control_block).slideDown();
            $(this).text("隱藏更多欄位");
        } else {
            $(control_block).slideUp();
            $(this).text("顯示更多欄位");
        }
    });



    /************ 關閉提示訊息 ************/
    $(".remove_notice").click(function(e) {
        $(this).parents(".notice_box").fadeOut(200);
    });







    /************ 搜尋專案的成員DEMO ************/
    $(".project_item_list button").click(function(e) {
        $(".no_result").hide();
        $(".project_item_list .list_table .table_head").fadeIn();
        $(".project_item_list .list_table .table_body").fadeIn();
        $(".project_item_list .list_bottom").fadeIn();
    });






    


});


/****** datepicker setting *******/
$.datepicker.regional['zh-TW'] = {
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    prevText: "上月",
    nextText: "次月",
    weekHeader: "週"
};
//將預設語系設定為中文
$.datepicker.setDefaults($.datepicker.regional["zh-TW"]);

$(function() {
    $(".birthday").datepicker({
        maxDate: '0',
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd'
    });
    $("#StartDate1").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        onClose: function(selectedDate) {
            $("#ToDate").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#EndDate1").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        onClose: function(selectedDate) {
            $("#FromDate").datepicker("option", "maxDate", selectedDate);
        }
    });
});