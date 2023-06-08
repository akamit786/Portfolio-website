// Get the form element
const contactForm = document.getElementById('contact-form');

// Add event listener for form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Get the user input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate the form fields
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  // Display a confirmation message
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Reset the form
  contactForm.reset();
});
// Smooth scroll to section
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

// Get the navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const target = link.getAttribute('href'); // Get the target section ID
    smoothScroll(target); // Call the smooth scroll function
  });
});

