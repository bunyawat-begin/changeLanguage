var dataReload = document.querySelectorAll("[data-reload]")

var language = {
    eng: {
        welcome: "  welcome to my application today i'll teach U something about js"
    },
    th: {
        welcome: "ยินดีต้อนรับสู่แอปพลิเคชันของเรา วันนี้เราจะสอนคุณเกี่ยวกับ จาวาสคริปต์"
    }
}

if (window.location.hash) {
    if (window.location.hash === "#th") {
        hi.textContent = language.th.welcome
        console.log(dataReload.length)
    }
}

for(i=0;i<2;i++){
    dataReload[i].onclick=function(){
        setTimeout(function(){
            location.reload()
        },200)
    }
}
