var arr = [
    {name: 'eleven' , icon: '<i class="ri-user-add-line"></i>' , cat:'Stranger' , image: 'img1.jpg' },
    {name: 'shraddha' , icon: '<i class="ri-user-add-line"></i>' , cat:'Stranger' , image: 'img2.jpg' },
    {name: 'siya' , icon: '<i class="ri-user-add-line"></i>' , cat:'Stranger' , image: 'img3.jpg' },
    // {name: 'chhavi' , icon: '<i class="ri-user-add-line"></i>' , cat:'Stranger' , image: 'img4.jpg' },
   
]

function show(){
    var clutter = "" ;
    arr.forEach(function(elem,index){
       clutter += ` <div class="card">
       <div id="toppart">
           <img src="${elem.image}" alt="">
       </div>
    
       <div id="btpart">
           <h4>${elem.name}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consequuntur.</p>
            <h5 class="${elem.cat}">${elem.cat}</h5>
            <button id = "${index}"><i class="ri-user-add-line"></i></button>
       </div>
    </div>`
    })
    
    document.querySelector("#main").innerHTML = clutter
}

show() ;
var flag = 0 ;
document.querySelector("#main").addEventListener("click", function(dets){
  if(flag === 0){
    arr[dets.target.id].cat = "Friends" ;
    show() ;
    flag = 1 ;
  }
  else{
    arr[dets.target.id].cat = "Stranger" ;
    show() ;
    flag = 0 ;
  }
})