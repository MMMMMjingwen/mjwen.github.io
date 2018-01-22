/**
 * Created by 马靖文 on 2018/1/21.
 */


//店铺渲染
$.ajax({
  type:'get',
  url:'http://localhost:9090/api/getgsshop',
  success:function(info){
    console.log(info);
    $('.maket').html(template('tpl',info))
  }
})

//地区渲染
$.ajax({
  type:'get',
  url:'http://localhost:9090/api/getgsshoparea',
  success:function(info){
    //console.log(info);
    $('.ground').html(template('tpl2',info))
  }
})
//商品列表渲染
function render(){
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getgsproduct',
    data:{
      shopid:shopId,
      areaid:areaId
    },
    success:function(info){
      console.log(info);
      $('.mmb-pro').html(template('tpl3',info))
    }
  })
}
render()


var shopId=$('.maket').find('option').val()
 shopId=+shopId
console.log(shopId);

var areaId=$('.ground').find('option').val()
areaId=+areaId
console.log(areaId);

$('.maket').on('change',function(){
   shopId=$(this).val();
     shopId=+shopId
   render()
})

$('.ground').on('change',function(){
  areaId=$(this).val();
  console.log(areaId);
  areaId=+areaId
  render()

})

