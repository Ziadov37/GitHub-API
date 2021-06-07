const search = document.getElementById('search')
const submit = document.getElementById('submit')
const dataName = document.getElementById('name')
const repos = document.getElementById('repos_url')
const repo = document.getElementById('repo')

// const avatar = document.getElementById('avatar_url')
// const image = document.getElementById('avatar_url').innerHTML=`<img src="">`
var namee ;

submit.addEventListener('click',async(e)=>{
    e.preventDefault();
    try {
        const res = await axios.get(`https://api.github.com/users/${search.value}`)
        namee = res.data.name
        dataName.innerHTML = res.data.name

        const reposs = await axios.get(`https://api.github.com/users/${search.value}`)
        repos.innerHTML= res.data.repos_url

        // const avatarr = await axios.get(`https://api.github.com/users/${search.value}`)
        // Image.innerHTML= res.data.avatar_url
        // Image.setAttribute('src',res.data.avatar_url)
let count = 0;
        const arepo = await axios.get(`https://api.github.com/users/${search.value}/repos`)
        repo.innerHTML= arepo;
        



        
        for (const key in arepo) {
           
                
          

          
            
           var data =  `${arepo.data[count].name}  `;
           var p = document.createElement('p');
            repo.appendChild(p).innerHTML = data

                
                count++
                


                
            
        }
        


    } catch (error) {
        
    }

})


// // x.map((x)=>{
// //     div.appendChild('p',x.name)
// // })

// Image.setAttribute('src',res.data.avatar)