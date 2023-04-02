const family = [
    {member: 'mother', id: 111, coffee: 'Irish'},
    {member: "father", id: 222, coffee: "Ristretto"},
    {member: "son", id: 333, coffee: "Lungo"},
]

const getCoffee = (member) => {
    const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
    return coffeePromise
        .then(data => data.json())
        .then(list => {
            const coffee = list.find(res => res.title === member.coffee);
            console.log(coffee);
            return {
                ...member, 
                coffee: coffee
            }
        })
}

const getFamilyMember = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id);
            if (member){
                resolve(member);
            } else{
                reject(Error('Doesn`t find that member'));
            }
        }, 1500)
    })
}

getFamilyMember(222)
    .then(data => {
        return getCoffee(data);
    })
    .then(newMember => {
        console.log('newMember: ', newMember)
    })
    .catch( err => {
      console.log(err);  
    })
