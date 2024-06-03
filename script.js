document.addEventListener("DOMContentLoaded", function() {
    const typeSpan = document.querySelector('.type');
    const typedItems = ["Designer", "Developer", "Freelancer"];
    let currentItem = 0;

    function changeTypedItem() {
        typeSpan.textContent = typedItems[currentItem];
        currentItem = (currentItem + 1) % typedItems.length;
    }

    setInterval(changeTypedItem, 1000); // Change item every 2 seconds
});
