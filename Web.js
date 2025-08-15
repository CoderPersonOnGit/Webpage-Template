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

// Box
let box = document.createElement('div');
box.style.width = '300px';
box.style.height = '150px';
box.style.backgroundColor = '#ddd'; 
box.style.margin = '20px auto'; 
document.body.appendChild(box);

//content
const content = document.createElement('div');
content.style.maxWidth = '600px';
content.style.margin = '40px auto';
content.style.fontSize = '18px';
content.style.lineHeight = '1.6';
content.style.color = '#333';

//image
const image = document.createElement('img');
image.src = 'https://via.placeholder.com/600x300';
image.alt = 'Sample Image';
image.style.display = 'block';
image.style.margin = '20px auto';
image.style.maxWidth = '100%';

//footer
const footer = document.createElement('footer');
footer.textContent = '© 2025 Sample Webpage';
footer.style.textAlign = 'center';
footer.style.padding = '20px';
footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.position = 'fixed';
footer.style.bottom = '0';
footer.style.width = '100%';
document.body.appendChild(footer);