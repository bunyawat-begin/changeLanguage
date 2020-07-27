//getDataReload
var dataReload = document.querySelectorAll("[data-reload]")

//definedLanguage
var language = {
    eng: {
        welcome: "  welcome to my application today i'll teach U something about js"
    },
    th: {
        welcome: "ยินดีต้อนรับสู่แอปพลิเคชันของเรา วันนี้เราจะสอนคุณเกี่ยวกับ จาวาสคริปต์"
    }
}

//ifIsThai
if (window.location.hash) {
    if (window.location.hash === "#th") {
        hi.textContent = language.th.welcome
        console.log(dataReload.length)
    }
}

//reloadAndDelayTime
for(i=0;i<2;i++){
    dataReload[i].onclick=function(){
        setTimeout(function(){
            location.reload()
        },200)
    }
}
