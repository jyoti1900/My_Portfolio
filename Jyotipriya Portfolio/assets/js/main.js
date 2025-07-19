/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => navMenu.addEventListener('click', linkAction));
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is greater than 350 viewport height, add the show-scroll class to scrool-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabsContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabsContents.forEach((tabsContent) => {
            tabsContent.classList.remove("tab__active");
        });

        target.classList.add("tab__active");

        tabs.forEach((tab) => {
            tab.classList.remove("tab__active");
        });

        tab.classList.add("tab__active");
    });
});
/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById("contact-form"),
    contactName = document.getElementById("contact-name"),
    contactEmail = document.getElementById("contact-email"),
    contactSubject = document.getElementById("contact-subject"),
    contactMessage = document.getElementById("contact-message"),
    errorMessage = document.getElementById("error-message"),
    emailError = document.getElementById("email-error");

  document.getElementById("contact-email").addEventListener("blur", function () {
  const email = this.value;

  // Allowed domains
  const allowedDomains = /@[\w.-]+\.(com|in|edu|org|co\.in)$/i;

  // If email is not valid
  if (email && !allowedDomains.test(email)) {
    // Show alert once
    setTimeout(() => {
      alert("Only gmail.com, .in, .edu, .org, or .co.in domains are allowed.");
    }, 100); // Delay helps avoid repeated triggering

    this.value = "";
  }
});

const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has a value
    if (
        contactName.value === "" ||
        contactEmail.value === "" ||
        contactSubject.value === "" ||
        contactMessage.value === ""
    ) {
        //show message
        errorMessage.textContent = "Write all the input fields";
    } else {
        //serviceID - templateID - #form -publickey
        emailjs
            .sendForm(
                "service_styjeya", 
                "template_ko94e4m", 
                "#contact-form", 
                "ZyPGLfgQaQ3Vf7C4P"
            )
            .then(
                () => {
                    //Show message and add color, window + dot to open emoji
                    errorMessage.classList.add("color-first");
                    errorMessage.textContent = "Message Send ✅";

                    //remove message after 5 seconds
                    setTimeout(() => {
                        errorMessage.textContent = '';
                    }, 5000);
                },
                (error) => {
                    alert("OOps! SOMETHING WENT WORNG....", error);
                }
            );

        //clear input fields
        contactName.value = "";
        contactEmail.value = "";
        contactSubject.value = "";
        contactMessage.value = "";
    }
};

contactForm.addEventListener("submit", sendEmail);
