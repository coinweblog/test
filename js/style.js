window.addEventListener('load', () => {
    // 引用min950.css文件时的样式设置：
    let inputs = document.querySelector('.inputs')
    let logoblock = document.querySelector('.logoblock a img')
    let columnAs = document.querySelectorAll('.column a')
    let double = document.querySelector('.double-left')
    let doubleLeft = document.querySelector('.double-left')
    // 鼠标侧边栏按钮时的颜色
    inputs.addEventListener('mouseover', ()=> {
        doubleLeft.style.color = 'white'
    })
    inputs.addEventListener('mouseout', ()=> {
        doubleLeft.style.color = '#A8B9CE'
    })
    // 获取column中a元素的文本节点
    let columnAarr = []
    for (let i = 0; i < columnAs.length; i++){
        let strAs = columnAs[i].childNodes[1].nodeValue
        columnAarr.push(strAs)
    }

    let selected = null
    // 点击侧边栏按钮时设置左侧边栏样式
    inputs.addEventListener('click', () => {
        selected = inputs.checked
        if (selected) {
            logoblock.src = 'img/logo_50_50.svg'//更改logo文件
            //删除column中a元素的文本节点
            for (let i = 0; i < columnAs.length; i++){
                columnAs[i].childNodes[1].nodeValue = ''
            }
            double.className = 'fa fa-angle-double-right'//更改菜单显隐按钮样式
        } else {
            logoblock.src = 'img/110_37_White_font.svg'//更改logo文件
            //恢复column中a元素的文本节点
            for (let i = 0; i < columnAs.length; i++){
                columnAs[i].childNodes[1].nodeValue = columnAarr[i]
            }
            double.className = 'fa fa-angle-double-left'//更改菜单显隐按钮样式
        }
    })

    // 引用max950.css文件时的样式设置：
    let titleH4 = document.querySelector('.title h4')
    let leftSide = document.querySelector('.left-side')
    let mask = document.querySelector('.mask')

    let index = true
    //为汉堡按钮添加点击事件
    titleH4.addEventListener('click', () => {
        if (index) {
            leftSide.style.display = 'block'
            mask.style.display = 'block'
            logoblock.src = 'img/110_37_White_font.svg'//更改logo文件
            index = false
        } 
        if (selected) {
            //恢复column中a元素的文本节点
            for (let i = 0; i < columnAs.length; i++){
                columnAs[i].childNodes[1].nodeValue = columnAarr[i]
            }
        }
    })
    //为遮罩层添加点击事件
    mask.addEventListener('click', () => {
        if (!index) {
            leftSide.removeAttribute('style')
            mask.removeAttribute('style')
            index = true
        }
        //删除column中a元素的文本节点
        if (selected) {
            for (let i = 0; i < columnAs.length; i++){
                columnAs[i].childNodes[1].nodeValue = ''
            }
        }
    })
    // 判断屏幕窗口大小
    let mql = [
        window.matchMedia('(min-width:950px)'),
        window.matchMedia('(max-width:950px)'),
    ]
    // 判断窗口大小设置a元素节点
    window.addEventListener('resize', () => {
        if (mql[0].matches && selected) {
            for (let i = 0; i < columnAs.length; i++){
                columnAs[i].childNodes[1].nodeValue = ''
            }
            logoblock.src = 'img/logo_50_50.svg'//更改logo文件
        }
        if (mql[1].matches && !index) {
            for (let i = 0; i < columnAs.length; i++){
                columnAs[i].childNodes[1].nodeValue = columnAarr[i]
                logoblock.src = 'img/110_37_White_font.svg'//更改logo文件
            }
        }
    })


        
})
