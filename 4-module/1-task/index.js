function makeFriendsList(friends) {
    const ul = document.createElement('ul');

    friends
        .map(user => `<li>${user.firstName} ${user.lastName}</li>`)
        .map(li => ul.innerHTML += li)
    return ul
}
