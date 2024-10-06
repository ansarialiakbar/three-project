document.addEventListener("DOMContentLoaded", function() {
   // Retrieve existing blogs from LocalStorage or initialize as an empty array
   const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

   // Display blogs on the home page (index.html)
   const blogList = document.getElementById('blog-list');
   if (blogList) {
      blogs.forEach((blog, index) => {
         const blogPost = document.createElement('div');
         blogPost.classList.add('blog-post');
         blogPost.innerHTML = `
            <h2>${blog.title}</h2>
            <h4>By: ${blog.poster}</h4>
            <img src="${blog.image}" alt="Blog image" class="blog-image">
            <p>${blog.description.substring(0, 100)}...</p>
            <button onclick="viewBlog(${index})">Read More</button>
         `;
         blogList.appendChild(blogPost);
      });
   }

   // Function to navigate to blog.html with the selected blog's index
   window.viewBlog = function(index) {
      window.location.href = `blog.html?index=${index}`;
   }

   // Retrieve and display the full blog content on blog.html
   const blogTitle = document.getElementById('blog-title');
   const blogPoster = document.getElementById('blog-poster');
   const blogImage = document.getElementById('blog-image');
   const blogDescription = document.getElementById('blog-description');
   const blogContent = document.getElementById('blog-content');

   // This block will only execute on blog.html
   if (blogTitle) {
      const urlParams = new URLSearchParams(window.location.search);
      const blogIndex = urlParams.get('index');

      if (blogIndex !== null && blogIndex >= 0 && blogIndex < blogs.length) {
         const blog = blogs[blogIndex];
         if (blog) {
            blogTitle.textContent = blog.title;
            blogPoster.textContent = `By: ${blog.poster}`;
            if (blogImage) { // Ensure the blogImage element exists
               blogImage.src = blog.image; // Set image on blog.html
            }
            blogDescription.textContent = blog.description;
            blogContent.textContent = blog.content;
         }
      }
   }

   // Open the "Add Blog" modal when "+" button is clicked
   const addBlogBtn = document.getElementById('add-blog-btn');
   const addBlogModal = document.getElementById('add-blog-modal');
   const blogForm = document.getElementById('blog-form');

   if (addBlogBtn && addBlogModal) {
      // Open modal
      addBlogBtn.onclick = function() {
         addBlogModal.style.display = 'flex';
      }

      // Close modal when clicking outside the modal content
      window.onclick = function(event) {
         if (event.target == addBlogModal) {
            addBlogModal.style.display = 'none';
         }
      }
   }

   // Handle adding a new blog via the form in the modal
   if (blogForm) {
      blogForm.onsubmit = function(event) {
         event.preventDefault(); // Prevent page refresh

         // Get values from the form inputs
         const newBlog = {
            title: document.getElementById('blog-title').value,
            poster: document.getElementById('blog-poster').value,
            image: document.getElementById('blog-image').value, // New image field
            description: document.getElementById('blog-description').value,
            content: document.getElementById('blog-content').value,
         };

         // Add the new blog to the blogs array
         blogs.push(newBlog);

         // Save updated blogs array to LocalStorage
         localStorage.setItem('blogs', JSON.stringify(blogs));

         // Close the modal and reload the page to update blog list
         addBlogModal.style.display = 'none';
         location.reload(); // Reload page to update blog list
      };
   }
});
