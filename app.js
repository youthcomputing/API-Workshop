fetch ('https://api.github.com/users/dhvani35729')
  .then (response => response.json ())
  .then (data => {
    console.log (data);
    var greetingNode = document.getElementById ('greeting');
    greetingNode.innerHTML += ' ' + data.login + '!';
    var bioNode = document.getElementById ('userBio');
    bioNode.innerHTML = data.bio;
    var userImageNode = document.getElementById ('userImg');
    userImageNode.src = data.avatar_url;
    userImageNode.width = 200;
  });

function loadUsers () {
  console.log ('Loading users..');
  fetch ('https://reqres.in/api/users')
    .then (res => res.json ())
    .then (data => {
      console.log (data);
      var userTable = document.getElementById ('userTable');

      data.data.forEach (user => {
        console.log (user.email);
        var newRow = userTable.insertRow ();
        var colId = document.createElement ('th');
        var colName = document.createElement ('th');
        var colEmail = document.createElement ('th');
        let textId = document.createTextNode (user.id);
        let textName = document.createTextNode (user.first_name);
        let textEmail = document.createTextNode (user.email);
        colId.appendChild (textId);
        colName.appendChild (textName);
        colEmail.appendChild (textEmail);
        newRow.appendChild (colId);
        newRow.appendChild (colName);
        newRow.appendChild (colEmail);
      });
    });
}

function sendSwit () {
  console.log ('Sending message to Swit');
  var inputText = document.getElementById ('message').value;
  fetch ('https://hook.swit.io/chat/200326205355708CTEB/ntq1pBDDQqf3ne3NgZFL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify ({
      text: inputText,
    }),
  })
    .then (res => res.json ())
    .then (data => console.log (data));

  return false;
}
