function newImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

// bonus solution 
for (let i = 0 ; i<= window.outerWidth/100; i++)
{
    newImage('assets/sky.png',i*100,window.innerHeight-100)

    newImage('assets/sky.png',i*100,window.innerHeight-200)


    newImage('assets/sky.png',i*100,window.innerHeight-300)



    newImage('assets/sky.png',i*100,window.innerHeight-400)


    newImage('assets/sky.png',i*100,window.innerHeight-500)

}


for (let i = 0 ; i<= window.outerWidth/100; i++)

{
newImage('assets/grass.png',i*100,0)
newImage('assets/grass.png',i*100,100)


newImage('assets/grass.png',i*100,200)

newImage('assets/grass.png',i*100,300)

newImage('assets/grass.png',i*100,400)
}


newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)




