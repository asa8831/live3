
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // SPメニュー
  function spMenu() {
    let windowWidth = $(window).width();
    console.log('windowWidth',windowWidth);
    const breakPoint = 767;

    if (windowWidth <= breakPoint) {
      console.log('767以下');
      $('.js-hamburger, .js-drawer-menu a').off('click'); // クリックした際にメニューがフェードインウェードアウトを2回繰り返すのをこれで止める

      $('.js-hamburger, .js-drawer-menu a').on('click', function () {
        console.log('クリックに反応している');
        if ($('.js-hamburger').hasClass('is-open')) {
          // thisだとaタグを押した時に作動しなかったのであえてjs-hamburgerと指定
          $('.js-hamburger').removeClass('is-open');
          $('.js-drawer-menu').fadeOut();
          console.log();
        } else {
          $('.js-hamburger').addClass('is-open');
          $('.js-drawer-menu').fadeIn();
        }
      });

    } else {
      console.log('767より大きい');
      $('.js-hamburger').removeClass('is-open');
      $('.js-drawer-menu').css('display', '');

      // ↓これをいれないとPC-SP-PCとくりかえした後にaタグをクリックすると条件外のクリックイベントが発動するので、一旦入れておく、コードを
      $('.js-hamburger, .js-drawer-menu a').on('click', function () {
        $('.js-hamburger').removeClass('is-open');
      });
    }
  }

  spMenu();

  // リサイズが止まったのみ関数発動
  //https://qiita.com/naozo-se/items/fbff74423ee2b71b3073
  const term = 500;
  // タイマーの受取変数
  let timer = 0;

  window.addEventListener("resize", function () {
    // リサイズしているときは、タイマーをリセットする
    clearTimeout(timer);

    // 指定時間後、一度だけ処理を実行
    timer = setTimeout(function () {
      console.log('timer2', timer);
      // 実際の処理を記載↓↓
      spMenu();

    }, term);
  });

});