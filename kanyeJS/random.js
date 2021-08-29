const randomUsers = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
randomUsers();
const displayUsers = user =>{
    const userName = user.results;
    const divId = document.getElementById('userId')
    for(const va of userName){
        console.log(va.email)
        const p = document.createElement('p')
        p.innerText = `Name: ${va.name.first} ${va.name.last}
        Email: ${va.email}`;
        divId.appendChild(p)
        
    }
    
}