let Login = prompt('Please, write your e-mail');
const x1 = 5;
const x2 = 6;
const run = true;

if (Login === '' || Login === null) {
    alert('Canceled');
} else if (Login.length < x1) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (Login === 'user@gmail.com' || Login === 'admin@gmail.com') {
    let checkPass = prompt('Please, write your password');
    if (checkPass === '' || checkPass === null) {
        alert('Canceled');
    } else if (Login === 'user@gmail.com' && checkPass === 'UserPass' ||
    Login === 'admin@gmail.com' && checkPass === 'AdminPass') {
        let checkConfirm = confirm('Do you want to change your password?');
        if (checkConfirm === false) {
            alert('You have failed the change.');
        } else {
          do {
            let OldPass = prompt('Please, write the old password');
            if (OldPass === '' || OldPass === null) {
                alert('Canceled');
                 break;
            } else if (Login === 'user@gmail.com' && OldPass === 'UserPass' ||
                Login === 'admin@gmail.com' && OldPass === 'AdminPass') {
                do {
                  let newPass = prompt('Please, write new password');
                  if (newPass === '' || newPass === null) {
                      alert('Canceled');
                      break;
                  } else if (newPass.length < x2) {
                      alert('It’s too short password. Sorry.');
                      continue;
                  } else {
                      do {
                      let newPass2 = prompt('Please, re-write new password');
                      if (newPass2 !== newPass) {
                          alert('You wrote the wrong password.');
                          continue;
                      } else {
                          alert('You have successfully changed your password.');
                          break;
                      }
                    }while(run);
                    break;
                  }
                }while(run);
                break;
            } else {
                alert('Wrong password');
                continue;
            }
        }while(run);
      } 
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}
