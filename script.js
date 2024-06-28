function nextPage() {
    createHeartExplosion();
    setTimeout(() => {
        document.getElementById('replaceableDiv').innerHTML = `
        <div class="container">
        <div >
                <h1 class = "header_text">Hurrayyyy!!</h1>
            </div>
            <div class="gif_container">
                <div class="image-container">
                    <img src="yes.gif" alt="Cute animated illustration" class = "cropped-gif">
                </div>
                
            </div>
            
        
            <div class="promise">
                <p class="promise-text">"I promise to always stand by your side, no matter what challenges life brings our way. You'll never face anything alone."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"I vow to love you fiercely and wholeheartedly, every single day of our lives together.<br>My love for you will only grow stronger with time."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"I promise to always listen to you with an open heart and mind, respecting your thoughts, dreams, and aspirations."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"Together, we will build a life full of laughter, adventure, and shared dreams.<br>I promise to work tirelessly to create a future that exceeds our wildest imaginations."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"I am so grateful to have you in my life, and I promise to never take our love for granted.<br>You are my everything, and I cherish every moment we share."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"I vow to always be honest with you and to communicate openly and transparently.<br>Our relationship will be built on trust and understanding."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"I promise to create unforgettable memories with you, whether it's exploring new places, or simply enjoying quiet moments together at home."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"Your dreams are my dreams now too.<br>I promise to encourage and support you in every pursuit, helping you achieve all that you desire."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"I promise to always keep laughter in our lives, to find joy in the little things, and to never let a day go by without sharing a smile with you."</p>
            </div>

            <div class="promise">
                <p class="promise-text">"As we journey through life, I promise to grow alongside you, to learn from our experiences, and to evolve into the best versions of ourselves, together."</p>
            </div>
        </div>
        `
    }, 1500); // Redirect after 4 seconds to allow for a longer explosion
}

function createHeartExplosion() {
    const explosionContainer = document.getElementById('heart-explosion');
    explosionContainer.style.display = 'block';

    for (let i = 0; i < 100; i++) { // Increased to 150 hearts
        setTimeout(() => {
            createExplodingHeart(explosionContainer);
        }, 20); // Reduced delay for faster creation
    }
}

function createExplodingHeart(container) {
    const heart = document.createElement('div');
    heart.classList.add('exploding-heart');

    // Set initial position to center of screen
    // const startX = window.innerWidth/2;
    // const startY = window.innerHeight / 2;
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    // Random end position
    const endX = Math.random() * window.innerWidth;
    const endY = Math.random() * window.innerHeight;

    // Set initial position
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    // Random size (much larger now)
    const size = Math.random() * 150 + 100; // Between 100px and 200px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    container.appendChild(heart);

    // Animate
    heart.animate([
        { transform: 'scale(0) translate(0, 0)', opacity: 1 },
        { transform: `scale(1) translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
    ], {
        duration: 4000,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    });

    setTimeout(() => {
        heart.remove();
    }, 2000);
}


function moveButton() {
    const noButton = document.getElementById('noButton');
    // Get the button's current position
    const currentX = parseFloat(noButton.style.left) || 0;
    const currentY = parseFloat(noButton.style.top) || 0;
    // Calculate new position
    const maxX = window.innerWidth - noButton.offsetWidth - 85;
    const maxY = window.innerHeight - noButton.offsetHeight - 48;
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    // Ensure the new position is different from the current one
    while (Math.abs(newX - currentX) < 100 && Math.abs(newY - currentY) < 100) {
        newX = Math.random() * maxX;
        newY = Math.random() * maxY;
    }
    // Apply new position
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}



function createHeart() {
    const heart = document.createElement('img');
    heart.classList.add('floating-heart');
    heart.src = 'heart.png';  // Replace with your image path
    heart.alt = 'Floating heart';

    const size = Math.random() * 60 + 20; // Random size between 40px and 60px
heart.style.width = `${size}px`;
heart.style.height = `${size}px`;
    

    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    
    // Random animation duration
    heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
    heart.style.opacity = '0.8';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}