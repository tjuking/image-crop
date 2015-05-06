//图片裁切控制
function imageCrop(img, conWidth, conHeight) {
    //图片的容器
    var con = img.parentNode;
    if(!conWidth){
        //容器的宽度
        conWidth = parseInt(con.offsetWidth);
    }
    if(!conHeight){
        //容器的高度
        conHeight = parseInt(con.offsetHeight);
    }
    //容器的宽高比
    var conRatio = conWidth / conHeight;
    //图片的宽度
    var imgWidth = img.naturalWidth || img.width;
    //图片的高度
    var imgHeight = img.naturalHeight || img.height;
    //图片的宽高比
    var imgRatio = imgWidth / imgHeight;
    //需要设置100%的属性
    var resultAttr = "width";
    //容器的宽高比小于图片的宽高比时，图片进行水平方向裁切
    if (conRatio < imgRatio) {
        resultAttr = "height";
        img.style["left"] = "-" + parseInt(Math.abs((conWidth - (imgWidth * conHeight / imgHeight)) / 2)) + "px";
    //容器的宽高比大等于图片的宽高比时，图片进行垂直方向裁切
    } else {
        img.style["top"] = "-" + parseInt(Math.abs((conHeight - (imgHeight * conWidth / imgWidth)) / 2)) + "px";
    }
    //设置属性为100%
    img.style[resultAttr] = "100%";
}