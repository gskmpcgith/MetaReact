fetch('http://localhost:8080/meta/api/endpoint', {
	        method: 'GET',
	        credentials: 'include' // Ensure cookies are included
	      })
	        .then(response => response.json())
	        .then(data => {
	          if (!data) {
	            window.location.href = 'http://localhost:8080/login';
	          } else {
	            setUsers(data);
	          }
	        })
	        .catch(error => console.error('Error fetching data:', error));