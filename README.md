# image-crop

图片等比例撑满容器，完全居中展示，会裁剪图片的非中心区域

### 裁切策略

图片占满容器且图片保持原有比例，完全居中展示图片，超出部分将被隐藏

### 使用示例

```html
	<!-- 引入资源 -->
	<link rel="stylesheet" href="../src/image-crop.css"/>
	<script src="../src/image-crop.js"></script>
	
	<!-- 设置容器的样式 -->
    <style>
        .picture-width, .picture-height{
            margin: 50px auto 0;
            width: 200px;
            height: 200px;
        }
    </style>
    
    <!-- 图片onload时进行裁切操作 -->
    <div class="picture-width ui-img-crop">
        <img src="width.jpg" onload="imageCrop(this);"/>
    </div>
    <div class="picture-height ui-img-crop">
        <img src="height.png" onload="imageCrop(this);"/>
    </div>
```   
