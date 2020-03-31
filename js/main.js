/** 
 * ORDERED LIST OF SURNAMES
*/

// VARIABLES
var newUser = document.getElementById('new-user');
var userList = document.getElementById('user-list');
var btnSubscribe = document.getElementById('subscribe');
var registered = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var user;
var items;
var previousItems;
var userPosition;




// enter new user

btnSubscribe.addEventListener('click',
    function() {
        var newItems = '';
        // surname insertion in the array
        user = newUser.value;
        registered.push(user);
        // array sort
        registered.sort();
        // build the elements in the list
        for(var i = 0; i < registered.length; i++) {
            items = registered[i];
            newItems += '<li>' + items + '</li>';        
        }
        userList.innerHTML = newItems; 
        userPosition = registered.indexOf(newUser);
        document.getElementById('position').innerHTML = 'Il tuo cognome è alla posizione: ' + (userPosition + 1);  
        newUser.value = '';
        newUser.focus();
    }
    )