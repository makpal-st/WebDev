var btn = document.querySelector('#add'); 
var input = document.querySelector('input');
var list = document.querySelector('.list');

var close = document.getElementsByClassName("close");

//функция, которая вызв при нажатии кнопки
btn.onclick = function() {
if(input.value!=''){

    let el = document.createElement('li');  // создаем элемент, в котором будут находится наш текст  
    el.innerHTML = input.value;  //вставляем текст с инпута в элемент
    el.style.paddingLeft='10px';
    
    list.appendChild(el);  //этот элемент кладем в лист
    input.value='';
    
    
    var checkbox = document.createElement("input");   //создаем элемент типа инпут
    checkbox.type='checkbox';
    checkbox.style.float='left';
    //функция, которая будет выполняться при нажатии на checkbox
    checkbox.onclick = function() {
            var div = this.parentElement;  //переменную к родителю чекбокса

            if(div.className=='checked'){
                div.className='non';
            }
            else {
            div.className = 'checked';
            }
    }
   
 
    el.appendChild(checkbox);  //чекбокс кладем в элемент, в котором будет находиться наш текст

 
 var img = document.createElement("IMG");  //создаем img
 img.src = "trash.jpeg"; 
 img.style.width='20px';
 img.style.height='20px';
 img.style.marginLeft='100px';

  img.className = "close"; 
  
  el.appendChild(img);        //img кладем в элемент 


}
else {
    alert('input can\'t be null');
}
//для того, чтоб можно было удалять 
for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";   //не отображаем элемент, если нажали на иконку мусорки
       
        }
  }
 

}
