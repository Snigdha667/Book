const but=document.querySelectorAll('.b');
const add=document.querySelector('#pl');
const del=document.querySelector('#del');
const list=document.querySelector('ul');
var valu=0;
var arr=[];
add.addEventListener('click',()=>{
    // const li=document.createElement('div');
    var ll= prompt('Plz enter your ticket content.');
    arr[valu]=ll;
    // li.innerHTML += ` <div  class="indiv">
    // // </div>`;
    // li.style.padding='2%';
    // li.style.margin='2%';
    // li.style.height='100px';
    // li.style.width='100px';
    // li.style.backgroundColor = 'yellow';
    // li.style.borderTop = 'solid 5px black';
    // but[0].addEventListener('click',function onClick(event) {
    //     // 👇️ change background color
    //     li.style.borderTop = 'solid 5px blue';
    //   });
    //   but[1].addEventListener('click',function onClick(event) {
    //     // 👇️ change background color
    //     li.style.borderTop = 'solid 5px pink';
    //   });
    //   but[2].addEventListener('click',function onClick(event) {
    //     // 👇️ change background color
    //     li.style.borderTop = 'solid 5px green';
    //   });
    //   but[3].addEventListener('click',function onClick(event) {
    //     // 👇️ change background color
    //     li.style.borderTop = 'solid 5px red';
    //   });
      // li.innerText=ll;
      valu=valu+1;
      sessionStorage.setItem(valu,ll);
      console.log(valu);
      console.log(sessionStorage.getItem(valu));
    // del.addEventListener('click',()=>{
    //     li.addEventListener('click',()=>{
    //         li.remove();
    //         sessionStorage.removeItem(valu);
    //     })
    // })
  
});
function f(){
  console.log(sessionStorage.length);
  console.log(valu);
  var x=1;
  while(x<sessionStorage.length){
    const li=document.createElement('div');
    li.style.padding='2%';
    li.style.margin='2%';
    li.style.height='100px';
    li.style.width='100px';
    li.style.backgroundColor = 'yellow';
    li.style.borderTop = 'solid 5px black';
    but[0].addEventListener('click',function onClick(event) {
      // 👇️ change background color
      li.style.borderTop = 'solid 5px blue';
    });
    but[1].addEventListener('click',function onClick(event) {
      // 👇️ change background color
      li.style.borderTop = 'solid 5px pink';
    });
    but[2].addEventListener('click',function onClick(event) {
      // 👇️ change background color
      li.style.borderTop = 'solid 5px green';
    });
    but[3].addEventListener('click',function onClick(event) {
      // 👇️ change background color
      li.style.borderTop = 'solid 5px red';
    });
    li.innerText=sessionStorage.getItem(x);
    console.log(sessionStorage.getItem(x));
    list.append(li);
    del.addEventListener('click',()=>{
      li.addEventListener('click',()=>{
        li.remove();
        sessionStorage.removeItem(x);
      })
    });
  x=x+1;
  }
}
f();
// function f(){
//    for(let i=1;i<=valu;i+=1){
//     var name = localStorage.getItem(`${i}`);
//     const li=document.createElement('li');
//     li.innerText=ttext;
//     list.append(li);
//    }
// }
// f();
