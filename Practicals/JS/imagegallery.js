 let currentImageIndex = 0;
        const images = ['Opera.png', 'insipirahub.jpg', 'midnight.jpg'];
        function openModal(imageUrl) {
            currentImageIndex = images.indexOf(imageUrl);
            document.getElementById('modalImg').src = imageUrl;
            document.getElementById('modal').style.display = 'flex';
        }
        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }
        function changeImage(step) {
            currentImageIndex += step;
            // Loop back to the first image if at the end
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            // Loop to the last image if at the beginning
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            }
            document.getElementById('modalImg').src = images[currentImageIndex];
        }
