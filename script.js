document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("result");

    if(name === "" || email === "" || message === ""){
        result.innerHTML = "⚠️ Please fill all fields!";
        result.style.color = "red";
    } else {
        result.innerHTML = "✔️ Form submitted successfully!";
        result.style.color = "green";

        // Clear fields
        document.getElementById("contactForm").reset();
    }
});
