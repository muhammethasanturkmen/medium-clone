import { signup } from './actions'

export default function SignupForm() {
    return (
      <form className="form">
        <h1>Join Medium.</h1>

        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>
        
        <button formAction={signup}>Sign up</button>
      </form>
    )
}