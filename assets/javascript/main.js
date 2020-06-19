
let mainElement = document.createElement('main')
document.body.append(mainElement)

let buttonElement = document.createElement('button')
buttonElement.className = 'PS5'
buttonElement.append('me')
document.body.append(buttonElement)


let imageElement = document.createElement('img')
imageElement.src ='https://specials-images.forbesimg.com/imageserve/5eebb4fa24bcb60006c70832/960x0.jpg?fit=scale'
mainElement.append(imageElement)

let anchorElement = document.createElement('a')
anchorElement.className = 'h'
anchorElement.append('here')
anchorElement.href = 'https://www.google.com/search?q=playstation+5&safe=strict&rlz=1C1CHBF_enUS892US892&sxsrf=ALeKk00LNA7EAJ4lWpw_Qbj9uDWWSlEmLA:1592600096572&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjjxJnY4Y7qAhWxHDQIHRwyCg0Q_AUoAXoECBoQAw&biw=1536&bih=754&dpr=1.25#imgrc=ajNJAKtlxKtN_M'
mainElement.append(anchorElement)

buttonElement.addEventListener('click',function(){
mainElement.remove()
})