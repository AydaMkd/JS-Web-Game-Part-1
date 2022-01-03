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

function newSkyPiece(i) {
    for (let j = 1 ; j<= 5; j++)
    {
    const left = i * 100;
    const bottom = window.innerHeight - (100 * j)
    newImage("assets/sky.png", left, bottom);
    }
}

    function newGrassPiece(i) {
        for (let j = 0 ; j<= 4; j++)
        {
        const left = i * 100;
        const bottom= 100 *j;
       
        newImage("assets/grass.png", left,bottom);
        }
}
function Skypicture (){
    for (let i = 0 ; i <= window.outerWidth / 100; i++) {
        newSkyPiece(i)
        newGrassPiece(i)
    }
        
}

Skypicture()

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)





