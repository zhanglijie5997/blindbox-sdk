!function(l,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(l="undefined"!=typeof globalThis?globalThis:l||self)["core-file"]=e()}(this,(function(){"use strict";class l{constructor(){this.isInBindBox()}isInBindBox(){window||console.warn("This SDK only works with browsers."),window.blindbox||console.warn("This SDK only suport with bindbox app.")}callNativeCheckPaid(l,e,a){try{window.blindbox.callNativeCheckPaid(JSON.stringify({OrderId:l,OrderType:e}))}catch(l){null==a||a()}}callNativeCloseAndRedirectPage(l,e){try{window.blindbox.callNativeCloseAndRedirectPage(JSON.stringify(l))}catch(l){}}callNativeLoadHeader(l){return new Promise(((e,a)=>{const i=window.blindbox.callNativeLoadHeader();null==l||l.call({name:BlindBoxName.callNativeLoadHeader,params:i}),e(i)}))}callNativeHandleByErrorCode(l,e){try{window.blindbox.callNativeHandleByErrorCode(JSON.stringify(l))}catch(l){null==e||e()}}callNativeCloseUrl(l,e){try{window.blindbox.callNativeCloseUrl(JSON.stringify(l))}catch(l){null==e||e()}}callJsByNotify(l){return new Promise(((l,e)=>{l(window.blindbox.callJsByNotify())}))}callNativePaySuccess(l,e){try{window.blindbox.callNativePaySuccess(JSON.stringify(l))}catch(l){null==e||e()}}callNativeInsertDB(l,e,a=0,i){try{window.blindbox.callNativeInsertDB(JSON.stringify({key:l,response:e,Expiration:e.Expiration||a}))}catch(l){null==i||i()}}callNativeSelectDB(l){return new Promise(((e,a)=>{e(window.blindbox.callNativeSelectDB(l))}))}callNativeUpdateStatusBar(l,e){try{window.blindbox.callNativeUpdateStatusBar(l)}catch(l){null==e||e()}}callNativeBackHome(l,e){try{window.blindbox.callNativeBackHome(l)}catch(l){null==e||e()}}callNativeBack(l){try{window.blindbox.callNativeBack()}catch(e){null==l||l()}}callNativePagesJump(l,e=!1,a=0,i=!0,t){try{window.blindbox.callNativePagesJump(JSON.stringify({jumpType:a,jumpScheme:l,statusBarType:i,isCloseCurrentPage:e}))}catch(l){null==t||t()}}callNativePagesJumpWeb(l,e=!0,a){try{window.blindbox.callNativePagesJumpWeb(JSON.stringify({pageId:l,statusBarType:e}))}catch(l){null==a||a()}}callNativeOpenMachine(l,e=!1,a){try{window.blindbox.callNativeOpenMachine(l,e)}catch(l){null==a||a()}}callNativePlayerAudio(l,e){try{window.blindbox.callNativePlayerAudio(l)}catch(l){null==e||e()}}callNativeSetLoadingProgress(l,e){try{window.blindbox.callNativeLoading(l)}catch(l){null==e||e()}}callNativeGetUserInfo(){return new Promise((l=>{l(window.blindbox.callNativeGetUserInfo())}))}callNativePublishMessageForTopic(l={topic:"",msg:"",qos:0,retained:!1},e){try{window.blindbox.callNativePublishMessageForTopic(l.topic,l.msg,l.qos,l.retained)}catch(l){null==e||e()}}}return l.instance=new l,l}));
