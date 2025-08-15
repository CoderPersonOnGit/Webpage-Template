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
        box.style.textContext = 'Add Bio Here'
        box.style.textAlign = 'center'
        box.style.fontSize = '10px'
        box.style.width = '300px';
        box.style.height = '150px';
        box.style.backgroundColor = '#ddd'; 
        box.style.margin = '20px auto'; 
        document.body.appendChild(box);

        //about me section
        const aboutsection = document.createElement('section');
        aboutsection.style.maxWidth = '600px';
        aboutsection.style.margin = '40px auto';
        aboutsection.style.padding = '20px';
        aboutsection.style.borderRadius = '8px';
        aboutsection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        document.body.appendChild(aboutsection);

        // about me Heading
        const aboutHeading = document.createElement('h2');
        aboutHeading.textContent = 'About Me';
        aboutHeading.style.textAlign = 'center';
        aboutsection.appendChild(aboutHeading);

        // about me Image
        const profilePic = document.createElement('img');
        profilePic.src = 'Insert Pfp Link';
        profilePic.alt = 'Your Photo';
        profilePic.style.display = 'block';
        profilePic.style.margin = '20px auto';
        profilePic.style.borderRadius = '50%';
        aboutsection.appendChild(profilePic);

        //content
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

        //image
        const image = document.createElement('img');
        image.src = 'Insert Webpage image link';
        image.alt = 'Sample Image';
        image.style.display = 'block';
        image.style.margin = '20px auto';
        image.style.maxWidth = '100%';
        document.body.appendChild(image);

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