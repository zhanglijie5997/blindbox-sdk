!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):(e="undefined"!=typeof globalThis?globalThis:e||self)["cocos_core-name"]=a()}(this,(function(){"use strict";class e{constructor(){}isInBindBox(){window||console.error("This SDK only works with browsers."),window.blindbox||console.error("This SDK only suport with bindbox app.")}callNativeCheckPaid(e,a,l){try{window.blindbox.callNativeCheckPaid(JSON.stringify({OrderId:e,OrderType:a}))}catch(e){null==l||l()}}callNativeCloseAndRedirectPage(e,a){try{window.blindbox.callNativeCloseAndRedirectPage(JSON.stringify(e))}catch(e){}}callNativeLoadHeader(e){return new Promise(((a,l)=>{const i=window.blindbox.callNativeLoadHeader();null==e||e.call({name:BlindBoxName.callNativeLoadHeader,params:i}),a(i)}))}callNativeHandleByErrorCode(e,a){try{window.blindbox.callNativeHandleByErrorCode(JSON.stringify(e))}catch(e){null==a||a()}}callNativeCloseUrl(e,a){try{window.blindbox.callNativeCloseUrl(JSON.stringify(e))}catch(e){null==a||a()}}callJsByNotify(e){return new Promise(((e,a)=>{e(window.blindbox.callJsByNotify())}))}callNativePaySuccess(e,a){try{window.blindbox.callNativePaySuccess(JSON.stringify(e))}catch(e){null==a||a()}}callNativeInsertDB(e,a,l=0,i){try{window.blindbox.callNativeInsertDB(JSON.stringify({key:e,response:a,Expiration:a.Expiration||l}))}catch(e){null==i||i()}}callNativeSelectDB(e){return new Promise(((a,l)=>{a(window.blindbox.callNativeSelectDB(e))}))}callNativeUpdateStatusBar(e,a){try{window.blindbox.callNativeUpdateStatusBar(e)}catch(e){null==a||a()}}callNativeBackHome(e,a){try{window.blindbox.callNativeBackHome(e)}catch(e){null==a||a()}}callNativeBack(e){try{window.blindbox.callNativeBack()}catch(a){null==e||e()}}callNativePagesJump(e,a=!1,l=0,i=!0,t){try{window.blindbox.callNativePagesJump(JSON.stringify({jumpType:l,jumpScheme:e,statusBarType:i,isCloseCurrentPage:a}))}catch(e){null==t||t()}}callNativePagesJumpWeb(e,a=!0,l){try{window.blindbox.callNativePagesJumpWeb(JSON.stringify({pageId:e,statusBarType:a}))}catch(e){null==l||l()}}callNativeOpenMachine(e,a=!1,l){try{window.blindbox.callNativeOpenMachine(e,a)}catch(e){null==l||l()}}callNativePlayerAudio(e,a){try{window.blindbox.callNativePlayerAudio(e)}catch(e){null==a||a()}}callNativeSetLoadingProgress(e,a){try{window.blindbox.callNativeLoading(e)}catch(e){null==a||a()}}callNativeGetUserInfo(){return new Promise((e=>{e(window.blindbox.callNativeGetUserInfo())}))}callNativePublishMessageForTopic(e={topic:"",msg:"",qos:0,retained:!1},a){try{window.blindbox.callNativePublishMessageForTopic(e.topic,e.msg,e.qos,e.retained)}catch(e){null==a||a()}}}e.instance=new e;var a=e.instance;class l{callNativeCheckPaid(e){a.callNativePagesJumpWeb(e.params.pageId,e.params.type)}callNativeOpenMachine({id:e,type:l}){a.callNativeOpenMachine(e,l)}callNativePagesJumpWeb({pageId:e,type:l}){a.callNativePagesJumpWeb(e,l)}callNativeSetLoadingProgress(e){a.callNativeSetLoadingProgress(e)}}return l.instance=new l,l.instance}));
