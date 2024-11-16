// Fetch jobs and render them based on search criteria
document.getElementById('search-btn').addEventListener('click', () => {
    const title = document.getElementById('search-title').value.toLowerCase();
    const location = document.getElementById('search-location').value.toLowerCase();
  
    fetch('http://localhost:3000/jobs')
      .then((response) => response.json())
      .then((data) => {
        const filteredJobs = data.filter(job => {
          return (
            (!title || job.title.toLowerCase().includes(title)) &&
            (!location || job.location.toLowerCase().includes(location))
          );
        });
  
        displayJobs(filteredJobs);
      });
  });
  
  // Render job list
  function displayJobs(jobs) {
    const results = document.getElementById('results');
    results.innerHTML = '';
  
    if (jobs.length === 0) {
      results.innerHTML = '<p>No jobs found!</p>';
      return;
    }
  
    jobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.className = 'job-card';
  
      jobCard.innerHTML = `
        <div class="job-title">${job.title}</div>
        <div class="job-location">${job.location}</div>
      `;
  
      results.appendChild(jobCard);
    });
  }
  