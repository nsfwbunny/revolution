const pageData = {
    title: "The Personal Revolution: How to Use AI to Multiply Your Income and Armor Your Career in 2025",
    sections: [
        {
            id: 'hero',
            className: 'hero-section',
            content: [
                { type: 'image', src: 'http://members.dmtreinamentos.online/wp-content/uploads/2023/02/LOGO-EXTRA-1.png', alt: 'Logo', style: { width: '15%', margin: '0 auto 20px auto', display: 'block' } },
                { type: 'h1', text: 'The Personal Revolution: How to Use AI to Multiply Your Income and Armor Your Career in 2025' }
            ]
        },
        {
            id: 'intro',
            className: 'intro-section',
            layout: 'columns',
            content: [
                { type: 'column', content: [
                    { type: 'image', src: 'http://members.dmtreinamentos.online/wp-content/uploads/2023/04/IMAGENS-BLAZER-B02-768x768-1.1-1.png', alt: 'Stressed professional', className: 'section-image' }
                ]},
                { type: 'column', content: [
                    { type: 'h2', text: 'Have you ever felt that lump in your throat?' },
                    { type: 'p', text: 'Imagine waking up at 3 a.m., cold sweat pouring down your throat, as chaotic market charts flash through your mind. Your boss looks at you with disdain, competitors overtake you, and fear whispers: "What if I fall behind? What if AI steals my job?"' },
                    { type: 'p', text: 'I know how it feels. Years ago, I was you. A lost professional, drowning in repetitive tasks, watching time slip away like sand through my fingers. Until one day, in a dark office in São Paulo, I decided: "Enough!" I discovered the power of AI—and now, I\'m taking you with me on this journey.' }
                ]}
            ]
        },
        {
            id: 'solution',
            className: 'solution-section',
            content: [
                { type: 'h2', text: 'What if this fear were your key to financial freedom?' },
                { type: 'p', text: 'Forget complicated theories or IT jargon. This is a treasure map, drawn by a master copywriter with over a decade of transforming lives. Think of me as your secret guide, revealing the secrets the "gurus" hide. With this guide, you will:' },
                { type: 'ul', className: 'benefits-list', items: [
                    '<strong>Command AI:</strong> Make it work for you, destroying complex tasks with the efficiency of an invisible army.',
                    '<strong>Automate 80%:</strong> Free up 5 hours a day, leaving boredom behind and focusing on what really pays.',
                    '<strong>Create Fortunes:</strong> Open doors to products and services that were once dreams, generating passive income that grows while you sleep.',
                    '<strong>Armor Your Career:</strong> Become indispensable, a leader that recruiters in 2025 will be begging to hire.'
                ]}
            ]
        },
        {
            id: 'journey',
            className: 'journey-section',
            content: [
                 { type: 'h2', text: 'Your journey starts now – and it\'s simpler than you think.' },
                 { type: 'p', text: 'Remember that night you swore to change? It brought you here. This guide is your roadmap, from zero to master, even without knowing what code is. Each module – Fundamentals, Programming, Models, Data, Deployment – is a step toward transforming your financial and professional life. Imagine waking up to emails from anxious clients, bills piled high, and the certainty that the future is yours.' }
            ]
        },
        {
            id: 'social-proof',
            className: 'social-proof-section',
            content: [
                { type: 'h2', text: 'But listen carefully: this isn\'t for everyone.' },
                { type: 'p', text: 'Over 10,000 people have already discovered how to turn things around.', className: 'large-stat' },
                { type: 'p', text: 'People like you—freelancers, entrepreneurs, students—who were sinking and are now earning five figures with AI.' },
                { type: 'div', className: 'testimonials', layout: 'columns', content: [
                    { type: 'column', className: 'testimonial', content: [
                        { type: 'image', src: 'http://members.dmtreinamentos.online/wp-content/uploads/2023/04/DEPOIMENTO-YOUTBE-1-781x1024-1.webp', alt: 'Testimonial 1', className: 'testimonial-image' },
                        { type: 'blockquote', text: '"Ana automated her business and earned $10,000 in 3 months."' }
                    ]},
                    { type: 'column', className: 'testimonial', content: [
                        { type: 'image', src: 'http://members.dmtreinamentos.online/wp-content/uploads/2023/04/DEPOIMENTO-YOUTBE-1-781x1024-2.webp', alt: 'Testimonial 2', className: 'testimonial-image' },
                        { type: 'blockquote', text: '"João created a course in a week and never looked back."' }
                    ]}
                ]},
                { type: 'p', text: 'What about you? Do you want to sit on the sidelines while they rise? <strong>Only 200 spots remain at $27</strong>—a ridiculous price for a value worth 10x more. But be careful: when they\'re gone, the price goes up. And you know what happens when you let an opportunity pass you by...' }
            ]
        },
        {
            id: 'cta',
            className: 'cta-section',
            content: [
                { type: 'h2', text: 'The decision is now—you either get up or you sink.' },
                { type: 'p', text: 'Click "Start Now" and join the elite who will dominate AI in 2025. Feel the power to create, automate, and secure your future. Share this with a friend—they\'ll thank you forever. The clock is ticking. Start now before it\'s too late.' },
                { type: 'a', text: 'Start Now', href: '#', className: 'cta-button' }
            ]
        },
        {
            id: 'footer',
            className: 'footer-section',
            content: [
                { type: 'p', text: '&copy; 2025 The Personal Revolution. All rights reserved.'}
            ]
        }
    ]
};

function createElement(data) {
    const el = document.createElement(data.type);
    if (data.text) el.innerHTML = data.text;
    if (data.href) el.href = data.href;
    if (data.src) el.src = data.src;
    if (data.alt) el.alt = data.alt;
    if (data.className) el.className = data.className;
    if (data.style) Object.assign(el.style, data.style);

    el.classList.add('animate-on-scroll');
    if (['h1', 'h2', 'p', 'blockquote'].includes(data.type)) {
        el.classList.add('fade-in-glow');
    } else if (data.type === 'image') {
        el.classList.add(Math.random() > 0.5 ? 'slide-in-from-right' : 'slide-in-from-left');
    } else if (data.className && data.className.includes('cta-button')) {
        el.classList.add('pulse');
    }
    return el;
}

function createSection(sectionData) {
    const section = document.createElement('section');
    section.id = sectionData.id;
    section.className = sectionData.className;

    const container = document.createElement('div');
    container.className = 'container';

    const processContent = (contentArray, parentElement) => {
        contentArray.forEach(item => {
            if (item.layout === 'columns') {
                const layoutContainer = document.createElement('div');
                layoutContainer.className = item.className || 'column-container';
                processContent(item.content, layoutContainer);
                parentElement.appendChild(layoutContainer);
            } else if (item.type === 'column') {
                const column = document.createElement('div');
                column.className = 'column';
                if (item.className) column.classList.add(item.className);
                processContent(item.content, column);
                parentElement.appendChild(column);
            } else if (item.type === 'ul') {
                const ul = document.createElement('ul');
                if (item.className) ul.className = item.className;
                item.items.forEach(liText => {
                    const li = document.createElement('li');
                    li.innerHTML = liText;
                    ul.appendChild(li);
                });
                parentElement.appendChild(ul);
            } else {
                parentElement.appendChild(createElement(item));
            }
        });
    };

    processContent(sectionData.content, container);
    section.appendChild(container);
    return section;
}

function setupIntersectionObserver() {
    const targets = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    targets.forEach(target => observer.observe(target));
}

function initParticles() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const particlesDiv = document.createElement('div');
    particlesDiv.id = 'tsparticles';
    heroSection.prepend(particlesDiv);

    (async () => {
        if (typeof tsParticles === 'undefined' || typeof loadDefaultPreset === 'undefined') {
            console.error('tsParticles library not loaded. Make sure the CDN scripts are in index.html.');
            return;
        }
        await loadDefaultPreset(tsParticles);
        await tsParticles.load({
            id: "tsparticles",
            options: {
                fullScreen: { enable: false },
                particles: {
                    number: { value: 80 },
                    color: { value: ["#00FFFF", "#FF00FF"] },
                    shape: { type: "star" },
                    opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 1 } },
                    size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 2 } },
                    move: { enable: true, speed: 2, direction: "none", random: true },
                    links: { enable: true, color: "#00FFFF", opacity: 0.2, distance: 150 }
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: "attract" } },
                    modes: { attract: { distance: 150, speed: 1 } }
                },
                detectRetina: true
            }
        });
    })();
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    if (!root || !pageData) {
        console.error("Missing #root element or pageData object.");
        return;
    };

    document.title = pageData.title;

    pageData.sections.forEach(sectionData => {
        const sectionElement = createSection(sectionData);
        root.appendChild(sectionElement);
    });

    setupIntersectionObserver();
    initParticles();
});
