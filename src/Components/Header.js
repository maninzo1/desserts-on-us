






function Header() {

    fetch("http://localhost:3000/desserts")
    .then(res => res.json())
    .then(data => console.log(data))



    return "Title and logo"
}

export default Header