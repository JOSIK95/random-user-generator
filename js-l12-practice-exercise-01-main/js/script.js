const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
    const usersRequest = await fetch("https://randomuser.me/api?results=5");
    const data = await usersRequest.json();
    const userResults = data.results;
    displayUsers(userResults);
};
getData();

const displayUsers = function (userResults){
    randomFolks.innerHTML = "";

    for (const user of userResults){
const country = user.location.country;
const name = user.name.first;
const imageUrl = user.picture.medium;
const userDiv = document.createElement("div");
userDiv.innerHTML = `<h3>${name}</h3><p>${country}</p><img src = ${imageUrl} alt="User avatar" />`;
randomFolks.append(userDiv);
    }

};