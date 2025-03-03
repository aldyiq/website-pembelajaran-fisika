document.addEventListener("DOMContentLoaded", function() {
    
    function alignContent() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.textAlign = 'center';
        });
    }

    function handleButtonClick(event) {
        alert(`You clicked: ${event.target.textContent}`);
    }

    alignContent();

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll(".nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    function validateForm() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        if (name === "" || email === "") {
            alert("Semua bidang harus diisi!");
            return false;
        }
        return true;
    }

    const signInBtn = document.querySelector("button:nth-child(1)");
    signInBtn.addEventListener("click", function () {
        alert("Anda telah masuk dengan akun Gmail!");
    });

    async function fetchData() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            let data = await response.json();
            document.querySelector(".formula-box").innerHTML += `<p>${data.title}</p>`;
        } catch (error) {
            console.error("Gagal mengambil data", error);
        }
    }
    fetchData();
});

console.log("Hello World!");