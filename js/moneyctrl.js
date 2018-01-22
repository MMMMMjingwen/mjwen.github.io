/**
 * Created by 马靖文 on 2018/1/20.
 */


// //渲染列表数据
function  renderPage(pageid){
  var pageid=pageid ||1;
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getmoneyctrl',
    data:{
      pageid:pageid
    },
    success:function(info){
      console.log(info);
      $('.mmb-lists').html(template('tpl',info))

    }
  })
  return pageid
}
renderPage()


//点击当前页面渲染 当前也说
  $('#currentage').on('click',function(){
    var currentage=$(this).val()
    var pageid=currentage
    renderPage(+pageid)
  })


// 点击下一页渲染页面
 $('.next').on('click',function(){
   var page=+$('.pages select').val()+1

   console.log(page);
   renderPage(page)
   $('.pages select').val(page)
 })



$('.prev').on('click',function(){
  console.log('hha');
  var page=+$('.pages select').val()-1
  console.log(page);
  if(page==0){
    mui.toast('已经是最前的一页了')
    return
  }
  renderPage(page)
  $('.pages select').val(page)

})

