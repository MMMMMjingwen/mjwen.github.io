/**
 * Created by 马靖文 on 2018/1/19.
 */

  //渲染分类页
$.ajax({
   type:'get',
  url:'http://localhost:9090/api/getcategorytitle',
  success:function(info){
    //console.log(info);
     $('.mmb-menu').html(template('tpl',info))
  }
})


$('.mmb-menu').on('tap','.title',function(){
  var titleId =$(this).data('id')
  //console.log(titleId);
  $.ajax({
    type:'get',
    url:'http://localhost:9090/api/getcategory',
    data:{
      titleid:titleId,
    },
    success:function(info){
      console.log(info);
      $('.down').html(template('tpl2' ,info))
    }
  })

})

//渲染分类页中的列表
