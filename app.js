let Faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.`,
  },
  {
    question: "Is Frontend Mentor free?",
    answer: `  Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`,
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.`,
  },
];

let faqsContainer = document.querySelector(".faqs");

window.addEventListener("DOMContentLoaded", function () {
  Faqs.forEach(function (value) {
    let faqContainer = document.createElement("div");
    faqContainer.className = "faq";

    let questionContainer = document.createElement("div");
    questionContainer.className = "question";

    let h2 = document.createElement("h2");
    h2.textContent = value.question;

    let btn = document.createElement("img");
    btn.src = "assets/images/icon-plus.svg";

    questionContainer.appendChild(h2);
    questionContainer.appendChild(btn);

    let answerContainer = document.createElement("div");

    let par = document.createElement("p");
    par.textContent = value.answer;
    par.setAttribute("hidden", true);

    answerContainer.appendChild(par);

    faqContainer.appendChild(questionContainer);
    faqContainer.appendChild(answerContainer);

    faqsContainer.appendChild(faqContainer);

    h2.addEventListener("click", () => {
      par.toggleAttribute("hidden");
      if (btn.src.includes("plus")) {
        btn.src = "assets/images/icon-minus.svg";
      } else btn.src = "assets/images/icon-plus.svg";
    });

    btn.addEventListener("click", () => {
      par.toggleAttribute("hidden");
      if (btn.src.includes("plus")) {
        btn.src = "assets/images/icon-minus.svg";
      } else btn.src = "assets/images/icon-plus.svg";
    });
  });
});
