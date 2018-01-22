/**
 * Created by 马靖文 on 2018/1/21.
 */


function getobj(){
  var search=decodeURI(location.search)
  search=search.slice(1);
  //console.log(search);
  var arr=search.split('&')
  console.log(arr);
  var obj={}
for(var i = 0; i < arr.length; i++) {
   var k=arr[i].split('=')[0]
    var v=arr[i].split('=')[1]
   obj[k]=v
}
  return obj
}
getobj()


function getSearch(key){
  return this.getobj()[key]
}



var couponid=getSearch('couponid')
 //渲染数据
$.ajax({
  type:'get',
  url:'http://localhost:9090/api/getcouponproduct',
  data:{
    couponid:couponid,
  },
  success:function(info){
    console.log(info);
    $('.checken').html(template('tpl',info))
    $('.mui-slider-group').html(template('tpl2',info))
  }
})


// 遮罩层
$('.checken').on('click','.imgs',function(){

  $('.mui-backdrop').show()
  // 轮播
 ////获得slider插件对象
  var gallery = mui('.mui-slider');
  gallery.slider({
    interval:5000
  });

})

$('.left').on('click',function(){
  console.log('haha');
  mui(".mui-slider").slider().prevItem();
})

$('.right').on('click',function(){
  mui(".mui-slider").slider().nextItem();
})









