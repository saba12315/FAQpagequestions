script.js
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const question = item.querySelector('.accordion-question');

    question.addEventListener('click', () => {
      // Close all other items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle the clicked item
      item.classList.toggle('active');
    });
  });
});