$(function() {
    var testText = "textText";
    if (location.hash.match(/ag=\d/)) {
        $('.detail').fadeOut(1);
        loading();
    }
    // location.hash = "inv=0f4151692ee234781654e4e322d74310f7918825v=33";

    // 判断当前页的邀请人是否存在
    if (location.hash.match(/inv=[0-9a-z]{40}/) || location.search.match(/inv=[0-9a-z]{40}/)) {
        var fm = $('form').get(0);
        // console.log(location.hash.substr(location.hash.indexOf('inv') + 4, 40));
        /*$.ajax({
            url: 'check_inviter.php',
            type: 'POST',
            data: {
                'inviter_uniqid': location.hash.substr(location.hash.indexOf('inv') + 4, 40) || location.search.substr(location.search.indexOf('inv') + 4, 40)
            },
            success: function(response) {
                // console.log(response)
                var fm = $('form').get(0);
                if (response) {
                    fm.inviter_uniqid.value = response;
                } else {
                    fm.inviter_uniqid.value = '';
                }
            },
            error: function() {
                console.log('check_inviter_uniqid error');
            }
        })*/
        // console.log(location.hash.substr(location.hash.indexOf('inv') + 4, 40) || location.search.substr(location.search.indexOf('inv') + 4, 40))
        fm.inviter_uniqid.value = location.hash.substr(location.hash.indexOf('inv') + 4, 40) || location.search.substr(location.search.indexOf('inv') + 4, 40);
    }
    if (check_session()) {
        location.hash = "inv=" + localStorage.uniqid;
    }

    // 如果是PC 重置面板位置
    var ua = navigator.userAgent.toString();

    function isMobile() {
        return /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile/i.test(ua)
    };

    if (isMobile()) {
        $('.phone_panel').css({
            'width': window.innerWidth,
            'height': window.innerHeight,
        })
    } else {
        $('.phone_panel').css({
            'width': '414px',
            'height': '736px',
            'margin': '0 auto',
            // 'overflow-y': 'scroll',
            'overflow-x': 'hidden'
        })
    };


    // 如果不是微信打开，则显示游戏地址二维码
    // 浏览器筛选
    if (!/MicroMessenger/i.test(ua)) {
        $('.wechat').css('display', 'block')
        return false;
    };

    $('.detail').on('click', '.detail_game', function() {
        $('.detail').fadeOut(50);
        loading();
    });
    $('.detail').on('click', '.detail_search', function() {
        // $('.detail').fadeOut(50);
        $('.search').fadeIn(1);
        setTimeout(open_search, 500);
    });
    $('.detail').on('click', '.detail_ranking', function() {
        // $('.detail').fadeOut(50);
        $('.ranking').fadeIn(1);
    });

    $('.search_btn').on('click', function() {
        search_info();
    });
    $('.game_again').click(function() {
        location.href = 'index.php?v=' + parseInt(Math.random() * 100000) + '#ag=1';
    })

    function loading() {
        // loading页图片全部加载完再显示
        var loadingImg = $('.loading img'),
            loadingImgCount = loadingImg.length,
            loadCount = 0,
            wechatImg = $('.wechat img');

        loadingImg.each(function(index, value) {
            var newImg = document.createElement('img');
            newImg.src = $(value).attr('data-img');
            newImg.onload = function() {
                value.src = newImg.src
            };
            loadCount++;
            if (loadCount == loadingImgCount) {
                // console.log('开始加载真正的js')
                $.getScript('scripts/main.js?v=' + Math.random() * 1000).done(function() {
                    console.log('main.js加载完成');
                });
            }
        });
    }

    function check_session() {
        if (localStorage.uniqid) {
            return true;
        } else {
            return false;
        }
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
        // 初始化查询结果

        $('.search_result').removeClass('show');


        var mobile = $('.search .mobile').get(0);
        // 检查手机号码位数
        var mobileText = mobile.value.trim();
        if (mobileText.length < 1) {
            mobile.focus();
            $('.search .error').text("手机号码不能为空").stop(true, true).fadeIn(1);
            return false;
        }
        if (!(/^1\d{10}$/.test(mobileText))) {
            mobile.focus();
            $('.search .error').text("手机号码格式不对").stop(true, true).fadeIn(1);
            return false;
        }

        $('.search .error').fadeOut(1);
        // console.log(mobileText)
        $('.search .invite_url').html("");
        $('.search .inviter').html("");
        $(this).get(0).disable = "";
        $('.search_loading').addClass('show');


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

})
