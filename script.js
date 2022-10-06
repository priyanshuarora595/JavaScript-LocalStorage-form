function SaveForm(){
    var item = localStorage.length+1;
    console.log(item);
    var email = String(document.getElementById('Email').value);
    var pass = String(document.getElementById('Password').value);
    var msg = String(document.getElementById('Message').value);
    new_entry = {

        mail_id : email,
        pswd : pass,
        message : msg
    }
    console.log(JSON.stringify(new_entry));

    localStorage.setItem('user'+String(item),JSON.stringify(new_entry));
}



function load_prev_msg(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);

        if(String(key).startsWith("user"))
        {
            console.log(`${key}: ${localStorage.getItem(key)}`);
            const user = JSON.parse(`${localStorage.getItem(key)}`)
            console.log(user.mail_id);
            elem_content = `<div class="card mt-5" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">` + user.mail_id + `</h5>
                  <p class="card-text">` + user.message + `</p>
                </div>
              </div>`
            var element = document.getElementById("prev_msg");
            element.insertAdjacentHTML('afterend', elem_content);
        }
      }
    }