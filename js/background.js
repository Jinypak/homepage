const images = [
    "bg-1.png",
    "bg-2.png",
    "bg-3.png",
    "bg-4.png",
    "bg-5.png",
    "bg-6.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("bg-image")
bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);

// 원하는 위치에 삽입하기 inserBefore : 특정 노드 앞에 삽입
// document.body.insertBefore(bgImage, document.querySelector("form"));