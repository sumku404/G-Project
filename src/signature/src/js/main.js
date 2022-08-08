/*
 * @Author: sumku404
 * @Date: 2022-08-06 20:52:13
 * @Description: 
 */


let buttons = [document.querySelector('.whatsapp'), document.querySelector('.telegram')]
buttons.forEach( item => {
    if (item.classList.contains('whatsapp')) {
        item.addEventListener('click', (env) => {
            window.location.href = "https://www.baidu.com";;
        })
    }else {
        item.addEventListener('click', (env) => {
            window.location.href = "https://t.me/sumkux"
        })
    }
})