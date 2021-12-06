var z;

function jiapan() {
    var zimu = '1234567890abcdefghijklmnopqrstuvwxyz.%';
    var anjian = zimu.split('');
    for (var i = 0; i < 38; i++) {
        if (i == 14) {
            $('#a').append('<span>删除</span>');
            $('span').eq(i).css('width', '70px');
        }
        if (i == 28) {
            $('#a').append('<span>隐藏</span>');
            $('span').eq(29).css('width', '70px');
        }
        if (i == 37) {
            $('#a').append('<span>空格</span>');
            $('span').eq(39).css('width', '245px');
        }
        $('#a').append('<span>' + anjian[i] + '</span>')
    }
}
jiapan();
// 点击确定时
var arr = [];
$('.qued').click(function () {
    if ($('.text').val() == '' || $('.text').val().length == 0) {
        alert("请输入数字");
     } else {
        arr.push($('.text').val())
        $('.textNub').append($('.text').val() + ',');
        $('.text').val('')
    }
    $('span').removeClass('css huxideng')
    $('span').css('border-color', '');
})
// 点击随机时
$('.queds').click(function () {
    $('.chooseOne').html('');
    var arrNum = arr.length;
    var index = parseInt(Math.random() * (arrNum), 10);
    $('.chooseOne').append(arr[index]);
})
// 点击字符时
$('span').click(function () {
    $('span').addClass('css')
    $(this).toggleClass('huxideng').siblings().addClass('css')
    var text = $('.text').val();
    var val = text + this.innerHTML;
    var index = $(this).index();
    if (index == 14) {
        if ($('.text').val() == '' || $('.text').val().length == 0) {
        alert("我已经没拉不要再删啦");
     } 
        // 点击删除时
        $('.text').val(text.substring(0, text.length - 1))
        // $(this).removeClass=('css huxideng')
    } else if (index == 29) {
        // 点击隐藏时
        $('#a').slideUp()
        $('span').addClass('css2');
        $('span').removeClass('css huxideng')
        // $('.text').val('');
    } else if (index == 39) {
        // 点击空格时
        $('.text').val(text + '再点空格我打你嗷')
    } else {
        $('.text').val(val);
    }
    z = index;
    document.onkeydown = function () {
        var Arr = [];
        if (event.keyCode == 37) //左键
            fun_a();
        if (event.keyCode == 38) //上键
            fun_b();
        if (event.keyCode == 39) //右键
            fun_c();
        if (event.keyCode == 40) //下键
            fun_d();
        Arr.push($('span').eq(z).html());
        if (event.keyCode == 13) {
            function fn() {
                if (z == 14) {
                    // 点击删除时
                    var zz = $('.text').val();
                    $('.text').val(zz.substring(0, zz.length - 1))
                    // $(this).removeClass=('css huxideng')
                } else if (z == 29) {
                    // 点击隐藏时
                    $('#a').slideUp()
                    $('span').removeClass('css huxideng')
                    $('span').css('border-color', '');
                    // $('.text').val('');
                } else if (z == 39) {
                    // 点击空格时
                    $('.text').val(val + '再点空格我打你嗷')
                } else {
                    $('.text').val($('.text').val() + Arr);
                }
            }
            fn();
        }
    }
    //左键
    function fun_a() {
        if (z == 0) {
            $('span').eq(z).css('border-color', 'pink');
            $('span').eq(z - 1).css('border-color', 'greenyellow');
        } else {
            $('span').eq(z - 1).css('border-color', 'purple');
            $('span').eq(z).css('border-color', 'greenyellow');
            z = z - 1;
        }
    }
    //上键
    function fun_b() {
        if (z >= 0 && z <= 14) {
            $('span').eq(z).css('border-color', 'purple');
            $('span').eq(z - 15).css('border-color', 'greenyellow');
        } else {
            $('span').eq(z - 15).css('border-color', 'purple');
            $('span').eq(z).css('border-color', 'greenyellow');
            z = z - 15;
        }
    }
    //右键
    function fun_c() {
        if (z >= 40 && z <= 41) {
            $('span').eq(z).css('border-color', 'purple');
            $('span').eq(z + 1).css('border-color', 'greenyellow');
        } else {
            $('span').eq(z + 1).css('border-color', 'purple');
            $('span').eq(z).css('border-color', 'greenyellow');
            z = z + 1;
        }
    }
    //下键
    function fun_d() {
        if (z >= 26 && z <= 41) {
            $('span').eq(z).css('border-color', 'purple');
            $('span').eq(z + 15).css('border-color', 'greenyellow');
        } else {
            $('span').eq(z + 15).css('border-color', 'purple');
            $('span').eq(z).css('border-color', 'greenyellow');
            z = z + 15;
        }
    }
})
// 焦点设置
$('.text').on({
    // 获取焦点显示
    focus: function () {
        $('#a').slideDown()
        $('.text').prop('placeholder', '')
    },
    // 失去焦点显示
    blur: function () {
        $('.text').prop('placeholder', '请输入一组数字')
    }
})