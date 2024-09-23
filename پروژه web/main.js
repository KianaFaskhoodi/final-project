
    function openMail(personName) {
        var i, emailContents, emailItems;
        emailContents = document.getElementsByClassName("email-content");
        for (i = 0; i < emailContents.length; i++) {
            emailContents[i].classList.remove("active");
        }
        document.getElementById(personName).classList.add("active");
    }
     // آرایه‌ای از کاربران
let users = [
    {
        firstName: "Jane ",
        lastName: " Doe",
        email: "Jane.Doe@example.com",
        phoneNumber: "09121234567"
    },
    {
        firstName: "Borge",
        lastName: "Refsnes",
        email: "Borge.Refsnes@example.com",
        phoneNumber: "09131234567"
    },
    {
        firstName: "John",
        lastName: "Doe",
        email: "John.Doe@example.com",
        phoneNumber: "09141234567"
    }
];
console.log(users[0].firstName,lastName,email); 
console.log(users[1].firstName,lastName,email); 
console.log(users[2].firstName,lastName,email);