// Data for prompt cards
const promptsData = [
    {
        id: 1,
        title: "Build a FULL AI App in 3 prompts (NEW LOVABLE Cloud + AI update)",
        description: "Follow along as we build a complete competition tracking app with AI features, image recognition, and automated notifications.",
        category: "beginner",
        categoryLabel: "Beginner",
        promptsCount: 8,
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
        link: "/prompts/1"
    },
    {
        id: 2,
        title: "Build AI Restaurant Voice Receptionist (Complete Implementation)",
        description: "Learn how to create a complete AI-powered restaurant voice receptionist with OpenAI Realtime API, reservation management, and email confirmations using Lovable Cloud.",
        category: "advanced",
        categoryLabel: "Advanced",
        promptsCount: 1,
        thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=450&fit=crop",
        link: "/prompts/10"
    },
    {
        id: 3,
        title: "AI-Powered Motivational Shorts Generator with Sora 2",
        description: "Build a premium SaaS that generates viral motivational shorts using OpenAI Sora 2 video generation",
        category: "ai-agents",
        categoryLabel: "AI Agents",
        promptsCount: 1,
        thumbnail: "https://images.unsplash.com/photo-1636690598798-8ab3f2f1cda3?w=800&h=450&fit=crop",
        link: "/prompts/11"
    },
    {
        id: 4,
        title: "AI Voice Sales Agent with LinkedIn Enrichment",
        description: "Build a complete AI-powered outbound sales calling system with LinkedIn enrichment via Apify. The AI agent makes intelligent cold calls using OpenAI Realtime API and Twilio, personalizes conversations with LinkedIn data, qualifies leads, and books meetings.",
        category: "ai-agents",
        categoryLabel: "AI Agents",
        promptsCount: 1,
        thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop",
        link: "/prompts/13"
    },
    {
        id: 5,
        title: "I Built A Team of 5 AI Agents in Lovable Cloud (ONLY Prompts)",
        description: "Create a comprehensive AI-powered content creation platform with multiple agents working together to generate YouTube content ideas.",
        category: "advanced",
        categoryLabel: "Advanced",
        promptsCount: 11,
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop",
        link: "/prompts/2"
    },
    {
        id: 6,
        title: "Replace n8n With ONLY 5 Prompts (Lovable CLOUD Agents)",
        description: "Create an intelligent customer care system with multiple AI agents that integrates with Zendesk to automatically handle support tickets.",
        category: "advanced",
        categoryLabel: "Advanced",
        promptsCount: 7,
        thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=450&fit=crop",
        link: "/prompts/3"
    },
    {
        id: 7,
        title: "10 Prompts = Full AI SaaS with Lovable Cloud (Better Than n8n)",
        description: "Create a complete AI-powered content repurposing platform that transforms YouTube videos into Twitter threads, LinkedIn posts, and email newsletters using APIFY and AI.",
        category: "advanced",
        categoryLabel: "Advanced",
        promptsCount: 10,
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
        link: "/prompts/4"
    },
    {
        id: 8,
        title: "Build Lovable Cloud Agents With MEMORY (3 Prompts + Mem0)",
        description: "Create an advanced multi-agent AI system with persistent memory using Mem0 that learns and improves over time based on user preferences and feedback.",
        category: "advanced",
        categoryLabel: "Advanced",
        promptsCount: 9,
        thumbnail: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&h=450&fit=crop",
        link: "/prompts/5"
    },
    {
        id: 9,
        title: "I Built a Business That AI Agents Run (Lovable Cloud - COPY THIS!)",
        description: "I built a complete marketing agency that gets run by AI agents in Lovable Cloud - lead intake, brand research, content creation, and client delivery all automated.",
        category: "ai-agents",
        categoryLabel: "AI Agents",
        promptsCount: 2,
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
        link: "/prompts/6"
    },
    {
        id: 10,
        title: "4 Prompts → Full AI SaaS App That Makes Money (Lovable AI Agents)",
        description: "Complete guide to building an AI-powered personalized newspaper SaaS with Stripe subscriptions, Mem0 memory, and daily edition generation",
        category: "full-stack",
        categoryLabel: "Full Stack",
        promptsCount: 4,
        thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop",
        link: "/prompts/7"
    },
    {
        id: 11,
        title: "The 5-Part Prompt Framework for AI Agent Apps (Copy This Structure)",
        description: "If you've tried building AI systems and gotten broken results - design is off, features don't work, nothing like you imagined - this video is for you. After building 20+ apps, I've created a 5-part framework that will 10x your prompting. Learn exactly why some get perfect apps while others struggle.",
        category: "prompting",
        categoryLabel: "prompting",
        promptsCount: 1,
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
        link: "/prompts/8"
    },
    {
        id: 12,
        title: "AI WhatsApp Receptionist for Dental Clinic",
        description: "Build a fully automated WhatsApp booking system with an AI receptionist that handles appointments, answers questions, and manages patient communications 24/7.",
        category: "ai-automation",
        categoryLabel: "AI & Automation",
        promptsCount: 1,
        thumbnail: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=450&fit=crop",
        link: "/prompts/9"
    }
];

// State
let currentFilter = 'all';
let currentSearch = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCards(promptsData);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            currentFilter = btn.dataset.filter;
            filterAndSearch();
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterAndSearch();
    });
}

// Filter and search logic
function filterAndSearch() {
    let filtered = promptsData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(prompt => prompt.category === currentFilter);
    }

    // Apply search filter
    if (currentSearch) {
        filtered = filtered.filter(prompt => 
            prompt.title.toLowerCase().includes(currentSearch) ||
            prompt.description.toLowerCase().includes(currentSearch) ||
            prompt.categoryLabel.toLowerCase().includes(currentSearch)
        );
    }

    renderCards(filtered);
}

// Render cards
function renderCards(prompts) {
    const cardsGrid = document.getElementById('cardsGrid');

    if (prompts.length === 0) {
        cardsGrid.innerHTML = `
            <div class="no-results">
                <h3>Không tìm thấy kết quả</h3>
                <p>Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
            </div>
        `;
        return;
    }

    cardsGrid.innerHTML = prompts.map(prompt => `
        <a href="${prompt.link}" class="card">
            <div class="card-image-wrapper">
                <img src="${prompt.thumbnail}" alt="${prompt.title}" class="card-image" loading="lazy">
                <div class="play-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                </div>
                <div class="card-badge badge-${prompt.category}">
                    ${prompt.categoryLabel}
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${prompt.title}</h3>
                <p class="card-description">${prompt.description}</p>
                <div class="card-footer">
                    <span class="prompts-count">${prompt.promptsCount} prompts</span>
                    <span class="view-all-btn">
                        View All →
                    </span>
                </div>
            </div>
        </a>
    `).join('');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

