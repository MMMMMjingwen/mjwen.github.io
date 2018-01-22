/**
 * Created by 马靖文 on 2018/1/21.
 */

$.ajax({
  type:'get',
  url:'http://localhost:9090/api/getbrandtitle',
  success:function(info){
    console.log(info);
    $('.all').html(template('tpl',info))
  }
})
