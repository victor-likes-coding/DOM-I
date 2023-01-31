const siteContent = {
    // DO NOT CHANGE THIS OBJECT
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
    },
    "main-content": {
        "features-h4": "Features",
        "features-content":
            "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content":
            "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "services-h4": "Services",
        "services-content":
            "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content":
            "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content":
            "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io",
    },
    footer: {
        copyright: "Copyright Great Idea! 2021",
    },
    images: {
        "logo-img": "http://localhost:9000/img/logo.png",
        "cta-img": "http://localhost:9000/img/cta.png",
        "accent-img": "http://localhost:9000/img/accent.png",
    },
};

console.log("project wired!");

// do the nav first
const links = document.querySelectorAll("header nav a");
links.forEach((node, index) => {
    const data = Object.values(siteContent["nav"])[index];
    node.className = "italic";
    node.textContent = data;
});

// fix img
document.querySelector("#logo-img").setAttribute("src", siteContent.images["logo-img"]);

// cta section
const h1 = document.querySelector("h1");
const ctaButton = document.querySelector(".cta button");
const ctaImg = document.querySelector("#cta-img");

h1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.setAttribute("src", siteContent.images["cta-img"]);

// fix main content section
const contentData = siteContent["main-content"];
const values = Object.values(contentData);
const dataLength = Object.keys(contentData).length;

const textContentElements = document.querySelectorAll(".text-content");

for (let i = 0; i < dataLength; i += 2) {
    const header = values[i];
    const content = values[i + 1];

    const elementIndex = i / 2; // 0 -> 0, 2 -> 1, 4 -> 2
    const element = textContentElements[elementIndex];

    // get the corresponding h4/p
    const h4 = element.querySelector("h4");
    const p = element.querySelector("p");

    h4.textContent = header;
    p.textContent = content;
}

// fix middle image
document.querySelector("#middle-img").setAttribute("src", siteContent.images["accent-img"]);

// contact section

const contact = document.querySelector(".contact");
const contactChildren = contact.querySelectorAll("*");
const contactData = Object.values(siteContent.contact);

contactChildren.forEach((child, index) => {
    child.textContent = contactData[index];
});

// footer
const footerLink = document.querySelector("footer a");
footerLink.className = "bold";
footerLink.textContent = siteContent.footer.copyright;
