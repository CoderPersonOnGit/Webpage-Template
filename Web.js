// roboto
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
document.head.appendChild(link);

//font load
document.fonts.ready.then(() => {
  // General page styling
  document.body.style.margin = '0';
  document.body.style.fontFamily = 'Roboto, sans-serif';
  document.body.style.backgroundColor = '#fafafa';
  document.body.style.padding = '2em';

  // Main container
  const container = document.createElement('div');
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  container.style.padding = '20px';
  container.style.paddingBottom = '100px'; // Prevent footer overlap
  document.body.appendChild(container);

  // Title
  const title = document.createElement('h1');
  title.textContent = 'Webpage';
  title.style.textAlign = 'center';
  title.style.fontSize = '40px';
  title.style.color = '#000';
  title.style.opacity = '0';
  title.style.transition = 'opacity 1s ease-in';
  setTimeout(() => {
  title.style.opacity = '1';
  }, 100);
  container.insertBefore(title, container.firstChild);

  // Subtitle
  const subtitle = document.createElement('p');
  subtitle.textContent = 'Editable Template';
  subtitle.style.textAlign = 'center';
  subtitle.style.color = '#666';
  subtitle.style.fontSize = '18px';
  container.appendChild(subtitle);

  // Tabs
  const tabContainer = document.createElement('div');
  tabContainer.style.display = 'flex';
  tabContainer.style.justifyContent = 'center';
  tabContainer.style.gap = '10px';
  tabContainer.style.marginBottom = '30px';
  container.appendChild(tabContainer);

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
    button.addEventListener('click', () => {
      alert(`You clicked ${label}`);
    });
    tabContainer.appendChild(button);
  });

  // Bio Box
  const box = document.createElement('div');
  box.textContent = 'Add Bio Here';
  box.style.textAlign = 'center';
  box.style.fontSize = '20px';
  box.style.width = '300px';
  box.style.height = '150px';
  box.style.backgroundColor = '#ddd';
  box.style.margin = '20px auto';
  box.style.lineHeight = '150px';
  box.contentEditable = true;
  box.style.cursor = 'text';
  container.appendChild(box);

  // About Me Section
  const aboutSection = document.createElement('section');
  aboutSection.style.maxWidth = '600px';
  aboutSection.style.margin = '40px auto';
  aboutSection.style.padding = '20px';
  aboutSection.style.borderRadius = '8px';
  aboutSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  container.appendChild(aboutSection);

  const aboutHeading = document.createElement('h2');
  aboutHeading.textContent = 'About Me';
  aboutHeading.style.textAlign = 'center';
  aboutSection.appendChild(aboutHeading);

  const profilePic = document.createElement('img');
  profilePic.src = 'https://via.placeholder.com/150';
  profilePic.alt = 'Profile photo placeholder';
  profilePic.style.display = 'block';
  profilePic.style.margin = '20px auto';
  profilePic.style.borderRadius = '50%';
  aboutSection.appendChild(profilePic);

  // Content Section
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
  container.appendChild(content);

  // Main Image
  const image = document.createElement('img');
  image.src = 'https://via.placeholder.com/600x400';
  image.alt = 'Sample landscape image';
  image.style.display = 'block';
  image.style.margin = '20px auto';
  image.style.maxWidth = '100%';
  container.appendChild(image);

  // Contact Section
  const contactSection = document.createElement('section');
  contactSection.style.maxWidth = '600px';
  contactSection.style.margin = '40px auto';
  contactSection.style.padding = '20px';
  contactSection.style.borderRadius = '8px';
  contactSection.style.backgroundColor = '#f0f0f0';
  contactSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  container.appendChild(contactSection);

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'Email: you@example.com';
  contactInfo.style.textAlign = 'center';
  contactSection.appendChild(contactInfo);

  // Footer
  const footer = document.createElement('footer');
  footer.textContent = '© 2025 Sample Webpage';
  footer.style.textAlign = 'center';
  footer.style.padding = '20px';
  footer.style.backgroundColor = '#333';
  footer.style.color = '#fff';
  footer.style.position = 'fixed';
  footer.style.bottom = '0';
  footer.style.width = '100%';
  footer.style.height = '60px';
  container.style.paddingBottom = '60px';
  document.body.appendChild(footer);
});
