var info_pepole = {};
  var html = document.getElementById('content');
  var vse = document.getElementById('vse');
var idb= 0;
window.onload = function(){main();}

window.onscroll= function(){
  var scroll = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
if(scroll<300){

ds();
   if(idb>=info_pepole.length-1)
 vse.innerHTML ='<h1 class="kon1">Результатов больше нет</h1>';
}
}
$('#lo').on('click',clear);
function run (e){
 if(e.keyCode == 13){
   clear();
 }
}
function clear (){
 vse.innerHTML=" ";
 html.innerHTML=" ";
 idb = 0;
 main();
}
//https://oauth.vk.com/authorize?client_id=6834608&display=page&redirect_uri=&scope=&response_type=token&v=5.92


 function main (){
   var tokin ="3e4326d0bd171d153b3920f9a1d4aa63f56b5a27a7a149de93125545c7662087e1b8abbaa69d650f99eb0";
   var count = 100;
   var q = document.getElementById("example").value;
  $.ajax({

    url:"https://api.vk.com/method/users.search?count="+count+"&q="+q+"&fields=photo_200,online&access_token="+tokin+"&v=5.92",
    method: 'GET',
    dataType: 'JSONP',
    success: function (data){
        console.log(data);
        info_pepole = data.response.items;
        ds();
      }

  });
}
function ds (){
var html = document.getElementById('content');
var statys=" ";



if(idb<info_pepole.length-1){
for(var i=0;i<10; i++){
  if(info_pepole[idb].online == 1){
    statys ="onlain";
  }
  else{

  }
  html.innerHTML +='<div class="profil" id="'+idb+'" onclick="profil('+idb+');">'+'<a href="page.html">'+
  '<div class="img">'
        + '<img class="icon" src="'+info_pepole[idb].photo_200+'"/>'
+'<div class="'+statys+'"></div>'

        + '<h4 class="name">'+info_pepole[idb].first_name+' '+info_pepole[idb].last_name+'</h4>'
        +'</div>'

+  '</div>';
idb+=1 ;
}

}
else{
vse.innerHTML ='<h1 class="kon2">Нечего не найдено</h1>';
}
}

function profil(id){
  localStorage.setItem("UserProfil",JSON.stringify(info_pepole[id]));

}
