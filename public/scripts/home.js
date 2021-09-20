// creating tabs and class active
const tabs = document.querySelectorAll('.course-tabs li');
const tabContent = document.querySelector('.tab-content');
const h2 = tabContent.querySelector('h2')
const p = tabContent.querySelector('p')
tabs.forEach(e =>{
    e.addEventListener('click',function(){
        for (el of this.parentElement.children){
            el.classList.remove('active')
        }
        this.classList.add('active')
        h2.textContent = this.dataset.tab
        p.textContent = this.dataset.tab
    })
})

