// const URL_HOLDER = "https://jsonplaceholder.typicode.com";
// const container = document.querySelector(".container");
// const refs = {
//     getBtn: container.querySelector(".fetch"),
//     delBtn: container.querySelector(".delete"),
//     userTable:container.querySelector(".users-table")
// }

// const getUser = () => {
//   const users = fetch(`${URL_HOLDER}/users?_limit=10&_sort=name`)
//     .then((response) => response.json())
//     .then((users) => {
//         const markUp = createMarkUpUser(users);
//         refs.userTable.innerHTML = markUp;
//     });
// };

// const createMarkUpUser = (users) => {
//   const tableHead = `
//     <thead>
//         <tr>
//             <th>Full name</th>
//             <th>Company</th>
//             <th>Website</th>
//         </tr>
//     </thead>`;

//   const tableBody = users
//     .map((user) =>
//         `<tr>
//             <td>${user.name}</td>
//             <td>${user.company.name}</td>
//             <td>${user.website}</td>
//         </tr>`).join("");

//     return tableHead + tableBody;
// };

// const delUser = () => {
//     refs.userTable.innerHTML = '';
// }

// refs.getBtn.addEventListener("click", getUser);
// refs.delBtn.addEventListener("click", delUser);



//!=====================================================
const container = document.querySelector(".container");
const refs = {
    getBtn: container.querySelector(".fetch"),
    delBtn: container.querySelector(".delete"),
    beersTable:container.querySelector(".users-table")
}

const getBeers = () => {
  const beers = fetch(`https://api.sampleapis.com/beers/ale`)
    .then((response) => response.json())
    .then((beers) => {
        const markUp = createMarkUpUser(beers);
        refs.beersTable.innerHTML = markUp;
    });
};

const createMarkUpUser = (beers) => {
  const tableHead = `
    <thead>
        <tr>
            <th>Full name</th>
            <th>Price</th>
            <th>Rating</th>
        </tr>
    </thead>`;

  const tableBody = beers
    .map((beer) =>
        `<tr>
            <td>${beer.name}</td>
            <td>${beer.price}</td>
            <td>${Math.round(parseFloat(beer.rating.average) * 10) / 10}</td>
        </tr>`).join("");

    return tableHead + tableBody;
};

const delBeers = () => {
    refs.beersTable.innerHTML = '';
}

refs.getBtn.addEventListener("click", getBeers);
refs.delBtn.addEventListener("click", delBeers);