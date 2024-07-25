import {useState} from 'react';
import styles from './App.module.css'
function App() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    userName: "",
    posword: "",
    bio: ""
  });

  const [errors, setErrors] = useState({});

  function handleName(event) {
    setUsers({...users , name:event.target.value});
  }

  function handleEmail(event) {
    setUsers({...users , email:event.target.value});
  }

  function handleUserName(event) {
    setUsers({...users , userName:event.target.value});
  }

  function handlePassword(event) {
    setUsers({...users , posword:event.target.value});
  }

  function handleBio(event) {
    setUsers({...users , bio:event.target.value});
  }

  function validate() {
    const newErrors = {};
    if (!users.name) newErrors.name = "Iltimos ismingizni kiriting.";
    
    if (!users.userName) newErrors.userName = "Username kiriting.";
    if (!users.posword) {
      newErrors.posword = "Parrolingizni kiriting.";
    } else if (users.posword.length < 8) {
      newErrors.posword = "Parolingiz 8 tadan kam bolmasin!!!!!!";
    }
    if (!users.bio) newErrors.bio = "Ozingiz haqingizda malumot kiriting";
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem('user:', JSON.stringify(users));
     
      setUsers({
        name: "",
        email: "",
        userName: "",
        posword: "",
        bio: ""
      });
      setErrors({});
    }
  }

  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <h1>Create An Account</h1>
      <p>Kindly fill the following details to create your account</p>
    </div>
      <form action="">
        <input  className={styles.input}
          onChange={handleName} 
          value={users.name} 
          type="text" 
          placeholder='Enter your full name' 
        />
        { <p className={styles.err}>{errors.name}</p>}

        <input className={styles.input}
          onChange={handleEmail} 
          value={users.email} 
          type="text" 
          placeholder='Enter your email address'
        />
        { <p className={styles.err}>{errors.userName}</p>}

        <input className={styles.input}
          onChange={handleUserName} 
          value={users.userName} 
          type="text" 
          placeholder='Enter your username'
        />
        { <p className={styles.err}>{errors.userName}</p>}

        <input className={styles.input}
          onChange={handlePassword} 
          value={users.posword} 
          type="password" 
          placeholder='Enter password'
        />
        { <p className={styles.err}>{errors.posword}</p>}

        <textarea className={styles.textarea} 
          onChange={handleBio} 
          value={users.bio} 
          name="" 
          id="" 
          placeholder='Your Biography'
        />
        {<p className={styles.err}>{errors.bio}</p>}

        <button className={styles.btn} onClick={handleSubmit}>CREATE ACCOUNT</button>
      </form>
    </div>
  );
}

export default App;