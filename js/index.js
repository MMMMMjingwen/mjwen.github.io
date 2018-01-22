/**
 * Created by 马靖文 on 2018/1/19.
 */

   //渲染菜单栏
   $.ajax({
     type:'get',
     url:' http://localhost:9090/api/getindexmenu',
     success:function(info){
       console.log(info);
       $('.nav').html(template('menuTpl',info))
     }
   })


//点击更多创建li标签
$('.nav').on('click', '.mmb-add' ,function(){
  $('.menu').toggleClass('hide')
})

//渲染折扣列表
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getmoneyctrl',
    success:function(info){
      //console.log(info);
      $('.info-list').html(template('listTpl',info))
    }
  })

//点击
