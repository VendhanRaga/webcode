// https://makeup-api.herokuapp.com/api/v1/products.json



async function api(){
    v = fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    out = await v // responce
    prom = out.json() // promise
    output = await prom // output
    console.log(output[0])
  
    var data_all= document.querySelector('.makeup')
    var page = 1

    for (let i of output){
        try{
            var data = document.createElement('div')
            data.classList.add('card')
            //name
            var name = document.createElement('p')
            name.innerText=i.name
            data.append(name)
            console.log(i.name)
            // brand
            var brand = document.createElement('p')
            brand.innerText=i.brand
            data.append(brand)
            console.log(i.brand)
            //price
            var price = document.createElement('p')
            price.innerText=i.price
            data.append(price)
            console.log(i.price)
            //image
            var photo = document.createElement('img')
            
            photo.setAttribute('src',i.api_featured_image)
            data.append(photo)
            console.log(i.api_featured_image)
            //product link
            var link = document.createElement('p')
            link.innerText=i.product_api_url
            data.append(link)
            console.log(i.product_api_url)
            //discription
            var disc = document.createElement('p')
            link.innerText=i.description
            data.append(disc)
            console.log(i.description)

            data_all.append(data)
            
        
        }
        catch{
            //to handle error
        }
    }
}
api()

window.addEventListener('scroll',()=>{
    if((window.scrollY+window.innerHeight)>
    document.querySelector('body').offsetHeight){
           page++
 
    }
  })