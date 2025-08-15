document.body.style.margin = '0';
document.body.style.fontFamily = 'Open Sans, sans-serif'; 
document.body.style.backgroundColor = '#fafafa'; 
document.body.style.padding = '2em';

// Title
const title = document.createElement("h1");
title.textContent = 'Webpage';
title.style.textAlign = 'center'; 
title.style.fontSize = '40px';
document.body.appendChild(title);

// Subtitle
const subtitle = document.createElement("p");
subtitle.textContent = 'Editable Template';
subtitle.style.textAlign = 'center'; 
subtitle.style.color = '#666';
document.body.appendChild(subtitle);

//tabs
const tabContainer = document.createElement('div');
tabContainer.style.display = 'flex';
tabContainer.style.justifyContent = 'center';
tabContainer.style.gap = '10px';
document.body.appendChild(tabContainer);

const tabLabels = ['page1', 'page2', 'page3'];

tabLabels.forEach(label => {
  const button = document.createElement('button');
  button.textContent = label;
  button.style.padding = '10px 20px';
  button.style.border = 'none';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
  button.style.backgroundColor = '#ccc';
  button.style.color = '#000';

  tabContainer.appendChild(button);
});

// Box
let box = document.createElement('div');
box.textContent = 'Add Bio Here';
box.style.textAlign = 'center';
box.style.fontSize = '20px';
box.style.width = '300px';
box.style.height = '150px';
box.style.backgroundColor = '#ddd'; 
box.style.margin = '20px auto'; 
document.body.appendChild(box);

// About Me Section
const aboutsection = document.createElement('section');
aboutsection.style.maxWidth = '600px';
aboutsection.style.margin = '40px auto';
aboutsection.style.padding = '20px';
aboutsection.style.borderRadius = '8px';
aboutsection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
document.body.appendChild(aboutsection);

// About Me Heading
const aboutHeading = document.createElement('h2');
aboutHeading.textContent = 'About Me';
aboutHeading.style.textAlign = 'center';
aboutsection.appendChild(aboutHeading);

// About Me Image
const profilePic = document.createElement('img');
profilePic.src = 'https://via.placeholder.com/150';
profilePic.alt = 'Your Photo';
profilePic.style.display = 'block';
profilePic.style.margin = '20px auto';
profilePic.style.borderRadius = '50%';
aboutsection.appendChild(profilePic);

// Content
const content = document.createElement('div');
content.style.maxWidth = '600px';
content.style.margin = '40px auto';
content.style.fontSize = '18px';
content.style.lineHeight = '1.6';
content.style.color = '#333';
content.innerHTML = `
<h2 style="text-align:center;">Welcome to My Page</h2>
<p>Insert Content Here.</p>
<p>Insert Secondary Content Here.</p>`;
document.body.appendChild(content);

// Image
const image = document.createElement('img');
image.src = 'https://via.placeholder.com/600x400';
image.alt = 'Sample Image';
image.style.display = 'block';
image.style.margin = '20px auto';
image.style.maxWidth = '100%';
document.body.appendChild(image);

// Footer
const footer = document.createElement('footer');
footer.textContent = '© 2025 Sample Webpage';
footer.style.textAlign = 'center';
footer.style.padding = '20px';
footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.position = 'relative';
footer.style.bottom = '0';
footer.style.width = '100%';
document.body.appendChild(footer);