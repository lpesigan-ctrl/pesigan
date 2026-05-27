const text = "I am a student who is passionate about technology and programming. I have been working on various projects and have developed a strong interest in this field. I am always eager to learn new things and take on new challenges. My goal is to create innovative solutions that can make a positive impact on the world.";

let index = 0;

function typeParagraph() {
    if (index < text.length) {
        document.getElementById("typing-paragraph").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeParagraph, 25);
    }
}

window.onload = typeParagraph;
