// var typed= new Typed (".text", {
//     Strings:["Frontend Developer","Web Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true,
// })

const options = {
    strings: [" Web Developer", " Frontend Developer","Full Stack Developer"], // List of titles you want to display
    typeSpeed: 100, // Speed of typing in milliseconds
    backSpeed: 50, // Speed of backspacing in milliseconds
    backDelay: 1000, // Delay before backspacing starts
    loop: true, // Loop the animation indefinitely
};
// Create a new Typed instance
const typed = new Typed(".text", options);

