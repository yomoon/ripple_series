//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 1.0 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字
//主要功能5 : 使用DOM方法，依照語系更換對應的Image

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======
function chg_lang(lang_index){

        forceChangeLangSetCookie();
        auto_chg_lang(lang_index);
}



// 切換語系
function auto_chg_lang(lang_index){

      //寫入Cookie
      setCookie('lang_code',lang_index,'365');
      var xck= getCookie('lang_code');
			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);
      //根據語系更改圖片
      changeImageByLang(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();





		}



    // 設定cookie 並將 forceChangeLang_index 值填上1,cookie一小時後失效
    function   forceChangeLangSetCookie(){
      //寫入Cookie
      setCookie('forceChangeLang_index',1,'0.1');
      var xcka= getCookie('forceChangeLang_index');

    }

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}


// 根據lang_index更換IMG標籤圖片

function changeImageByLang(lang_index){

  // 圖片路徑 請自行更換，不夠用也可以自己新增
  console.log("change image function start now");
  var tw_img1_src="images/ripple/slide_tw_1.png";
  var eng_img1_src="images/ripple/slide_en_1.png";
  var jp_img1_src="images/slider_temp_1.jpg";

  var tw_img2_src="images/ripple/slide_tw_2.png";
  var eng_img2_src="images/ripple/slide_en_2.png";
  var jp_img2_src="images/slider_example_2_jp.jpg";

  var tw_img3_src="images/slider_example_3_tw.jpg";
  var eng_img3_src="images/slider_example_3_eng.jpg";
  var jp_img3_src="images/slider_example_3_jp.jpg";

  switch (lang_index) {
    case 0:
        document.getElementById('slideshowImage1Word').src=tw_img1_src;
        document.getElementById('slideshowImage2Word').src=tw_img2_src;
        console.log("change image to CHT version");
      break;
    case 1:
        document.getElementById('slideshowImage1Word').src=eng_img1_src;
        document.getElementById('slideshowImage2Word').src=eng_img2_src;
        console.log("change image to ENG version");
      break;
    case 2:
        document.getElementById('slideshowImage1Word').src=jp_img1_src;
        document.getElementById('slideshowImage2Word').src=jp_img2_src;
        console.log("change image to JP version");
      break;
    default:

  }

return;

}





// 根據語系更改所有文字
function changeAllNavBarUIWording(arr,lang_index){

  document.getElementById('lang_title').innerHTML = arr[lang_index].lang_title;
  document.getElementById('lang_navlink1').innerHTML = arr[lang_index].lang_navlink1;
  document.getElementById('lang_navlink2').innerHTML = arr[lang_index].lang_navlink2;
  document.getElementById('lang_navlink3').innerHTML = arr[lang_index].lang_navlink3;
  document.getElementById('lang_navlink4').innerHTML = arr[lang_index].lang_navlink4;
  document.getElementById('lang_navlink5').innerHTML = arr[lang_index].lang_navlink5;
  document.getElementById('lang_navlink6').innerHTML = arr[lang_index].lang_navlink6;
  document.getElementById('lang_navlink7').innerHTML = arr[lang_index].lang_navlink7;
  document.getElementById('lang_navlink8').innerHTML = arr[lang_index].lang_navlink8;
  document.getElementById('lang_navlink9').innerHTML = arr[lang_index].lang_navlink9;
  document.getElementById('lang_navlink10').innerHTML = arr[lang_index].lang_navlink10;
  document.getElementById('lang_navlink11').innerHTML = arr[lang_index].lang_navlink11;
  document.getElementById('lang_navlink12').innerHTML = arr[lang_index].lang_navlink12;

  document.getElementById('lang_navcht').innerHTML = arr[lang_index].lang_navcht;
  document.getElementById('lang_naveng').innerHTML = arr[lang_index].lang_naveng;
//  document.getElementById('lang_navjp').innerHTML = arr[lang_index].lang_navjp;

  document.getElementById('lang_navshop').innerHTML = arr[lang_index].lang_navshop;
  //document.getElementById('lang_smarthomeseries').innerHTML = arr[lang_index].lang_smarthomeseries;
  //document.getElementById('lang_smarthomeseries_cont').innerHTML = arr[lang_index].lang_smarthomeseries_cont;
  document.getElementById('lang_ripple_icon_cont').innerHTML = arr[lang_index].lang_ripple_icon_cont;
  document.getElementById('lang_nowireinstall_cont').innerHTML = arr[lang_index].lang_nowireinstall_cont;
  document.getElementById('lang_btsmart_cont').innerHTML = arr[lang_index].lang_btsmart_cont;
  document.getElementById('lang_control_cont').innerHTML = arr[lang_index].lang_control_cont;
  document.getElementById('lang_products').innerHTML = arr[lang_index].lang_products;
  document.getElementById('lang_products_cont').innerHTML = arr[lang_index].lang_products_cont;
  document.getElementById('lang_central').innerHTML = arr[lang_index].lang_central;
  document.getElementById('lang_central_cont').innerHTML = arr[lang_index].lang_central_cont;
  document.getElementById('lang_door').innerHTML = arr[lang_index].lang_door;
  document.getElementById('lang_door_cont').innerHTML = arr[lang_index].lang_door_cont;
  document.getElementById('lang_light').innerHTML = arr[lang_index].lang_light;
  document.getElementById('lang_light_cont').innerHTML = arr[lang_index].lang_light_cont;
  document.getElementById('lang_motion').innerHTML = arr[lang_index].lang_motion;
  document.getElementById('lang_motion_cont').innerHTML = arr[lang_index].lang_motion_cont;
  document.getElementById('lang_plug').innerHTML = arr[lang_index].lang_plug;
  document.getElementById('lang_plug_cont').innerHTML = arr[lang_index].lang_plug_cont;
  document.getElementById('lang_shock').innerHTML = arr[lang_index].lang_shock;
  document.getElementById('lang_shock_cont').innerHTML = arr[lang_index].lang_shock_cont;
  document.getElementById('lang_smoke').innerHTML = arr[lang_index].lang_smoke;
  document.getElementById('lang_smoke_cont').innerHTML = arr[lang_index].lang_smoke_cont;
  document.getElementById('lang_weather').innerHTML = arr[lang_index].lang_weather;
  document.getElementById('lang_weather_cont').innerHTML = arr[lang_index].lang_weather_cont;
  document.getElementById('lang_Scenario').innerHTML = arr[lang_index].lang_Scenario;
  document.getElementById('lang_Scenario_cont').innerHTML = arr[lang_index].lang_Scenario_cont;
  document.getElementById('lang_morning').innerHTML = arr[lang_index].lang_morning;
  document.getElementById('lang_morning_cont').innerHTML = arr[lang_index].lang_morning_cont;
  document.getElementById('lang_ripple_plug_aready').innerHTML = arr[lang_index].lang_ripple_plug_aready;
  document.getElementById('lang_Leave').innerHTML = arr[lang_index].lang_Leave;
  document.getElementById('lang_Leave_detail_cont').innerHTML = arr[lang_index].lang_Leave_detail_cont;
  document.getElementById('lang_shock_detail_cont').innerHTML = arr[lang_index].lang_shock_detail_cont;
  document.getElementById('lang_smock_detail_cont').innerHTML = arr[lang_index].lang_smock_detail_cont;
  document.getElementById('lang_home').innerHTML = arr[lang_index].lang_home;
  document.getElementById('lang_door_detial_cont1').innerHTML = arr[lang_index].lang_door_detial_cont1;
  document.getElementById('lang_Leave').innerHTML = arr[lang_index].lang_Leave;
  document.getElementById('lang_door_detial_cont2').innerHTML = arr[lang_index].lang_door_detial_cont2;
  document.getElementById('lang_Leave').innerHTML = arr[lang_index].lang_Leave;
  document.getElementById('lang_goodnight').innerHTML = arr[lang_index].lang_goodnight;
  document.getElementById('lang_goodnight_cont1').innerHTML = arr[lang_index].lang_goodnight_cont1;
  document.getElementById('lang_goodnight_cont2').innerHTML = arr[lang_index].lang_goodnight_cont2;
  document.getElementById('lang_app_tl').innerHTML = arr[lang_index].lang_app_tl;
  document.getElementById('lang_app_cont').innerHTML = arr[lang_index].lang_app_cont;



  return;
}






function detectUserLang(){

    var IsforceChangeLang_index= getCookie('forceChangeLang_index');
    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();

  if (IsforceChangeLang_index!=1){
    switch (currentBrowserLang) {
      case "zh-tw":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-cn":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-hk":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "ja":
            auto_chg_lang(1);
            autolang_index=1;
        break;

      default:
            auto_chg_lang(1);
            autolang_index=1;
        break;
    }

    setCookie('lang_code',autolang_index,'365');

  } else {
    var Previous_Lang_index= getCookie('lang_code');
    auto_chg_lang(Previous_Lang_index);
  }
}


//設定cookie的function
function setCookie(cookieName, cookieValue, exdays) {
  if (document.cookie.indexOf(cookieName) >= 0) {
    var expD = new Date();
    expD.setTime(expD.getTime() + (-1*24*60*60*1000));
    var uexpires = "expires="+expD.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + uexpires+"; "+ 'path=/';
  }
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires+"; "+ 'path=/';
}

// 讀取cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}



//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - Ripple系列產品網站";
Multi_Lang_Title[1]="Welcome to EQL - Ripple Series";
Multi_Lang_Title[2]="EQLへようこそ - Ripple Series";


//=====文字儲存區 END======
