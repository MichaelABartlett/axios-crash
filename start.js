
// the You Tube site is
// https://www.youtube.com/watch?v=6LyagkoRWYA

// i am currently at 15.30 in the time line



// GET REQUEST
// this is the long way
// function getTodos() {
//   axios({
//     method: 'get',
//     url: 'https://jsonplaceholder.typicode.com/todos',
//     params: {
//       _limit: 5
//     }
//   })
//     .then(res => showOutput(res))
//     .catch(err => console.error(err));
// }

// this is the shorter way
function getTodos() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}


// POST REQUEST
// function addTodo() {
//   axios({
//     method: 'post',
//     url: 'https://jsonplaceholder.typicode.com/todos',
//     data: {
//       title: 'New Todo',
//       completed: false,
//       other: 'just stuff'
//     }
//   })
//   .then(res => showOutput(res))
//   .catch(err => console.error(err));
// }
// a shorter way to do the same thing
function addTodo() {
  axios.post('https://jsonplaceholder.typicode.com/todos',{
      title: 'New Todo',
      completed: false,
      other: 'just stuff'
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}



// PUT/PATCH REQUEST
// put replaces the entire item
// patch only changes what you specify
function updateTodo() {
  axios.put('https://jsonplaceholder.typicode.com/todos/1',{  // we know to put the /1 by looking at the documentation
      title: 'Updated Todo',
      completed: true,
      other: 'just stuff'
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

// now we are looking at patch 
function updateTodo() {
  axios.patch('https://jsonplaceholder.typicode.com/todos/1',{  // we know to put the /1 by looking at the documentation
      //title: 'Updated Todo',
      completed: true,
      other: 'just stuff'
  })
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1',)  // we know to put the /1 by looking at the documentation
  
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  console.log('Simultaneous Request');
}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
