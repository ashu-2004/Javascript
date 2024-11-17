console.log("hi");

const img = {
  img1: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img2: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img3: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img4: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img5: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img6: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img7: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img8: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img9: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  img10: "https://images.unsplash.com/photo-1723877896976-8eb1cc6f07b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
};

const video={
  v1:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v2:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v3:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v4:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v5:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v6:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v7:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v8:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v9:"https://www.youtube.com/watch?v=ultH9lO7y2s",
  v10:"https://www.youtube.com/watch?v=ultH9lO7y2s",
}

const main_div = document.querySelector(".imgs");
const imageWrapper = document.createElement("div");
imageWrapper.classList.add("search-result");
let images;
let imgEl;
let imageLink;
for (let key in img) {
    
  images = document.createElement("div");
  images.classList.add("search-results");
  imgEl = document.createElement("img");
  imgEl.src = img[key];
  imgEl.classList.add("images");
  imageLink = document.createElement("a");
  imageLink.href = img[key];  
  imgEl.dataset.videoKey = key;
  imageLink.appendChild(imgEl);
  images.appendChild(imageLink);
  imageWrapper.appendChild(images);
}
main_div.appendChild(imageWrapper);

let imgs=document.querySelectorAll('.images');

let soundEnabled = false;

// Enable sound after first click on the main container
main_div.addEventListener('click', () => {
    soundEnabled = true;
}, { once: true });

imgs.forEach((images)=>{
  images.addEventListener("mouseover", () => {
    const videoKey = images.dataset.videoKey;
    const videoUrl = video[`v${videoKey.slice(3)}`];
    // const videoUrl = video[`v${i}`];
    const videoEl = document.createElement("iframe");
    videoEl.width = 640;
    videoEl.height = 480;
    videoEl.src = videoUrl.replace("watch?v=", "embed/")+ "?autoplay=1&mute=1";
    videoEl.allow = "autoplay; encrypted-media";
    videoEl.style.position = "absolute"; // Positioning
    videoEl.style.top = "0"; // Align with image
    videoEl.style.left = "0"; // Align with image

    // Replace image with video
    const parentDiv = images.parentElement;
    parentDiv.innerHTML = ""; // Clear previous content
    parentDiv.appendChild(videoEl); // Add video

    videoEl.addEventListener('click', () => {
      videoEl.src += "&mute=0"; // Remove mute on click
    });

    image.addEventListener('mouseout', () => {
      parentDiv.innerHTML = ""; // Clear video
      parentDiv.appendChild(images); // Restore image
  }, { once: true }); 
  });
  // i++;
})
