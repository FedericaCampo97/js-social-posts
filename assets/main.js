const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

posts.forEach(element => {
    let idPost = element.id
    let postText = element.content
    let postMedia = element.media
    let authorName = element.author.name 
    let authorImage = element.author.image
    let numberLikes = element.likes
    let dateCreated = element.created

    let post = document.createElement('div')
    post.className = "post"
    
    let header = document.createElement('div')
    header.className = 'post__header'
    post.appendChild(header)
    
    let postMeta = document.createElement('div')
    postMeta.className = 'post-meta'
    header.appendChild(postMeta)
    
    let postIcon = document.createElement('div')
    postIcon.className = 'post-meta__icon'
    postMeta.appendChild(postIcon)

    //inizio condizione
    if (authorImage) {
        let profilePhoto = document.createElement('img')
        profilePhoto.className = 'profile-pic'
        profilePhoto.src = authorImage
        postIcon.appendChild(profilePhoto)
    } else {
        //altrimenti senza foto
        let imgNone = document.createElement('div')
        let authorSplit = authorName.split(' ')
        console.log(authorSplit)
        let initials = ''
        authorSplit.forEach(element => {
            initials += element.charAt(0)
        });
        imgNone.append(initials)
        imgNone.className = 'no-profile-pic'
        postIcon.appendChild(imgNone)

    }
    
    let datePublication = document.createElement('div')
    datePublication.className = 'post-meta__data'
 
    postMeta.appendChild(datePublication)

    let author = document.createElement('div')
    author.className = 'post-meta__author'
    author.append(authorName)
    datePublication.appendChild(author)

    let time = document.createElement('div')
    time.className = 'post-meta__time'
    let now = new Date()
    let date2 = new Date(dateCreated)
    let months = monthDiff(date2 , now)
    time.append(months + ' mesi fa')
    datePublication.appendChild(time)

    let text = document.createElement('div')
    text.className = 'post__text'
    text.append(postText)
    header.appendChild(text)

    let imagePost = document.createElement('div')
    imagePost.className = 'post__image'
    header.appendChild(imagePost)

    let image = document.createElement('img')
    image.src = postMedia
    imagePost.appendChild(image)

    let postFooter = document.createElement('div')
    postFooter.className = 'post__footer'
    post.appendChild(postFooter)

    let likeJs = document.createElement('div')
    likeJs.className = 'likes js-likes'
    postFooter.appendChild(likeJs)
 
    let likesCta = document.createElement('div')
    likesCta.className = 'likes__cta'
    likeJs.appendChild(likesCta)

    let likeButton = document.createElement('a')
    likeButton.className = 'like-button  js-like-button'
    likeButton.setAttribute('data-postid', idPost)
    likesCta.appendChild(likeButton)
    
    let likeButtonIcon = document.createElement('i')
    likeButtonIcon.className = 'like-button__icon fas fa-thumbs-up'
    likeButton.appendChild(likeButtonIcon)

    let likeButtonLable = document.createElement('span')
    likeButtonLable.className = 'like-button__label'
    likeButtonLable.append(' Mi Piace')
    likeButton.appendChild(likeButtonLable)

    let jsLikeCounter = document.createElement('b')
    jsLikeCounter.className = 'js-likes-counter'
    jsLikeCounter.setAttribute('id', 'like-counter-' + idPost)
    jsLikeCounter.append(numberLikes)

    let likeCounter = document.createElement('div')
    likeCounter.className = 'likes__counter'
    likeCounter.append('piace a ')
    likeCounter.appendChild(jsLikeCounter)
    likeCounter.append(' persone')
    
    likeJs.appendChild(likeCounter)

    //Funzione al click
    likeButton.addEventListener('click' , function(){
        //cambio colore
        likeButtonIcon.style.color = 'red'
        likeButtonLable.style.color = 'red'
        //aumento il numero di like
        jsLikeCounter.innerHTML = numberLikes + 1
    })




    



    


    let container = document.getElementById('container')
    container.appendChild(post)
    

})
