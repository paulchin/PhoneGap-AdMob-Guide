window.onload = function() {
  document.addEventListener('deviceready', initApp);
};

function initApp() {
  //--- load side panel into index.html ---
  $.ajax('panel.html')
    .done(function(sidepanel) {
      $('#mypanel').html(sidepanel);
      $('[data-role=panel]').panel();
      $('[data-role=listview]').listview();
    })
    .fail(function() {
      console.log('ajax panel error');
    });
  getHomeContent();

  //--- Admob in ads.js ----
  initAds();
}

function getHomeContent() {
  $.ajax('home.html')
    .done(function(home) {
      $('.ui-content').html(home);
      $('[data-role=listview]').listview();
    })
    .fail(function() {
      console.log('ajax home content error');
    });
}

function loadHomeContent() {
  getHomeContent();

  window.scrollTo(0, 0);
  $('#top-title').html('PhoneGap AdMob');

  //--- admob ---
  showBannerAd();
}

function load1Content() {
  $('.ui-content').load('1.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showInterstitialAd();
}

function load2Content() {
  $('.ui-content').load('2.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showInterstitialAd();
}

function load3Content() {
  $('.ui-content').load('3.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showInterstitialAd();
}

function load4Content() {
  $('.ui-content').load('4.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showInterstitialAd();
}

function load5Content() {
  $('.ui-content').load('5.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showRewardedVideoAd();
}

function load6Content() {
  $('.ui-content').load('6.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showInterstitialAd();
}

function load7Content() {
  $('.ui-content').load('7.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showInterstitialAd();
}

function load8Content() {
  $('.ui-content').load('8.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showInterstitialAd();
}

function load9Content() {
  $('.ui-content').load('9.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showInterstitialAd();
}

function load10Content() {
  $('.ui-content').load('10.html');
  window.scrollTo(0, 0);

  //--- admob ---
  showRewardedVideoAd();
}

function handleOptions() {
  console.log('ok... from handleOptions()');
  loadHomeContent();
}
