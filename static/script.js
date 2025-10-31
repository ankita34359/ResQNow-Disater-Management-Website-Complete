document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(drop => {
      const button = drop.querySelector('.dropbtn');
  
      button.addEventListener('click', (e) => {
        e.preventDefault();
        // Close any other open dropdowns
        dropdowns.forEach(d => {
          if (d !== drop) d.classList.remove('active');
        });
        // Toggle this dropdown
        drop.classList.toggle('active');
      });
    });
  
    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', (e) => {
      dropdowns.forEach(drop => {
        if (!drop.contains(e.target)) drop.classList.remove('active');
      });
    });
  });
  