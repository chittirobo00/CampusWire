const newsData = [
    {
        title: "Semester Exams Schedule Released",
        department: "cse",
        category: "exam",
        urgent: true,
        content: "Exams will start from April 10th.",
    },
    {
        title: "Tech Fest 2025",
        department: "cse",
        category: "event",
        urgent: false,
        content: "Annual tech fest registrations open.",
    },
    {
        title: "Management Workshop",
        department: "management",
        category: "event",
        urgent: false,
        content: "Leadership workshop this weekend.",
    },
    {
        title: "Sports Meet Announcement",
        department: "sports",
        category: "announcement",
        urgent: false,
        content: "Inter-college sports meet next month.",
    }
];

const newsContainer = document.getElementById("newsContainer");
const departmentFilter = document.getElementById("departmentFilter");
const categoryFilter = document.getElementById("categoryFilter");
const themeToggle = document.getElementById("themeToggle");

function displayNews(items) {
    newsContainer.innerHTML = "";
    items.forEach(news => {
        const card = document.createElement("div");
        card.className = "news-card";

        card.innerHTML = `
            <span class="badge">${news.category.toUpperCase()}</span>
            <h3>${news.title}</h3>
            <p><strong>Department:</strong> ${news.department.toUpperCase()}</p>
            <p>${news.content}</p>
            <div class="actions">
                <button onclick="bookmark()">🔖 Bookmark</button>
                <button onclick="share()">📤 Share</button>
            </div>
        `;

        newsContainer.appendChild(card);
    });
}

function filterNews() {
    let filtered = newsData;

    if (departmentFilter.value !== "all") {
        filtered = filtered.filter(n => n.department === departmentFilter.value);
    }

    if (categoryFilter.value !== "all") {
        filtered = filtered.filter(n => n.category === categoryFilter.value);
    }

    displayNews(filtered);
}

function bookmark() {
    alert("News bookmarked!");
}

function share() {
    alert("Sharing link copied!");
}

departmentFilter.addEventListener("change", filterNews);
categoryFilter.addEventListener("change", filterNews);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

displayNews(newsData);
