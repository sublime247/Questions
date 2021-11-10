const correctAns=['B','A','B','A','B', 'B', 'B', 'B','A','A']

const form =document.querySelector('form')
const cancel=document.querySelector('.cancel')

const result =document.querySelector('.answer')

cancel.addEventListener('click', ()=>{
    result.style.display='none'
});

//submitting

form.addEventListener('submit',(e)=>{
    e.preventDefault()
let score=0;
const chooseAns=[form.q1.value, form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value]

chooseAns.forEach((Ans, index)=>{
  if(Ans===correctAns[index]){
      score +=10;
  }  
});
scrollTo(0,0)
result.style.display='flex';

let output=0;
let timer=setInterval(() => {
    result.querySelector('span').textContent=`${output}%`
    if (output===score){
       clearInterval(timer)
    }else {
        output++;
    }
    
}, 15);

})