import './loginPage.css'; // Import the CSS file
function LoginPage() {

  return (
 <div className="Authentication">
   <div className="main">
    <input type="checkbox" id ="chk" aria-hidden="true"/>
    <div className="signup">
      <form>
        <label htmlfor="chk"aria-hidden="true" >Sign up</label>
        <input type="text" name="txt" placeholder="User name" required=""/>
        <input type="email" name="email" placeholder="Email" required=""/>
        <input type="Password" name="pswd" placeholder="Password" required=""/>
        <button>Sign up</button>
      </form>
    </div>
    <div className="login">
        <form>
          <label htmlfor="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" required=""/>
          <input type="Password" name="pswd" placeholder="Password" required=""/>
          <button>Login</button>

 
        </form>
    </div>
   </div>
 </div>
  );
}

export default LoginPage;

