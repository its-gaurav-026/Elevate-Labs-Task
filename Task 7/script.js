 async function loadUsers() {
      const container = document.getElementById('user-list');
      container.innerHTML = '<p>Loading...</p>';
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const users = await response.json();
        container.innerHTML = '';
        users.forEach(user => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
          `;
          container.appendChild(card);
        });
      } catch (error) {
        container.innerHTML = `<p style="color:red;">Failed to fetch users. ${error.message}</p>`;
      }
    }

    window.onload = loadUsers;