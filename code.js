let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // You may adjust this value as needed
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Function to hide all forms
function hideAllForms() {
    document.getElementById('personalInfoForm').style.display = 'none';
    document.getElementById('EducationalbackgroundForm').style.display = 'none';
    document.getElementById('HomeandFamForm').style.display = 'none';
    document.getElementById('HealthForm').style.display = 'none';
}

// Event listeners for all buttons
document.getElementById('btnPersonalInfo').addEventListener('click', function() {
    hideAllForms();
    document.getElementById('personalInfoForm').style.display = 'block';
});

document.getElementById('btnEducationalBackground').addEventListener('click', function() {
    hideAllForms();
    document.getElementById('EducationalbackgroundForm').style.display = 'block';
});

document.getElementById('btnHomeFamBackground').addEventListener('click', function() {
    hideAllForms();
    document.getElementById('HomeandFamForm').style.display = 'block';
});

document.getElementById('btnHealth').addEventListener('click', function() {
    hideAllForms();
    document.getElementById('HealthForm').style.display = 'block';
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbynAMVe3SoRs8Dlj9Qzj2d2sbEr5GHBnJKDQb_sv1CsLX6NDC450fdrDjBeDk96YsT_mA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Individual Inventory Record has been submitted');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form.reset()
        msg.innerHTML = "The form has been submitted"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        
      })
      .catch(error => console.error('Error!', error.message))
  })

  
