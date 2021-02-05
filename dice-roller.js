let myFunction = () => {
    a = Math.floor(Math.random() * 6) + 1 
    b = Math.floor(Math.random() * 6) + 1 
    x = String(a)
    y = String(b) 
    console.log(a)
    
    document.getElementById('img1').src='img/dice'+x+'.png'
    document.getElementById('img2').src='img/dice'+y+'.png'

}