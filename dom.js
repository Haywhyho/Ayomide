const blackButton=document.getElementById('but1')
const greyButton=document.getElementById('but2')
const resetButton=document.getElementById('but3')

blackButton.addEventListener('click', function(){
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
})

greyButton.addEventListener('click', function(){
    document.body.style.backgroundColor='grey'
    document.body.style.color='white'
})

resetButton.addEventListener('click', function(){
    document.body.style.backgroundColor='white'
    document.body.style.color='black'
})

//document.getElementById
//document.getElementsByClassName
//document.querySelector
//document.querySelectorAll

let header=document.getElementById('header')
console.log(header)
header.innerHTML='<i>This is our first DOM practice</i>'
// header.textContent='<i>This is our first DOM practice</i>'
// header.innerText'<i>This is our first DOM practice</i>'

header.style.backgroundColor='red'

let list_items=document.getElementsByClassName('list_items')[0]
console.log(list_items)


list_items.innerHTML='<b>I have been changed</b>'
list_items.style.fontWeight='bolder'

let list=document.getElementsByTagName('li')
console.log(list)
list=document.getElementsByTagName('li')[0]
list.style.color='green'



list=document.getElementsByTagName('li')[3]
list.innerHTML='<b>I have been changed</b>'
list.style.color='red'


let query=document.querySelector('#header')
console.log(query)
query.innerHTML='I have been queried'


let items=document.querySelector('.list_items')
console.log(items)
items.textContent='This is the effect of queryselector'

let lisst=document.querySelector('li')
console.log(lisst)
lisst.textContent='This is the effect of queryselector'


let listss=document.querySelectorAll('li')[2]
console.log(listss)
listss.textContent='This is the effect of queryselector'

items=document.querySelectorAll('.list_items')[0]
console.log(items)
items.textContent='This is the effect of queryselectorAll'

// const para=document.createElement('p');
// const node=document.createTextNode('This is new.');
// para.appendChild(node);
// console.log(para)
// const element=document.getElementById('div1');
// element.appendChild(para)


para=document.createElement('p');
node=document.createTextNode('This is new');
para.appendChild(node);

element=document.getElementById('div1');
const child=document.getElementById('p1');
element.insertBefore(para, child);



// let newElement=document.createElement('h1');
// let addClass=newElement.classList
// addClass.add('dompage')
// newElement.textContent='This is the new element';
// let referenceElement=document.getElementById('p1');
// referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);

newElement=document.createElement('h1');
newElement.textContent='This is the new element.';
newElement.setAttribute('id', 'para-1');
newElement.setAttribute('class', 'class-s-m-x');
let referenceElement=document.getElementById('p1');
referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling)


let img=document.querySelector('img')
console.log(img);
img.getAttribute('src');
img.setAttribute('id', 'image_class')


let site=document.querySelector('#link a')
console.log(site);
site.getAttribute('href');
site.setAttribute('href', 'https//www.google.com')

let imgs=document.querySelector('img')
img.src='https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
