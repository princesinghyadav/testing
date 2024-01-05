function submitForm(){

    let name = document.getElementById('name').value;
          const age = document.getElementById('age').value;
    
          if (name && age) {
              const userData = { name, age };
              localStorage.setItem('userData', JSON.stringify(userData));
              document.getElementById('userForm').reset();
          } else {
              alert('Please enter both name and age.');
          }
      }
    
      function displayData() {
    
    const userData = JSON.parse(localStorage.getItem('userData'));
    const table = document.getElementById('userDataTable');
    
    
    if (userData) {
    
    const table = document.getElementById('userDataTable');
    table.innerHTML = `<tr><th>Name</th> <th>Age</th> </tr> <tr><td>${userData.name}</td> <td>${userData.age}</td> </tr>`;
    
    
    } else {
    alert('No data in LocalStorage.');
    }
    
    }
    