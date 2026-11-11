/* Original: /Users/roger/Sites/coding-algorithms/LinkedInPractice/PeopleFeed/peopleFeed.js | https://github.com/rogerprz/coding-algorithms/blob/main/LinkedInPractice/PeopleFeed/peopleFeed.js */
const PEOPLE_DATA = [
  { id: 1, name: "Sarah Chen", title: "Product Designer at Google" },
  { id: 2, name: "Mike Johnson", title: "Full Stack Engineer at Meta" },
  { id: 3, name: "Emma Wilson", title: "Data Scientist at AWS" },
  { id: 4, name: "Alex Turner", title: "UX Lead at Apple" },
  { id: 5, name: "Jessica Lee", title: "Backend Engineer at Netflix" },
];

let currentIndex = 0;
const peopleList = document.querySelector(".people-list");
const seeMoreBtn = document.querySelector(".see-more-btn");

// EVENT DELEGATION: Single listener on container instead of individual buttons
peopleList.addEventListener("click", (e) => {
  const connectBtn = e.target.closest("button:not(.close-btn)");
  const closeBtn = e.target.closest("button.close-btn");

  if (connectBtn) {
    handleConnect(connectBtn);
  }

  if (closeBtn) {
    handleClose(closeBtn);
  }
});

// See More Button - Simulates API call
seeMoreBtn.addEventListener("click", () => {
  loadMorePeople();
});

function loadMorePeople() {
  // Simulate API delay
  seeMoreBtn.disabled = true;
  seeMoreBtn.textContent = "Loading...";

  setTimeout(() => {
    const batch = PEOPLE_DATA.slice(currentIndex, currentIndex + 2);
    batch.forEach((person) => {
      peopleList.appendChild(createPersonCard(person));
    });
    currentIndex += 2;

    seeMoreBtn.disabled = false;
    seeMoreBtn.textContent =
      currentIndex >= PEOPLE_DATA.length ? "No more people" : "See more";

    if (currentIndex >= PEOPLE_DATA.length) {
      seeMoreBtn.disabled = true;
    }
  }, 600);
}

function createPersonCard(person) {
  const article = document.createElement("article");
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  article.innerHTML = `
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Crect fill='%23667eea' width='56' height='56' rx='50'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-weight='bold' font-size='20'%3E${initials}%3C/text%3E%3C/svg%3E" alt="${person.name}" class="avatar" width="56" height="56">
        <div class="person-info">
          <a href="#" class="person-name">${person.name}</a>
          <div class="person-title">${person.title}</div>
          <div class="actions">
            <button class="primary" data-action="connect" data-id="${person.id}">Connect</button>
          </div>
        </div>
        <button class="close-btn" aria-label="Close" data-id="${person.id}">×</button>
      `;

  return article;
}

function handleConnect(btn) {
  btn.textContent = "Pending...";
  btn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    btn.textContent = "Connected";
    btn.style.opacity = "0.6";
  }, 400);
}

function handleClose(btn) {
  const article = btn.closest("article");
  article.style.opacity = "0";
  article.style.transition = "opacity 0.3s";

  setTimeout(() => {
    article.remove();
  }, 300);
}

// Load initial batch
// loadMorePeople();
