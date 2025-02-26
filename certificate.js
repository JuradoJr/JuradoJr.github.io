function filterProjects(filter) {
    // Get all the project containers
    const projectContainers = document.querySelectorAll('.details-container');
  
    // If 'all' filter is selected, show all projects
    if (filter === 'all') {
      projectContainers.forEach(container => container.style.display = 'block');
    } else {
      // Otherwise, filter based on the selected category
      projectContainers.forEach(container => {
        // If the container has the class corresponding to the filter, show it, else hide it
        if (container.classList.contains(filter)) {
          container.style.display = 'block';
        } else {
          container.style.display = 'none';
        }
      });
    }
  }
  