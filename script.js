
 
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });


  function closeMobileMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }




  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  reveals.forEach(r => io.observe(r));

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
        });
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => navIO.observe(s));



  function loadImage(input, areaId) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const area = document.getElementById(areaId);
     const img = area.querySelector('img');  
    const placeholder = area.querySelector('.img-placeholder');
    img.src = e.target.result;
    img.classList.add('loaded');
    placeholder.style.display = 'none';
    area.classList.add('has-image');
  };
  reader.readAsDataURL(file);
}


  const emailBtn=document.getElementById("email-btn");
    emailBtn.addEventListener("click", function (){
      window.location.href ="mailto:ryuichinina@gmail.com"
    } )

    

 

  const ghLink=document.querySelector(".github-lnk");
   ghLink.addEventListener("click", function (){
    window.open("https://github.com/rosninja21", "_blank");
   })
