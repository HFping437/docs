---
title: canvas学习
date: 2022-10-9
tags:
  - canvas
  - JavaScript
---


# HTML canvas 学习记录

简介：`<canvas>` 是 `HTML5` 新增的，一个可以使用脚本(通常为 `JavaScript`) 在其中绘制图像的 `HTML` 元素。它可以用来制作照片集或者制作简单(也不是那么简单)的动画，甚至可以进行实时视频处理和渲染。`Canvas` 是由 `HTML` 代码配合高度和宽度属性而定义出的可绘制区域。`JavaScript` 代码可以访问该区域，类似于其他通用的二维 `API`，通过一套完整的绘图函数来动态生成图形。
## 基本使用

### 创建画布

通过canvas标签来绘制画布，通常需要指定一个id属性 (脚本中经常引用), width 和 height 属性定义画布的大小。

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

### 渲染上下文

找到canvas元素，获取2d渲染上下文对象，getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

canvas是画布，那么ctx就是画笔。

```js
let canvas = document.getElementById('mycanvas')
//获取2d渲染上下文对象
let ctx = canvas.getContext('2d')
```

### 支持性

由于某些较老的浏览器（尤其是 IE9 之前的 IE 浏览器）或者浏览器不支持 HTML 元素 `<canvas>`，我们需要在标签内写上替代内容，

支持 `<canvas>` 的浏览器会只渲染 `<canvas>` 标签，而忽略其中的替代内容。不支持 `<canvas>` 的浏览器则 会直接渲染替代内容。

```js
<canvas id="myCanvas" width="200" height="100">浏览器不支持</canvas>
```

js代码中检测支持性

```js
var canvas = document.getElementById('myCanvas');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // 支持操作
} else {
  // 不支持操作
}
```

#### 示例代码

```js
<canvas id="myCanvas" width="300" height="300">浏览器不支持</canvas>
<script type="text/javascript">
function draw(){
    var canvas = document.getElementById('myCanvas');
    if(!canvas.getContext) return;
      var ctx = canvas.getContext("2d");
      //开始代码
    
}
draw();
</script>
```

## 栅格和坐标空间
`canvas` 元素默认被网格所覆盖。通常来说网格中的一个单元相当于 `canvas` 元素中的一像素。栅格的起点为左上角，坐标为 (0,0) 。所有元素的位置都相对于原点来定位。所以图中蓝色方形左上角的坐标为距离左边（X 轴）x 像素，距离上边（Y 轴）y 像素，坐标为 (x,y)。

![img](https://www.runoob.com/wp-content/uploads/2018/12/Canvas_default_grid.png)

## 绘制形状

`<canvas>` 只支持一种原生的图形绘制：**矩形**。所有其他图形都需要通过生成路径 (`path`)的方式来绘制。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

canvas 提供了三种方法绘制矩形：

- **fillRect(x, y, width, height)**：绘制一个填充的矩形。
- **strokeRect(x, y, width, height)**：绘制一个矩形的边框。
- **clearRect(x, y, width, height)**：清除指定的矩形区域，然后这块区域会变的完全透明。

参数说明：x，y指的是矩形的左上角的坐标，width，height指的是绘制的矩形的宽度和高度

css:

```css
  <style>
    #mycanvas {
      border: 1px solid #ff6600;
    }
  </style>
```

html:

```html
  <canvas id="mycanvas" width="300px" height="300px">浏览器不支持</canvas>
```

js:

```js
 function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')
      //绘制一个填充的矩形
      ctx.fillRect(10, 10, 200, 50)
      //绘制一个矩形边框
      ctx.strokeRect(10, 70, 200, 50)
      //清除指定的矩形区域，清除的区域或变得完全透明
      ctx.clearRect(20, 20, 50, 30)
    }
    draw()
```

页面展示：`canvas` 元素默认被网格所覆盖。通常来说网格中的一个单元相当于 `canvas` 元素中的一像素。栅格的起点为左上角，坐标为 (0,0) 。所有元素的位置都相对于原点来定位。所以图中蓝色方形左上角的坐标为距离左边（X 轴）x 像素，距离上边（Y 轴）y 像素，坐标为 (x,y)。

![img](https://www.runoob.com/wp-content/uploads/2018/12/Canvas_default_grid.png)

## 绘制形状

`<canvas>` 只支持一种原生的图形绘制：**矩形**。所有其他图形都需要通过生成路径 (`path`)的方式来绘制。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

canvas 提供了三种方法绘制矩形：

- **fillRect(x, y, width, height)**：绘制一个填充的矩形。
- **strokeRect(x, y, width, height)**：绘制一个矩形的边框。
- **clearRect(x, y, width, height)**：清除指定的矩形区域，然后这块区域会变的完全透明。

参数说明：x，y指的是矩形的左上角的坐标，width，height指的是绘制的矩形的宽度和高度

css:

```css
  <style>
    #mycanvas {
      border: 1px solid #ff6600;
    }
  </style>
```

html:

```html
  <canvas id="mycanvas" width="300px" height="300px">浏览器不支持</canvas>
```

js:

```js
 function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')
      //绘制一个填充的矩形
      ctx.fillRect(10, 10, 200, 50)
      //绘制一个矩形边框
      ctx.strokeRect(10, 70, 200, 50)
      //清除指定的矩形区域，清除的区域或变得完全透明
      ctx.clearRect(20, 20, 50, 30)
    }
    draw()
```

页面展示：

![image-20220929110135113](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929110135113.png)


## 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。

一个路径，甚至一个子路径，都是闭合的。

使用路径绘制图形需要一些额外的步骤：

1. 创建路径起始点
2. 调用绘制方法去绘制出路径
3. 把路径封闭
4. 一旦路径生成，通过描边或填充路径区域来渲染图形。

下面是需要用到的方法：

1. `beginPath()`：新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径
2. `moveTo(x, y)`：把画笔移动到指定的坐标`(x, y)`。相当于设置路径的起始点坐标
3. ``lineTo(x,y)``：绘制一条从当前画笔位置到指定坐标``(x, y)``的直线
4. `closePath()`：闭合路径之后，图形绘制命令又重新指向到上下文中
5. `stroke()`：通过线条来绘制图形轮廓
6. `fill()`：通过填充路径的内容区域生成实心的图形

### 绘制线段
```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.beginPath()  //新建一条路径
      ctx.moveTo(10,10)  //将画笔移动到指定的坐标(10,10)，相当于设置路径的起始点坐标
      ctx.lineTo(100,100)  //绘制一条从当前位置到指定坐标(100, 100)的直线.
      ctx.closePath();  //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
      ctx.stroke()  //绘制路径
    }
    draw()
```

页面展示：

![image-20220929113328518](E:\Desktop\2.png)

### 绘制三角形边框

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.beginPath()  //新建一条路径
      ctx.moveTo(10,10)  //将画笔移动到指定的坐标(10,10)，相当于设置路径的起始点坐标
      ctx.lineTo(110,10)  //绘制三角形的一条边
      ctx.lineTo(110,110)  //绘制另一条边
      ctx.closePath();  //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
      ctx.stroke()  //绘制路径
    }
    draw()
```

页面展示：

![image-20220929113641296](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929113641296.png)

### 绘制填充三角形

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.beginPath()  //新建一条路径
      ctx.moveTo(10,10)  //将画笔移动到指定的坐标(10,10)，相当于设置路径的起始点坐标
      ctx.lineTo(110,10)  //绘制三角形的一条边
      ctx.lineTo(110,110)  //绘制另一条边
      ctx.closePath();  //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
      ctx.fill()  //填充路径的内容区域
    }
    draw()
```

页面展示：

![image-20220929113829622](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929113829622.png)

### 绘制圆弧

有两个方法可以绘制圆弧：

1. **arc(x, y, r, startAngle, endAngle, anticlockwise)**: 以`(x, y)` 为圆心，以`r` 为半径，从 `startAngle` 弧度开始到`endAngle`弧度结束。`anticlosewise` 是布尔值，`true` 表示逆时针，`false` 表示顺时针(默认是顺时针)。

   注意：这里的度数都是弧度。0` 弧度是指的 `x` 轴正方向。

   ![image-20220929154414269](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929154414269.png)

2. **arcTo(x1, y1, x2, y2, radius)**: ``x1，y1``：控制点1坐标   ``x2，y2``：控制点2坐标  ``radius``：圆弧半径。

   arcTo()方法将利用当前点（当前画笔位置）、控制点1(x1,y1)和控制点2(x2,y2)这三个点所形成的夹角，然后绘制一段与夹角的两边相切并且半径为radius的圆上的弧线。此外，如果当前端点不是弧线起点，arcTo()方法还将添加一条当前端点到弧线起点的直线线段。

#### arc方法绘制圆弧

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')

      ctx.beginPath()  //新建一条路径
      ctx.arc(100,100,50,Math.PI*1.5,Math.PI,true)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(250,100,50,0,Math.PI*1.5,true)
      ctx.closePath()  //闭合路径
      ctx.stroke()  

      ctx.beginPath()
      ctx.arc(100, 200,50,0,Math.PI,false)
      ctx.fill()  //填充路径区域

      ctx.beginPath()
      ctx.arc(250,200,50,0,Math.PI,true)
      ctx.closePath()
      ctx.stroke()
    }
    draw()
```

页面展示：

![image-20220929153922432](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929153922432.png)

#### arcTo方法绘制圆弧

```js
 function draw() {
      let canvas = document.getElementById('mycanvas')

      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      
      ctx.beginPath()
      ctx.moveTo(20,20)
      ctx.arcTo(200,20,200,220,50)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(20,100)
      ctx.arcTo(120,100,120,200,100)
      ctx.stroke()
    }
    draw()
```

页面展示：

![image-20220929172111513](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929172111513.png)

### 绘制贝塞尔曲线

待补充。。。。。。

## 添加样式

### 颜色、样式、阴影

 在前面的绘制矩形章节中，只用到了默认的线条和颜色。如果想要给图形上色，有两个重要的属性可以做到。

1. `fillStyle`：设置或返回用于填充绘画的颜色、渐变或模式
2. `strokeStyle `：设置或返回用于笔触的颜色、渐变或模式。
3. `shadowColor`：设置或返回用于阴影的颜色。
4. `shadowBlur`：设置或返回用于阴影的模糊级别。
5. `shadowOffsetX`：设置或返回阴影与形状的水平距离。
6. `shadowOffsetY`：设置或返回阴影与形状的水平距离。

注意： 一旦设置了 strokeStyle 或者 fillStyle 的值，那么这个新值就会成为新绘制的图形的默认值。如果你要给每个图形上不同的颜色，你需要重新设置 fillStyle 或 strokeStyle 的值。

#### fillStyle设置填充颜色、渐变或模式

##### fillStyle设置颜色

```js	
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ff6600'  //设置填充颜色
      ctx.fillRect(10,10,100,50)
    }
    draw()
```

页面样式：

![image-20220929175118596](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929175118596.png)

##### fillStyle设置渐变

`createLinearGradient()` 方法创建线性的渐变对象。该方法接收四个参数，分别为x0：渐变开始点的x坐标，y0：渐变开始点的y坐标，x1：渐变结束点的x坐标，y1：渐变结束点的y坐标。

`createRadialGradient() `方法创建放射状/圆形渐变对象。该方法接收四个参数，分别为x0：渐变的开始圆的x坐标，y0：渐变的开始圆的y坐标，R0：开始圆的半径，x1：渐变的结束圆的x坐标，y1：渐变的结束圆的y坐标。R1：结束圆的半径。

渐变可用于填充矩形、圆形、线条、文本等等。

`addColorStop() `方法规定渐变对象中的颜色和位置。该方法接收两个参数分别为 stop：介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置。color：在 *stop* 位置显示的颜色值。

线性渐变：

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')
      //******************************************线性渐变*******************************
      //横向渐变
      let myGradient = ctx.createLinearGradient(10, 10, 100, 10)  //创建线性的渐变对象
      myGradient.addColorStop(0, '#ffffff')  //设置渐变对象中起始位置颜色为#ffffff。
      myGradient.addColorStop(1, '#ff6600')  //设置渐变对象中终止位置颜色为#ff6600。
      ctx.fillStyle = myGradient  //给fillStyle设置渐变对象
      ctx.fillRect(10, 10, 100, 50)

      //纵向渐变
      let myGradient1 = ctx.createLinearGradient(10, 70, 10, 120)
      myGradient1.addColorStop(0, '#006600')
      myGradient1.addColorStop(1, '#ffffff')
      ctx.fillStyle = myGradient1
      ctx.fillRect(10, 70, 100, 50)

      let myGradient2 = ctx.createLinearGradient(10, 130, 100, 130);
      myGradient2.addColorStop(0, "black");
      myGradient2.addColorStop(0.3, "magenta");
      myGradient2.addColorStop(0.5, "blue");
      myGradient2.addColorStop(0.6, "green");
      myGradient2.addColorStop(0.8, "yellow");
      myGradient2.addColorStop(1, "red");
      ctx.fillStyle = myGradient2;
      ctx.fillRect(10, 130, 100, 50);
    }
    draw()
```

页面展示：

![image-20220929181305006](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929181305006.png)

放射性渐变：

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')
      //******************************************放射性渐变*******************************
      var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
      grd.addColorStop(0, "#ff6600");
      grd.addColorStop(1, "#ffffff");
      ctx.fillStyle = grd;
      ctx.fillRect(10, 10, 150, 100);
    }
    draw()
```

页面展示：

![image-20220929181918052](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929181918052.png)

##### fillStyle设置填充绘图

`createPattern()` 方法在指定的方向内重复指定的元素,元素可以是图片、视频，或者其他canvas元素。该方法接收两个参数分别为：image：规定要使用的模式的图片、画布或视频元素，填充方式：可选值为repeat|repeat-x|repeat-y|no-repeat。

待补充。。。。。。

#### strokeStyle设置轮廓颜色、渐变或模式

##### strokeStyle设置颜色

```js	
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.strokeStyle = '#ff6600'  //设置填充颜色
      ctx.strokeRect(10,10,100,50)
    }
    draw()
```

页面样式：

![image-20220929184652253](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929184652253.png)

##### strokeStyle设置渐变

线性渐变：

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')
      //******************************************线性渐变*******************************
      //横向渐变
      let myGradient = ctx.createLinearGradient(10, 10, 100, 10)  //创建线性的渐变对象
      myGradient.addColorStop(0, '#ffffff')  //设置渐变对象中起始位置颜色为#ffffff。
      myGradient.addColorStop(1, '#ff6600')  //设置渐变对象中终止位置颜色为#ff6600。
      ctx.strokeStyle = myGradient  //给strokeStyle设置渐变对象
      ctx.strokeRect(10, 10, 100, 50)

      //纵向渐变
      let myGradient1 = ctx.createLinearGradient(10, 70, 10, 120)
      myGradient1.addColorStop(0, '#006600')
      myGradient1.addColorStop(1, '#ffffff')
      ctx.strokeStyle = myGradient1
      ctx.strokeRect(10, 70, 100, 50)

      let myGradient2 = ctx.createLinearGradient(10, 130, 100, 130);
      myGradient2.addColorStop(0, "black");
      myGradient2.addColorStop(0.3, "magenta");
      myGradient2.addColorStop(0.5, "blue");
      myGradient2.addColorStop(0.6, "green");
      myGradient2.addColorStop(0.8, "yellow");
      myGradient2.addColorStop(1, "red");
      ctx.strokeStyle = myGradient2;
      ctx.strokeRect(10, 130, 100, 50);
    }
    draw()
```

页面展示：

![image-20220929184925164](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929184925164.png)

放射性渐变：

```js
 function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')
      //******************************************放射性渐变*******************************
      var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
      grd.addColorStop(0, "#ff6600");
      grd.addColorStop(1, "#ffffff");
      ctx.strokeStyle = grd;
      ctx.strokeRect(10, 10, 150, 100);
    }
    draw()
```

页面展示：

![image-20220929185211266](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929185211266.png)

#### shadow设置阴影样式

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.shadowBlur = 10  //设置阴影模糊级别
      ctx.shadowColor = '#555555' //设置阴影颜色
      ctx.fillStyle = '#ff6600'
      ctx.fillRect(10,10,100,50)
      
      ctx.shadowOffsetX = 20  //设置阴影与形状的水平距离。
      ctx.fillRect(10,80,100,50)

      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 20  ////设置阴影与形状的垂直距离。
      ctx.fillRect(10,150,100,50)
    }
    draw()
```

页面样式：

![image-20220929190239770](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220929190239770.png)

### 线条样式

#### lineWidth设置线条的宽度

注意：起始点和终点的连线为中心，上下各占线宽的一半。

```js
 function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(10,10)
      ctx.lineWidth = 10  //设置线宽度
      ctx.lineTo(100,10)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(10,50)  
      ctx.lineTo(10,100)
      ctx.lineWidth = 20   //起始点和终点的连线为中心，上下各占线宽的一半。
      ctx.stroke()
    }
    draw()
```

页面展示：

![image-20220930101427079](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930101427079.png)

#### lineCap设置线条的结束端点样式

该属性有三个可选值：`butt`：线段末端以方形结束（默认），`round`：线段末端以圆形结束，`square`：线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(20, 20)
      ctx.lineWidth = 10
      ctx.lineCap = 'butt'  //向线条的末端添加平直的边缘
      ctx.lineTo(20, 100)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(50, 20)
      ctx.lineTo(50, 100)
      ctx.lineWidth = 20   //向线条的末端添加圆形线帽。
      ctx.lineCap = 'round'
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(80, 20)
      ctx.lineTo(80, 100)
      ctx.lineWidth = 20
      ctx.lineCap = 'square'  //向线条的末端添加宽度与线段相同，高度是线宽一半的正方形线帽。
      ctx.stroke()
    }
    draw()
```

页面展示：

![image-20220930102903664](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930102903664.png)

#### lineJoin设置两条线相交时，所创建的拐角类型。

同一个 path 内，设定线条与线条间接合处的样式。共有 3 个值`round`： 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状，圆角的半径是线段的宽度。`bevel` 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。`miter`(默认) 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if (!canvas.getContext) return
      let ctx = canvas.getContext('2d')

      var lineJoin = ['round', 'bevel', 'miter'];
      ctx.lineWidth = 20;
      for (var i = 0; i < lineJoin.length; i++) {
        ctx.lineJoin = lineJoin[i];
        ctx.beginPath();
        ctx.moveTo(50, 50 + i * 50);
        ctx.lineTo(100, 100 + i * 50);
        ctx.lineTo(150, 50 + i * 50);
        ctx.lineTo(200, 100 + i * 50);
        ctx.lineTo(250, 50 + i * 50);
        ctx.stroke();
      }
    }
    draw()
```

页面展示：

![image-20220930103411575](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930103411575.png)

#### 设置虚线

用 `setLineDash` 方法和 `lineDashOffset` 属性来制定虚线样式。 `setLineDash` 方法接受一个数组 [实线长度, 间隙长度]，来指定线段与间隙的交替；`lineDashOffset`属性设置起始偏移量。

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.setLineDash([10,10])  //设置虚线线段长度与间隙长度
      ctx.lineDashOffset = 0  //设置虚线起始偏移量
      ctx.strokeRect(10,10,100,100)

      ctx.setLineDash([20,10])
      ctx.lineDashOffset = 20
      ctx.strokeRect(10,120,100,100)
    }
    draw()
```

页面展示：

![image-20220930104232992](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930104232992.png)



## 绘制文本

canvas 提供了两种方法来渲染文本:

1. `fillText(text, x, y [, maxWidth])` 在指定的 (x,y) 位置填充指定的文本，绘制的最大宽度是可选的。
2. `strokeText(text, x, y [, maxWidth])` 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.font = '50px Arial'
      ctx.fillText('UINO',10,50)  //绘制填充文本

      ctx.font = '80px sans-serif'
      ctx.strokeText('UINO',10,150)  //绘制无填充文本
    }
    draw()
```

页面展示：

![image-20220930110612551](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930110612551.png)

## 添加文本样式

1. `font = value` 当前我们用来绘制文本的样式。这个字符串使用和 `CSS font` 属性相同的语法。 默认的字体是 `10px sans-serif`。

2. `textAlign = value` 文本对齐选项。 可选的值包括：`start`, `end`, `left`, `right` or `center`。 默认值是 `start`。

   ![image-20220930112229431](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930112229431.png)

3. `textBaseline = value` 基线对齐选项，可选的值包括：`top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`。默认值是 `alphabetic。`。

   ![image-20220930112211300](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930112211300.png)

4. `direction = value` 文本方向。可能的值包括：`ltr`, `rtl`, `inherit`。默认值是 `inherit`。

   注意：chrome浏览器不支持该属性

## 绘制图片
### 创建图片

```js
let img = new Image();
img.src = './images/lamp.png'
```

### 绘制img

drawImage() 方法在画布上绘制图像、画布或视频,也能够绘制图像的某些部分，以及增加或减少图像的尺寸。

| 参数      | 描述                                         |      |
| :-------- | :------------------------------------------- | ---- |
| *img*     | 规定要使用的图像、画布或视频。               |      |
| *sx*      | 可选。开始剪切的 x 坐标位置。                |      |
| *sy*      | 可选。开始剪切的 y 坐标位置。                |      |
| *swidth*  | 可选。被剪切图像的宽度。                     |      |
| *sheight* | 可选。被剪切图像的高度。                     |      |
| *x*       | 在画布上放置图像的 x 坐标位置。              |      |
| *y*       | 在画布上放置图像的 y 坐标位置。              |      |
| *width*   | 可选。要使用的图像的宽度（伸展或缩小图像）。 |      |
| *height*  | 可选。要使用的图像的高度（伸展或缩小图像）。 |      |

**注意**：考虑到图片是从网络加载，如果 `drawImage` 的时候图片还没有完全加载完成，则什么都不做，个别浏览器会抛异常。所以我们应该保证在 `img` 绘制完成之后再 `drawImage`。

#### 缩放图片

```js
var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //创建图片
    var img = new Image()
    img.src = "./images/emoji.png"
    //图片加载完成后再绘制图片
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 200, 200);  //0,0代表再0,0点绘制图片，100,200代表图像的宽高为200
    }
```

页面展示：

![image-20220930161952235](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930161952235.png)

img可以 `new` 也可以来源于我们页面的 `<img>`标签。

HTML:

```html
  <img src="./images/lamp.png" id="myimg">
  <canvas id="mycanvas" width="300" height="300"></canvas>
```

js:

```js
let canvas = document.getElementById('mycanvas')
    let ctx = canvas.getContext('2d')
    let img = document.getElementById('myimg')
    img.onload = function () {
      ctx.drawImage(img, 0, 0)
    }
```

页面展示：

![image-20220930163225429](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930163225429.png)

#### 裁剪图片

```js\
var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //创建图片
    var img = new Image()
    img.src = "./images/emoji.png"
    //图片加载完成后再绘制图片
    img.onload = function () {
      //再200，200位置上裁剪宽高为500的图片，再0，0位置上绘制图片，缩放为200宽高的图片
      ctx.drawImage(img, 200,200,500,500,0, 0, 200, 200);  
    }
```

页面展示：

![image-20220930172415519](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930172415519.png)

## 状态的保存与恢复

1. `save()` 和 `restore()`是绘制复杂图形时必不可少的操作。

2. `save` 和 `restore` 方法是用来保存和恢复 `canvas` 状态的，都没有参数。

3. `Canvas` 的状态就是当前画面应用的所有样式和变形的一个快照。

4. 一个绘画状态包括：

5. - 当前应用的变形（即移动，旋转和缩放）
   - `strokeStyle`, `fillStyle`, `globalAlpha`, `lineWidth`, `lineCap`, `lineJoin`, `miterLimit`, `shadowOffsetX`, `shadowOffsetY`, `shadowBlur`, `shadowColor`, `globalCompositeOperation 的值`
   - 当前的裁切路径（`clipping path`）

6. 关于 save() ：Canvas状态存储在栈中，每当save()方法被调用后，当前的状态就被推送到栈中保存。可以调用任意多次 save方法(类似数组的 push())。

7. 关于restore()：每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复(类似数组的 pop())。

   ```js
   function draw() {
         let canvas = document.getElementById('mycanvas')
         // 检测支持性
         if (!canvas.getContext) return
         let ctx = canvas.getContext('2d')
         ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
         ctx.save();                  // 保存默认状态
   
         ctx.fillStyle = 'red'       // 在原有配置基础上对颜色做改变
         ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
   
         ctx.save();                  // 保存当前状态
         ctx.fillStyle = '#FFF'       // 再次改变颜色配置
         ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形
   
         ctx.restore();               // 重新加载之前的颜色状态
         ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形
   
         ctx.restore();               // 加载默认颜色配置
         ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
       }
       draw()
   ```

   页面展示：

   ![image-20220930174436581](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930174436581.png)

## 变形

### translate

translate() 方法重新映射画布上的 (0,0) 位置。`translate` 方法接受两个参数。`x` 是左右偏移量，`y` 是上下偏移量。

![img](https://www.runoob.com/wp-content/uploads/2018/12/829832336-5b74dd8e3ad9a_articlex.png)

```js	
    function draw() {
      let canvas = document.getElementById('mycanvas')
      if (!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.strokeRect(0,0,200,50)
      ctx.translate(100,100)
      ctx.fillRect(0,0,200,50)
      ctx.translate(100,100)
      ctx.strokeRect(0,0,200,50)
    }
    draw()
```

页面展示：

![image-20221008180307573](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20221008180307573.png)

**注意**：在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 `restore` 方法比手动恢复原先的状态要简单得多。又如果你是在一个循环中做位移但没有保存和恢复 `canvas` 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 `canvas` 范围以外了。

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      if (!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.save(); //保存坐原点平移之前的状态
      ctx.translate(50,50)
      ctx.strokeRect(0,0,200,50)
      ctx.restore()  //恢复到最初状态
      ctx.translate(50,100)
      ctx.fillRect(0,0,200,50)
    }
    draw()
```

页面展示：

![image-20221008181011952](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20221008181011952.png)

### rotate

rotate() 方法旋转当前的绘图。这个方法只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值。旋转的中心是坐标原点。

**注意：**旋转只会影响到旋转完成后的绘图。

![img](https://www.runoob.com/wp-content/uploads/2018/12/3322150878-5b74dd8e2b6a4_articlex.png)

```js
    function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.fillRect(10,10,100,50)
      ctx.translate(100,100)
      ctx.rotate(Math.PI/180*45)
      ctx.strokeRect(10,10,100,50)

    }
    draw()
```

页面展示：

![image-20221008181547556](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20221008181547556.png)

### scale

scale() 方法缩放当前绘图至更大或更小。`scale`方法接受两个参数。`x,y` 分别是横轴和纵轴的缩放因子，它们都必须是正值。值比 1.0 小表示缩 小，比 1.0 大则表示放大。

**注意：**如果您对绘图进行缩放，所有之后的绘图也会被缩放。定位也会被缩放。如果您 scale(2,2)，那么绘图将定位于距离画布左上角两倍远的位置。

```js
    function draw() {
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.strokeRect(10,10,50,50)
      ctx.scale(2,2)
      ctx.strokeRect(10,10,50,50)
    }
    draw()
```

页面展示：

![image-20221008182152093](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20221008182152093.png)

### transform

画布上的每个对象都拥有一个当前的变换矩阵。transform() 方法替换当前的变换矩阵。它以下面描述的矩阵来操作当前的变换矩阵：

a ce

b df

0 01

换句话说，transform() 允许您缩放、旋转、移动并倾斜当前的环境。

这里面会有b水平倾斜绘图与c垂直倾斜绘图这两个参数，但是却没有设置旋转的参数。矩阵实际上也是通过b和c来实现旋转的，但其实际的意义是x与y轴的倾斜。也是css3中transform的skew属性，canvas转换矩阵通过对xy轴同步倾斜来实现旋转，如果xy倾斜不同步则会导致图像失真的情况

| 参数 | 描述           |
| :--- | :------------- |
| *a*  | 水平缩放绘图。 |
| *b*  | 水平倾斜绘图。 |
| *c*  | 垂直倾斜绘图。 |
| *d*  | 垂直缩放绘图。 |
| *e*  | 水平移动绘图。 |
| *f*  | 垂直移动绘图。 |

**注意：**该变换只会影响 transform() 方法调用之后的绘图。

**注意：**transform() 方法的行为相对于由 rotate()、scale()、translate() 或 transform() 完成的其他变换。 例如：如果您已经将绘图设置为放到两倍，则 transform() 方法会把绘图放大两倍，您的绘图最终将放大四倍。

```js
    function draw() {
      let row = Math.PI/180
      let canvas = document.getElementById('mycanvas')
      // 检测支持性
      if(!canvas.getContext) return 
      let ctx = canvas.getContext('2d')
      ctx.fillStyle = "#ff6600"
      ctx.fillRect(0,0,100,50)
      ctx.transform(1,0.5,-0.5,1,30,10)
      ctx.fillStyle = "#66ff00"
      ctx.fillRect(0,0,100,50)
      ctx.transform(1,0.5,-0.5,1,30,10)
      ctx.fillStyle = '#0066ff'
      ctx.fillRect(0,0,100,50)
    }
    draw()
```

页面展示：

![image-20221008184243034](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20221008184243034.png)

## 动画



## 示例

#### 柱状图示例

HTML:

```HTML
  <canvas id="mycanvas" width="450" height="250">
```

js:

```js
function draw () {
      let mycanvas = document.getElementById("mycanvas"),
        data = {
          label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],//x轴的标题
          dataSets: [{
            values: [300, 50, 100, 50, 80, 150, 120], //对应标签的值
          }]
        };
      barChart(mycanvas, data); //画柱状图
    }
    //数组sort()排序传的参数为该函数（降序排列）
    function compare(value1, value2) {
      return value2 - value1;
    }
    /*柱状图
    * mycanvas:要操作的画布元素
    * data:所需格式的数据*/
    function barChart(mycanvas, data) {
      if (!mycanvas.getContext) return
      let ctx = mycanvas.getContext("2d"),
        mywidth = mycanvas.width, //画布的宽高
        myheight = mycanvas.height,
        labels = data.label, //矩形对应标题
        len = labels.length,//标签/数据个数 
        bheight = myheight - 30 * 2, //边框高度
        bWidth = Math.floor((mywidth - 30 * 2 - (len + 1) * 20) / len),  //柱状矩形宽度 
        values = data.dataSets[0].values, //绘图的值
        sortValues = values.slice(0) //基于当前数组中的一个或多个项创建一个新数组（解决了该数组排序原数组也被排序的问题）
      serialValues = new Array(); //用于存储序列化后的值
      sortValues.sort(compare);
      if (sortValues[0] > bheight) {
        (function () {
          //数值超过边框高度时序列化值
          for (let i = 0; i < len; i++) {
            serialValues[i] = values[i] * bheight / sortValues[0];
          }
        })();
      }
      //绘制边框
      ctx.beginPath(); //要绘制路径，必须先调用该方法，表示开始绘制新路径
      ctx.moveTo(30, 30);
      ctx.lineTo(30, myheight - 30);
      ctx.lineTo(mywidth - 30, myheight - 30);
      ctx.stroke(); //把图形绘制到画布上
      //绘制矩形，组成条形图
      ctx.fillStyle = "rgba(255,99,0,0.5)";
      //绘制文字
      ctx.font = "14px microsoft yahei"; //字体样式、大小、字体
      ctx.textAlign = "center"; //文本对齐方式
      ctx.textBaseline = "middle"; //文本的基线
      for (let i = 0; i < len; i++) {
        let x = (20 + 30) + i * (bWidth + 20),
          y = myheight - serialValues[i] - 30,
          x1 = x + Math.round(bWidth / 2);
        y1 = myheight - 30 + 15,
          y2 = y - 10;
        ctx.fillRect(x, y, bWidth, serialValues[i]); //x,y,width,height单位都为px
        ctx.fillText(labels[i], x1, y1); //绘制标题文字
        ctx.fillText(values[i], x1, y2); //绘制柱状图数据
      }
      ctx.fillStyle = "#000000";
      ctx.fillText("订单总数（个）", 49, 7); //x轴代表什么
      ctx.fillText("星期几", mywidth - 30, myheight - 30 + 15); //y轴代表什么
    }
    draw()
```

页面展示：

![image-20220930135944443](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930135944443.png)

#### 折线图示例

```js
function draw() {
      let canvas = document.getElementById('mycanvas')
      datas = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],//标签
        values: [50, 180, 100, 150, 110, 130, 30],//值
      },
        lineChart(canvas, datas);//画折线图
    }

    function lineChart(canvas, data) {
      if (!canvas.getContext) return
      let ctx = canvas.getContext("2d"),
        labels = data.labels,//数值对应标签
        values = data.values,//数值
        len = labels.length,//标签/数值个数
        elemWidth = canvas.width,//画布宽度
        elemHeight = canvas.height,//画布高度
        gridHeight = Math.ceil(elemHeight / 5),//每行之间高度 Math.ceil向上取整  50
        gridWidth = Math.floor(elemWidth / len),//每列之间看度  Math.floor向下取整 64
        actualHeight = 4 * gridHeight + 20;//绘制区域实际高度
      //设置绘制直线的属性
      ctx.strokeStyle = "#c0c0c0";
      ctx.lineWidth = 1;
      //设置绘制文本的属性
      ctx.font = "14px microsoft yahei";
      ctx.textAlign = "center";
      ctx.txtbaseline = "middle";
      //绘制背景
      //绘制背景横线
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        let hgridY = gridHeight * i + 20,
          hgridX = gridWidth * len;
        ctx.moveTo(0, hgridY);
        ctx.lineTo(hgridX, hgridY);
      }
      ctx.stroke();

      //绘制背景的竖线，表示每个label
      ctx.beginPath();
      for (let j = 0; j < len + 1; j++) {
        let vgridX = gridWidth * j,
          vgridY = actualHeight;
        ctx.moveTo(vgridX, vgridY);
        ctx.lineTo(vgridX, vgridY + 10);
      }
      ctx.stroke();
      //绘制标签文字
      ctx.fillStyle = "#000000";
      for (let k = 0; k < len; k++) {
        let txtX = gridWidth * (k + 0.5),
          txtY = actualHeight + 15;
        ctx.fillText(labels[k], txtX, txtY);
      }
      ctx.fill();


      //获取画图数据的最大值用于序列换数据
      let maxValue = 0,
        cData = new Array();
      for (let i = 0; i < len; i++) {
        if (values[i] > maxValue) {
          maxValue = values[i];
        }
      }
      //当最大值大于画布可绘制区域的高度时，对数据进行转化，然后进行画图
      if ((4 * gridHeight) < maxValue) {
        for (let i = 0; i < len; i++) {
          //转换后的数据
          cData[i] = values[i] * 4 * gridHeight / maxValue;
        }
      } else {
        cData = values;
      }
      //绘制折线
      ctx.strokeStyle = "#000000";
      ctx.beginPath();
      let pointX = gridWidth / 2,
        pointY = actualHeight - cData[0];
      ctx.moveTo(pointX, pointY);
      for (let i = 1; i < len; i++) {
        pointX += gridWidth;
        pointY = actualHeight - cData[i];
        ctx.lineTo(pointX, pointY);
      }
      ctx.stroke();
      //绘制坐标圆形
      ctx.beginPath();
      ctx.fillStyle = "#ff9900"; //圆点的颜色
      for (let i = 0; i < len; i++) {
        let circleX = gridWidth / 2 + gridWidth * i,
          circleY = actualHeight - cData[i];
        ctx.moveTo(circleX, circleY); //假如不每次绘制之前确定开始绘制新路径，可以每次绘制之前移动到新的圆心
        ctx.arc(circleX, circleY, 4, 0, Math.PI * 2, false);
      }
      ctx.fill();
      //绘制坐标圆形对应的值
      ctx.beginPath();
      ctx.fillStyle = "#000000"; //文本颜色
      for (let i = 0; i < len; i++) {
        let circleX = gridWidth / 2 + gridWidth * i,
          circleY = actualHeight - cData[i];
        ctx.fillText(values[i], circleX, circleY - 8);
      }
      ctx.fill();
      //绘制y轴代表什么
      ctx.fillText("完成件数（个）", 50, 11);
      ctx.fill();
    }
    draw()
```

页面展示：

![image-20220930142933076](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930142933076.png)

#### 饼状图示例

```js
function draw() {
      let mycanvas = document.getElementById("mycanvas"),
        datasets = {
          colors: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de"], //颜色
          labels: ["第一周", "第二周", "第三周", "第四周", "第五周"], //标签
          values: [30, 60, 80, 70, 150], //值
        };
      pieChart(mycanvas, datasets); //画饼状图

    }
    function pieChart(mycanvas, data) {
      if (!mycanvas.getContext) return
      let ctx = mycanvas.getContext("2d"),
        vdata = data.values, //绘图数据
        sum = sumFunc(vdata), //对绘图数据求和，用于计算百分比
        startangle = 0, //绘制扇形的开始角度
        labels = data.labels, //绘图的对应文字
        x1 = 125 + 100 + 30, //绘制右侧文字和标注的x坐标
        y1 = 125 - 100, //绘制右侧文字和标注的y坐标
        endangle; //绘制扇形的结束角度
      for (let i = 0; i < vdata.length; i++) {
        //绘制饼图
        //计算下一次绘制扇形的结束角度，即根据绘制数据占有总数据和的比例求的弧度
        let percent = vdata[i] / sum;
        endangle = startangle + Math.PI * 2 * (percent);
        ctx.beginPath(); //开始绘制新路径
        ctx.fillStyle = data.colors[i]; //绘制颜色
        ctx.moveTo(125, 125); //移动到圆心(注：画饼图一定要回到圆心，不然会有问题)
        ctx.arc(125, 125, 100, startangle, endangle, false); //画扇形
        //绘制右侧文字和标注
        ctx.moveTo(x1, y1); //移动到绘制文字和标注的位置
        ctx.fillRect(x1, y1, 30, 14); //绘制矩形表示比列图
        //计算四舍五入后的扇形每份的百分比
        let perc = (percent * 100).toFixed(2) + "%"; //tofixed()自动四舍五入返回指定小数位数的字符串
        //设置绘制文字的属性
        ctx.font = "bold 12px microsoft yahei";
        ctx.txtalgin = "center";
        ctx.textBaseline = "top";
        //绘制文字
        ctx.fillText(labels[i] + ":" + perc, x1 + 35, y1);
        ctx.fill(); //指定颜色填充以上绘制
        startangle = endangle; //下一次绘制扇形的开始角度
        y1 += 20; //下一次绘制文字和标注的y坐标
      }
    }

    function sumFunc(data) {
      let sum = 0;
      for (let i = 0, len = data.length; i < len; i++) {
        sum += data[i];
      }
      return sum;
    }
    draw()
```

页面展示：

![image-20220930144550999](C:\Users\hanfuping\AppData\Roaming\Typora\typora-user-images\image-20220930144550999.png)




