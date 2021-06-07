const search = document.getElementById('search')
const submit = document.getElementById('submit')
const dataName = document.getElementById('name')
const repos = document.getElementById('repos_url')
const repo = document.getElementById('repo')
const avatar = document.getElementById('avatar_url')

var namee ;

submit.addEventListener('click',async(e)=>{
    e.preventDefault();
    try {
        const res = await axios.get(`https://api.github.com/users/${search.value}`)
        namee = res.data.name
        dataName.innerHTML = res.data.name
        repos.innerHTML= res.data.repos_url
        avatar.setAttribute('src',res.data.avatar_url)
        
        
        let count = 0;
        const arepo = await axios.get(`https://api.github.com/users/${search.value}/repos`)
        // console.log(arepo)
        repo.innerHTML = ""
        for (const key in arepo) {
           var data =  arepo.data[count].name;
           var p = document.createElement('p');
            repo.appendChild(p).innerHTML = data          
                count++ 
        }
    } catch (error) {
        
    }

})