// ===== My site's JavaScript =====
// Complete each feature, then press "Check my features".

// Feature 1: Greeting by time of day
// Show "Good morning" (before 12), "Good afternoon" (before 17)
// or "Good evening" in #greeting.
const hour = new Date().getHours();
const greeting = document.querySelector("#greeting");
 
   if (hour < 12) {
     greeting.textContent = "Good morning";
       } else if (hour < 17) {
        greeting.textContent = "Good afternoon";
            } else {
              greeting.textContent = "Good evening";
               }
  


// Feature 2: Dark mode
// When #theme-toggle is clicked, toggle the class "dark" on document.body.
  const button = document.querySelector("#theme-toggle");

  button.addEventListener("click", () => {
     document.body.classList.toggle("dark");
  });

// Feature 3: Read more
// When #more-btn is clicked, toggle the class "hidden" on #more.
  const more = document.querySelector("#more-btn");
  const moreWords = document.querySelector("#more");


  more.addEventListener("click", () => {
     moreWords.classList.toggle("hidden");
  });


// Feature 4: Skills list
// Show each skill as an <li> inside #skills.
const skills = ["HTML", "CSS", "JavaScript"];
const list = document.querySelector("#skills")

for (const skill of skills ){
  const li = document.createElement("li");
  li.textContent = skill;
  list.append(li);
  }

// Feature 5: Contact form
// On submit: stop the page reloading. If the name is empty, show
// "Please enter your name." in #form-msg. Otherwise show "Thank you, NAME!"
const form = document.querySelector("#contact");
const name = document.querySelector("#contact-name");
const message = document.querySelector("#form-msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();          // stop the page reloading

  if (name.value=== "" ) {
    message.textContent = "Please enter your name.";
  } else {
    message.textContent = `Thnk you, ${name.value}.`;
  }
});
