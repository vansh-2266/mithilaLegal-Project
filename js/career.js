// demo data for testing frontend
const jobs = [
    {
        title: "Content Writter",
        image: "img/someIconForTest/job1.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "2",
        applyLink: "#",
    },

    {
        title: "Associate Adv.",
        image: "img/someIconForTest/job2.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "4",
        applyLink: "#",
    },

    {
        title: "Content Writter",
        image: "img/someIconForTest/job1.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "2",
        applyLink: "#",
    },

    {
        title: "Associate Adv.",
        image: "img/someIconForTest/job2.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "4",
        applyLink: "#",
    },

    {
        title: "Content Writter",
        image: "img/someIconForTest/job1.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "2",
        applyLink: "#",
    },

    {
        title: "Associate Adv.",
        image: "img/someIconForTest/job2.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "4",
        applyLink: "#",
    },

    {
        title: "Content Writter",
        image: "img/someIconForTest/job1.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "2",
        applyLink: "#",
    },

    {
        title: "Associate Adv.",
        image: "img/someIconForTest/job2.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "4",
        applyLink: "#",
    },

    {
        title: "Content Writter",
        image: "img/someIconForTest/job1.png",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident aliquid perspiciatis alias saepe qui Vero id ipsam mollitia atque voluptates numquam architecto, error placeat sed cum reprehenderit laborum.",
        openPosition: "1",
        applyLink: "#",
    },

];


//Js operations on above test data &  career Page

const jobHeading = document.querySelector(".job-list-container h2");
const jobsContainer = document.querySelector(".job-list-container .jobs");

if(jobs.length == 0) {
    jobHeading.innerHTML = "No Position Available | 0 Job!"
}

const createJobListingCards = () => {
    jobs.forEach(job => {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");

        let image = document.createElement("img");
        image.src = job.image;

        let title = document.createElement("h3");
        title.classList.add("job-title");
        title.innerHTML = job.title;

        let details = document.createElement("div");
        details.classList.add("details");
        details.innerHTML = job.details;

        let detailsBtn = document.createElement("a");
        detailsBtn.classList.add("details-btn");
        detailsBtn.href = job.applyLink;
        detailsBtn.innerHTML = "Apply Here";

        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");

        if(job.openPosition == 1){
            openPositions.innerHTML = `${job.openPosition} open position`;
        }
        else{
            openPositions.innerHTML = `${job.openPosition} open positions`;
        }
        

        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
        
        jobsContainer.append(jobCard);
    })
}

createJobListingCards();




// accordian FAQ j s

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



