let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slide_button = document.querySelectorAll('.slide_button');
const videos = document.querySelectorAll('video');

function showSlide(index) {
    slides[currentSlide].classList.remove('headslide_show');
    slide_button[currentSlide].classList.remove('slide_button_active');
    currentSlide = index;
    slides[currentSlide].classList.add('headslide_show');
    slide_button[currentSlide].classList.add('slide_button_active');

    // Pause all videos
    videos.forEach(video => {
        video.pause();
    });

    // Play the video of the current slide
    const currentVideo = slides[currentSlide].querySelector('video');
    currentVideo.currentTime = 0;
    currentVideo.play();
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

slide_button.forEach((slide_button, index) => {
    slide_button.addEventListener('click', () => {
        showSlide(index);
    });
});

// Start the first video
showSlide(0);

// Listen for ended event on each video
videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
        nextSlide();
    });
});

//

document.addEventListener("DOMContentLoaded", function() {
    const featured_vid_nut_btns = document.querySelectorAll('.featured_vid_nut_btn');
    let featured_vid_nut_btnsid=document.getElementById("featured_vid_nut_btns");
    const icons = document.querySelectorAll('.featured_m_um_icon');
    let iconsid=document.getElementById("featured_m_um_icon");
    const featured_vid_muts1 = document.querySelectorAll('.featured_vid_mut1');
    const featured_vid_muts2 = document.querySelectorAll('.featured_vid_mut2');
    const featured_vid_muts3 = document.querySelectorAll('.featured_vid_mut3');
    const featured_vid_muts4 = document.querySelectorAll('.featured_vid_mut4');
    const featured_vid_muts5 = document.querySelectorAll('.featured_vid_mut5');


    // Initial state
    let isMuted = true;

    // Toggle mute/unmute function
    featured_vid_nut_btns.forEach((btn, index) => {
      btn.addEventListener('click', function() {
        if (isMuted) {
          // Unmute video and change icon to pause
          featured_vid_muts1[index].muted = false;
          featured_vid_muts2[index].muted = false;
          featured_vid_muts3[index].muted = false;
          featured_vid_muts4[index].muted = false;
          featured_vid_muts5[index].muted = false;
          icons[index].classList.remove('fa-volume-xmark');
          icons[index].classList.add('fa-volume-high');
          isMuted = false;
          featured_vid_nut_btnsid.style.backgroundColor="white";
          iconsid.style.color="black";

        } else {
          // Mute video and change icon to play
          featured_vid_muts1[index].muted = true;
          featured_vid_muts2[index].muted = true;
          featured_vid_muts3[index].muted = true;
          featured_vid_muts4[index].muted = true;
          featured_vid_muts5[index].muted = true;
          icons[index].classList.remove('fa-volume-high');
          icons[index].classList.add('fa-volume-xmark');
          isMuted = true;
          featured_vid_nut_btnsid.style.backgroundColor="transparent";
          iconsid.style.color="white";
        }
      });
    });
  });





