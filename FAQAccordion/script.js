let questionList=document.querySelectorAll('.questionList');

questionList.forEach(ques=>{
    ques.addEventListener('click',(e)=>{
        console.log(ques,e.target.children[1])
        e.target.classList.toggle('active')
        e.target.children[1].classList.toggle('active')
        ques.classList.toggle('active')
    })
})