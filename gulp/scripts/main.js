/*-------------------------准备素材  开始-------------------------*/
var player_uniqid;
// 默认图片
var imgPlace = [
    'images/start1.png',
    'images/grave1.png',
    'images/grave21.png',
    'images/grave3.png',
    'images/grave4.png',
    'images/success.png'
];

// 遍历加载默认图片
$.each(imgPlace, function(index, value) {
    var img = document.createElement('img'),
        _this = $('.page').eq(index);
    img.src = value;
    var imgSrc = "url('" + img.src + "')";
    img.onload = function() {
        _check_percent();
        _this.css({
            'background-image': imgSrc
        })
    }
});

// 准备替换的图片
var imgNew = [
    'images/start2.png',
    'images/grave2_box_open.png',
    'images/grave3_button_down.png',
    'images/grave3_box_open1.png',
    'images/grave3_box_open2.png',
    'images/result_bg.png'
];

// 道具图片
var imgProp = [
    'images/stone_sm.png',
    'images/stamp1_sm.png',
    'images/stamp2_sm.png',
    'images/stamp3_sm.png',
    'images/grave3_box0_sm.png',
    'images/grave3_box1_sm.png',
    'images/grave3_box2_sm.png',
    'images/key_sm.png',

    'images/stone.png',
    'images/stone_box.png',
    'images/grave1_map.png',
    'images/grave2_box.png',
    'images/grave3_map.png',
    'images/grave3_box.png',
    'images/grave3_box1.png',
    'images/grave3_box2.png',
    'images/grave3_box3.png',
    'images/grave4_map.png'
];

function loadImg(source) {
    // 遍历加载准备替换的图片
    $.each(source, function(index, value) {
        var img = document.createElement('img');
        img.src = value;
        img.onload = function() {
            _check_percent();
        }
    });
}

loadImg(imgNew);
loadImg(imgProp);





// 加载道具栏背景图片
var prop_img = document.createElement('img');
prop_img.src = "images/prop_bg.png";
prop_img.onload = function() {
    _check_percent();
    // $('.prop').css('background-image', "url('" + prop_img.src + "')")

}

var loaded = 0,
    percent = 0, // 进度条百分比
    imglength = imgPlace.length + imgNew.length + imgProp.length + 1, // 需要加载素材的数量
    progressWidth = $('.progress_bar').width();

// 检查加载进度
function _check_percent() {
    loaded++;
    percent = loaded / imglength;
    // console.log(loaded, percent);
    // document.title = percent;

    $('.percent').stop(true, false).animate({
        'left': progressWidth * percent - progressWidth
    }, 500);
    $('.progress_img>.left').stop(true, false).animate({
        'left': (progressWidth - 52) * percent
    }, 500);
    if (percent == 1) {
        if (!localStorage.rules) {
            $('.rules').delay(1000).fadeIn(1);
        }
        $('.progress').delay(1000).fadeOut(100);
        $('.player').delay(1050).fadeIn(1);
        setTimeout(function() {
            $('.loading .blank').css('height', '5%');
        }, 1000);
    }
}


// 道具栏
var props = {
    'stone': false,
    'stamp1': false,
    'stamp2': false,
    'stamp3': false,
    'key_a': false,
    'key_b': false,
    'button': false,
    'box1': false,
    'box2': false
};


var gifts = [
        { 'type': 0, 'url': 'images/grave3_box.png', 'text': '密盒被打开，里面居然有一只草泥马叼着一张抽奖券！（分享后可以参加游戏抽奖环节）', 'smurl': 'images/grave3_box0_sm.png' },
        { 'type': 1, 'url': 'images/grave3_box1.png', 'text': '恭喜获得一个福袋。快来看看你中了什么大奖？！！(邀请20位好友即可获得)', 'smurl': 'images/grave3_box1_sm.png' },
        { 'type': 2, 'url': 'images/grave3_box2.png', 'text': '恭喜获得Chinajoy2016双休日单日入场券(邀请15位好友即可获得)', 'smurl': 'images/grave3_box2_sm.png' },
        { 'type': 3, 'url': 'images/grave3_box3.png', 'text': '恭喜获得Chinajoy2016工作日单日入场券(邀请15位好友即可获得)', 'smurl': 'images/grave3_box2_sm.png' },
        { 'type': 4, 'url': '', 'text': '' },
    ],
    realGift = gifts[4],
    giftIndex;

/*-------------------------准备素材  结束-------------------------*/





/*-------------------------初始化界面  开始-------------------------*/


// 重置触摸点的top值
var eleBottom = [
    { 'ele': $('.start>.map1'), 'bottom': 1.02, 'height': 0.16 },
    { 'ele': $('.start>.map2'), 'bottom': 0.46, 'height': 0.16 },
    { 'ele': $('.start>.map3'), 'bottom': 0.34, 'height': 0.1 },
    { 'ele': $('.start>.map4'), 'bottom': 0.58, 'height': 0.16 },
    { 'ele': $('.grave1>.box'), 'bottom': 0.48, 'height': 0.1 },
    { 'ele': $('.grave1>.map'), 'bottom': 0.76, 'height': 0.1 },
    { 'ele': $('.grave2>.box'), 'bottom': 0.94, 'height': 0.1 },
    { 'ele': $('.grave2>.kulou'), 'bottom': 0.78, 'height': 0.08 },
    { 'ele': $('.grave3>.box'), 'bottom': 0.78, 'height': 0.1 },
    { 'ele': $('.grave3>.button'), 'bottom': 0.42, 'height': 0.1 },
    { 'ele': $('.grave3>.map'), 'bottom': 0.82, 'height': 0.12 },
    { 'ele': $('.grave4>.map'), 'bottom': 0.64, 'height': 0.64 }
];
$.each(eleBottom, function(index, value) {
    _set_bottom(value.ele, value.bottom, value.height);
});

// 重置触摸点bottom位置
function _set_bottom(ele, bottom, height) {
    $(ele).css({
        'bottom': $('.phone_panel').width() * bottom + 'px',
        'height': $('.phone_panel').width() * height + 'px'
    })
}

// 重置result页面图片
var resultImg = document.createElement('img');
resultImg.src = "images/result_bg.png";
resultImg.onload = function() {
    $('result img').attr('src', resultImg);
    $('.result .content').css({
        'background-image': "url('" + resultImg.src + "')"
    })
}

// var resultImg = document.get


/*-------------------------初始化界面  结束-------------------------*/




/*-------------------------loading页功能  开始-------------------------*/
// 打开游戏规则界面
$('.loading').on('click', '.open_rules', function() {
    $('.rules').fadeIn(1);
});
// 开始游戏

// 游戏规则的关闭按钮
$('.rules').on('click', '.rules_close', function() {
    $('.rules').fadeOut(1);
    localStorage.rules = 1;
});


// 预填写表单

var fm = $('form').get(0);
if (localStorage.playername) {
    // console.log(localStorage.playername, localStorage.mobile, localStorage.qq)
    fm.name.value = localStorage.playername
    fm.mobile.value = localStorage.mobile;
    fm.qq.value = localStorage.qq;
}


/*-------------------------loading页功能  结束-------------------------*/
/*-------------------------玩家信息  开始-------------------------*/
// 输入玩家信息页面的功能
$('.player').on('change', 'input[type=text]', function() {
    $(this).parent('dd').next('dd').find('span').removeClass('show');
})
var resT = false;
$('.player').on('click', '.game_begin', function() {
    if (resT) {
        // console.log('click error');
        return false;
    }
    // resT = true;
    document.getElementById('audio').play();
    $('.controls .ctl_music').addClass('rotate');
    var fm = $('form').get(0);
    if (/[\ \　]/.test(fm.name.value)) {
        $('.player span.name').text("昵称不能包含空格").addClass('show');
        fm.name.focus();
        return false;
    };
    if (fm.name.value.trim() == "") {
        $('.player span.name').text("昵称不能为空").addClass('show');
        fm.name.focus();
        return false;
    };

    if (fm.mobile.value.trim() == "") {
        $('.player span.mobile').text("手机号码是您领取奖品的身份凭证哦~").addClass('show');
        fm.mobile.focus();
        return false;
    }
    if (!(/^1\d{10}$/.test(fm.mobile.value))) {
        $('.player span.mobile').text("手机号码格式不正确").addClass('show');
        fm.mobile.focus();
        return false;
    };

    if (fm.qq.value.trim() == "") {
        $('.player span.qq').text("QQ号码是您领取奖品的身份凭证哦~").addClass('show');
        fm.qq.focus();
        return false;
    };
    if (!(/^\d{5,11}$/.test(fm.qq.value))) {
        $('.player span.qq').text("QQ号码格式不正确").addClass('show');
        fm.qq.focus();
        return false;
    };

    // 保存表单
    localStorage.playername = fm.name.value;
    localStorage.mobile = fm.mobile.value;
    localStorage.qq = fm.qq.value;

    $('.loading').fadeOut(1);
    $('.prop').delay(1000).animate({
        'bottom': 0
    });

    $.ajax({
        url: 'player_info.php',
        type: 'POST',
        // async: false,
        data: {
            'inviter_uniqid': fm.inviter_uniqid.value,
            'name': fm.name.value,
            'mobile': fm.mobile.value,
            'qq': fm.qq.value
        },
        success: function(response, status, xhr) {
            // resT = false;
            // console.log("-------插入新数据状态-----" + response);
            if (response) {
                player_uniqid = response;
                location.hash = "inv=" + response;
                localStorage.uniqid = response;
                setTimeout(function() {
                    getGiftImg(response);
                }, 200);
            }

        }
    });

})

function getGiftImg(player_uniqid) {
    $.ajax({
        url: 'select_gift.php',
        type: 'POST',
        data: {
            'player_uniqid': player_uniqid
        },
        success: function(data) {
            // console.log("奖品类型" + data);
            giftIndex = data;

            /*setTimeout(function() {
                save_gift();
            }, 1000)*/

        }
    })
}

function save_gift() {
    $.ajax({
        url: 'save_gift.php',
        type: 'POST',
        data: {
            'player_uniqid': player_uniqid,
            'type': realGift.type
        },
        success: function(data) {
            // console.log(data);
        }

    });
}
/*-------------------------玩家信息  结束-------------------------*/




// 每个页面的关闭功能
$('.page>.close').click(function() {
    $(this).parent('.page').fadeOut(1);
});

// 打开相应密室
$('.start>.map1').click(function() {
    $('.grave1').fadeIn(1);
});
$('.start>.map2').click(function() {
    $('.grave2').fadeIn(1);
});
$('.start>.map3').click(function() {
    $('.grave3').fadeIn(1);
});
$('.start>.map4').on('click.state1', function() {
    if (props.button) {
        $('.grave4').fadeIn(1);
    } else {
        _tip('这扇门是被锁着的...');
    }
});


// 功能区
$('.controls .ctl_rule').click(function() {
    $('.rules').fadeIn(1);
})
$('.controls .ctl_music').click(function() {
    var music = document.getElementById('audio');
    // console.log(music.volume);
    if (music.volume == 0) {
        music.volume = 1;
        $(this).addClass('rotate');
    } else {
        music.volume = 0;
        $(this).removeClass('rotate');
    }
    // console.log(music.volume);
})



// 密室1-------提示
$('.grave1>.box').click(function() {
    if ($(this).hasClass('opened')) {
        _tip('已经打开过了，去别处看看吧.');
    } else {
        if (props.stone) {
            clearProp('stone');
            showDialog('images/stone_box.png', '密盒被打开，里面有一堆木有用的金币，和一把用途不明的钥匙。', 'key_a');
            $(this).addClass('opened');
        } else {
            _tip('这里好像需要什么东西才能打开');
        }
    }
});
$('.grave1>.map').click(function() {
    if ($(this).hasClass('opened')) {
        // return false;
        _tip('这里好像被取走了什么.');
    } else {
        showDialog('images/grave1_map.png', '墙壁里发现一块玉玦...“A”难道...“嗯，要夸我优秀就直接说嘛！”', 'grave1_map');
        $(this).addClass('opened');
        // $('.grave3').css('background-image', "url('images/grave3_box_open.png')")
    }

});



// 密室2-----宝箱提示
$('.grave2>.box').click(function() {
    if ($(this).hasClass('opened')) {
        _tip('已经打开过了，去别处看看吧.');
    } else {
        if (props.key_a) {
            clearProp('key_a');
            showDialog('images/grave2_box.png', '在密盒里发现了一把用途未明的钥匙，和一块意图不知的玉玦...\"C\"?', 'grave2_box');
            $(this).addClass('opened');
            $('.grave2').css('background-image', "url('images/grave2_box_open.png')")
        } else {
            _tip('箱子是锁着的,需要一把钥匙.');
        }
    }

});
$('.grave2>.kulou').click(function() {
    if ($(this).hasClass('opened')) {
        _tip("这里已经被找过了，去其他地方看看吧");
    } else {
        showDialog('images/stone.png', '找到一块像“板砖”的不明物品...明显应该不是用来拍人的。', 'stone');
        $(this).addClass('opened');
    }

});


// 密室3 ------点击按钮提示，并且切换start图片
$('.grave3>.button').click(function() {
    if (props.box2) {
        $('.grave3').css({
            'background-image': "url('images/grave3_box_open1.png')"
        });
    } else {
        $('.grave3').css({
            'background-image': "url('images/grave3_button_down.png')"
        });
    }

    $('.start').css({
        'background-image': "url('images/start2.png')"
    });
    if (!props.button) {
        _tip('轰隆隆~~，外面有什么东西被打开了，快去看看');
    }

    props.button = true;
})
$('.grave3>.box').click(function() {
    if ($(this).hasClass('opened')) {
        _tip('已经打开过了，去别处看看吧.');
    } else {
        if (props.key_b) {
            clearProp('key_b');
            realGift = gifts[giftIndex];
            // console.log(realGift);

            showDialog(realGift.url, realGift.text, 'grave3_box');

            $(this).addClass('opened');
            if (props.button) {
                $('.grave3').css('background-image', "url('images/grave3_box_open1.png')")
            } else {
                $('.grave3').css('background-image', "url('images/grave3_box_open2.png')")
            }
            props.box2 = true;

        } else {
            _tip('箱子是锁着的,需要一把钥匙.');
        }
    }
});
$('.grave3>.map').click(function() {
    if ($(this).hasClass('opened')) {
        // return false;
        _tip('这里好像被取走了什么.');
    } else {
        showDialog('images/grave3_map.png', '墙壁里发现一块玉玦...“O”...我是不是忽略了什么？', 'grave3_map');
        $(this).addClass('opened');
        // $('.grave3').css('background-image', "url('images/grave3_box_open.png')")
    }

});

$('.grave4>.map').click(function() {
    if (props.stamp1 && props.stamp2 && props.stamp3) {
        // console.log('通关')
        switch (realGift.type) {
            case 0:
                $('.result p.text').text("你还带走了一个秘宝。是一张抽奖券，可以参与“墓室逃生”的最终抽奖活动，好友越多，中奖几率越大哦~~不要忘记关注微信订阅号“CAO次元勾搭T”随时查询邀请详情.");
                break;
            case 1:
                $('.result p.text').text("你还带走了一个秘宝。是一个装满了惊喜的福袋，只要分享给你的20位好基友就能获得它的真实体。努力吧，惊世的宝物等着你去征服。~~不要忘记关注微信订阅号“CAO次元勾搭T”随时查询邀请详情.");
                break;
            case 2:
                $('.result p.text').text("你还带走了一个秘宝。是一张Chinajoy2016一日入场券（时间：16-07-28到16-07-29），只要分享给你的15位好基友就能获得它的真实体。努力吧，惊世的宝物等着你去征服。~~不要忘记关注微信订阅号“CAO次元勾搭T”随时查询邀请详情.");
                break;
            case 3:
                $('.result p.text').text("你还带走了一个秘宝。是一张Chinajoy2016一日入场券（时间：16-07-30到16-07-31），只要分享给你的20位好基友就能获得它的真实体。努力吧，惊世的宝物等着你去征服。~~不要忘记关注微信订阅号“CAO次元勾搭T”随时查询邀请详情.");
                break;
            case 4:
                $('.result p.text').text("好可惜，您错过了奖品，再去试试吧");
                break;
        }
        $('.result').fadeIn(1);
        $.ajax({
            url: 'state_modify.php',
            type: 'POST',
            data: {
                'player_uniqid': player_uniqid
            },
            success: function(data) {
                // console.log(data);
            }
        })
    } else {
        showDialog('images/grave4_map.png', '这个魔法阵上面，好像缺了点什么东西..', 'grave4_map');
    }
    // $('.success').delay(1000).fadeIn(1);
});

// 弹窗的点击事件
$('.dia').on('click', '.dia_close', function() {
    if ($(this).hasClass('stone')) {
        appendProp('images/stone_sm.png', 'stone');
    };
    if ($(this).hasClass('key_a')) {
        appendProp('images/key_sm.png', 'key_a');
    };
    if ($(this).hasClass('grave2_box')) {
        appendProp('images/key_sm.png', 'key_b');
        appendProp('images/stamp1_sm.png', 'stamp1');
    };
    if ($(this).hasClass('grave3_map')) {
        appendProp('images/stamp3_sm.png', 'stamp3');
    };

    if ($(this).hasClass('grave1_map')) {
        appendProp('images/stamp2_sm.png', 'stamp2');
    };
    if ($(this).hasClass('grave3_box')) {
        appendProp(realGift.smurl, 'grave3_box');
        save_gift();

    };
    $(this).removeClass().addClass('dia_close');
    $('.dia').fadeOut(1);
});

// 工具栏的点击事件
$('.prop .main').on('click', '.stone', function() {
    showDialog('images/stone.png', '找到一块像“板砖”的不明物品...明显应该不是用来拍人的。', '');
});
$('.prop .main').on('click', '.key_a,.key_b', function() {
    showDialog('images/stone_box.png', '这是一把一把用途不明的钥匙。', '');
});
$('.prop .main').on('click', '.grave3_box', function() {
    showDialog(realGift.url, realGift.text, '');
});


$('.prop .main').on('click', '.stamp1', function() {
    showDialog('images/grave2_box.png', '一块意图不知的玉玦...\"C\"?', '');
});
$('.prop .main').on('click', '.stamp2', function() {
    showDialog('images/grave1_map.png', '一块意图不知的玉玦...“A”', '');
});
$('.prop .main').on('click', '.stamp3', function() {
    showDialog('images/grave3_map.png', '一块意图不知的玉玦...“O”', '');
});

// 结果页面的跳转链接
$('.result').on('click', '.search_btn', function() {
    $('.search').fadeIn(1);
    open_search();
})




// 触摸提示
function _tip(text) {
    $('.tip').stop(true, true).text(text).fadeIn(1).delay(1000).fadeOut(1);
}


function showDialog(imgUrl, text, className) {
    // console.log(imgUrl);
    $('.dia .content img').get(0).src = "";
    $('.dia .content img').get(0).src = imgUrl;
    $('.dia .text').text(text)
    $('.dia').fadeIn(1);
    $('.dia .dia_close').addClass(className);
}

function clearProp(name) {
    $('.prop .main').find("." + name).remove();
    $('.dia .dia_close').removeClass(name);
    props[name] = false;
    // console.log(props[name]);
}

function appendProp(imgUrl, className) {
    var newImg = document.createElement('img');
    newImg.src = imgUrl;
    newImg.className = className;
    $('.prop .main').append(newImg);
    props[className] = true;
    // console.log
    (props[className])
}

function open_search() {
    // console.log(localStorage.mobile);
    if (localStorage.mobile) {
        // 把session的值放入input，并模拟点击查询按钮
        $('.mobile').val(localStorage.mobile);
        search_info();
    };
}

function search_info() {
    var mobile = $('.search .mobile').get(0);
    // 检查手机号码位数
    var mobileText = mobile.value.trim();
    if (mobileText.length < 1) {
        mobile.focus();
        $('.search .error').text("手机号码不能为空").stop(true, true).addClass("show");
        return false;
    } else {
        $('.search .error').stop(true, true).removeClass("show");
    }
    if (!(/^1\d{10}$/.test(mobileText))) {
        mobile.focus();
        $('.search .error').text("手机号码格式不对").stop(true, true).addClass("show");
        return false;
    } else {
        $('.search .error').stop(true, true).removeClass("show");
    }
    // console.log(mobileText)
    // 初始化查询结果
    $('.search .invite_url').html("");
    $('.search .inviter').html("");
    $(this).get(0).disable = "";
    $('.search_loading').addClass('show');
    $('.search_result').removeClass('show');

    // 查询玩家信息
    $.ajax({
        url: "search_info.php",
        type: "POST",
        data: {
            'mobile': mobileText
        },
        success: function(data) {
            // console.log(data)
            $(this).removeAttr('disabled');
            $('.search_loading').removeClass('show');
            $('.search_result').addClass('show');
            var dataResult = $.parseJSON(data);

            // console.log(dataResult)
            if (dataResult.type == 0) {
                $('.search_result .undefine').addClass('show');
                $('.search_result .defined').removeClass('show');
                $('.search .undefine .turn').removeClass('hide');
                // location.hash = "";
            } else {
                // location.hash = "inv=" + dataResult.uniqid;
                $('.search_result .undefine').removeClass('show');
                $('.search_result .defined').addClass('show');
                $('.search .defined .gift').removeClass('show');
                $('.search .undefine .turn').removeClass('show');
                switch (dataResult.gift) {
                    case 0:
                        $('.search .defined .gift0').addClass('show');
                        $('.search_detail .nums').text("好友越多，中奖几率越大哦~")
                        break;
                    case 1:
                        $('.search .defined .gift1').addClass('show');
                        $('.search_detail .nums').text("20位好友.")
                        break;
                    case 2:
                        $('.search .defined .gift2').addClass('show');
                        $('.search_detail .nums').text("15位好友.")
                        break;
                    case 3:
                        $('.search .defined .gift3').addClass('show');
                        $('.search_detail .nums').text("15位好友.")
                        break;
                };
                // console.log(typeof )
                if (dataResult.inviter < 1) {
                    $('.search .inviter').html("您还没有邀请好友一起玩，快去分享给好友吧~");
                } else {
                    $('.search .inviter').text(dataResult.player)
                }
                $('.search .invite').addClass('show');
                $('.search .invite_url').html("http://eachtec.com/caodim/activity/grave/?inv=" + dataResult.uniqid);

                // if(dataResult.gift > 0 && dataResult.inviter == $('.nums').text()){
                // $('.get_gift').addClass('show');
                // }
            }
        }
    })
}
