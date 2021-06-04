const userName = document.getElementById('userName')
const serach = document.getElementById('search')
const dataName = document.getElementById('name')
var namee ;

search.addEventListener('click',async(e)=>{
    e.preventDefault();
    try {
        const res = await axios.get(`https://api.github.com/users/${userName.value}`)
        namee = res.data.name
        dataName.innerHTML = res.data.name
    } catch (error) {
        
    }

})


// // x.map((x)=>{
// //     div.appendChild('p',x.name)
// // })

Image.setAttribute('src',res.data.avatar)