const text = "We are a group of students who are passionate about technology and programming. We have been working together on various projects and have developed a strong bond as a team. We are always eager to learn new things and take on new challenges. Our goal is to create innovative solutions that can make a positive impact on the world.";

let index = 0;

function typeParagraph() {
    if (index < text.length) {
        document.getElementById("typing-paragraph").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeParagraph, 25); // typing speed
    }
}

window.onload = typeParagraph;