import React, { useState } from "react"
import "./style.css"
import Lottie from "lottie-react"
import Unlock from "./lock.json"
import Lock from "./unlock.json"

const Login = ({ onLogin }) => {
  const [npass, setNPass] = useState(false)
  const [cpass, setCPass] = useState(false)

  const showNPassword = () => {
    setNPass((prev) => !prev)
  }
  const showCPassword = () => {
    setCPass((prev) => !prev)
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [conPass, setConPass] = useState("")

  const nameRegex = /^[A-Za-z]{4,}$/
  const emailRegex = /^[A-Za-z0-9.%_+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/

  const validateName = nameRegex.test(name)
  const validateEmail = emailRegex.test(email)
  const validatePassword = passwordRegex.test(pass)
  const validateConfirmPassword = passwordRegex.test(conPass)

  const userName = (e) => {
    const usrVal = e.target.value
    setName(usrVal)
  }
  const userEmail = (e) => {
    const usrVal = e.target.value
    setEmail(usrVal)
  }
  const userPass = (e) => {
    const usrVal = e.target.value
    setPass(usrVal)
  }
  const userConPass = (e) => {
    const usrVal = e.target.value
    setConPass(usrVal)
  }

  const submitForm = (e) => {
    e.preventDefault()

    if (pass !== conPass) {
      console.log("Password Doesn't match")
    }
    if (
      validateName &&
      validateEmail &&
      validateConfirmPassword &&
      validatePassword &&
      pass === conPass
    ) {
      console.log("Submited")
      setName("")
      setEmail("")
      setPass("")
      setConPass("")
    } else {
      console.log("Unsuccesful")
    }
    onLogin()
  }

  const passwordStrengthChecker = () => {
    if (pass.length > 3 && pass.length <= 5) {
      return (
        <h1 className="texterr">Hey {name}, Your Password strength is Weak</h1>
      )
    } else if (pass.length >= 5 && pass.length <= 8) {
      return (
        <h1 className="texterr">
          Hey {name}, Your Password strength is Medium{" "}
        </h1>
      )
    } else if (pass.length >= 8) {
      return (
        <h1 className="texterr">
          Hey {name}, Your Password strength is Strong{" "}
        </h1>
      )
    }
  }

  return (
    <div className="loginLayout">
      <div className="texter">
        {!validateName &&
        !validateEmail &&
        !validateConfirmPassword &&
        !validatePassword ? (
          <div className="textflexer">
            <Lottie animationData={Lock} className="locked" />
            <h1 className="texterr">
              Hey please tell me your details so that we can let you in.
            </h1>
          </div>
        ) : (
          ""
        )}

        {validateName &&
        !validateEmail &&
        !validateConfirmPassword &&
        !validatePassword ? (
          <h1 className="texterr">
            Hey {name}, Welcome 🙏🙏🙏 Please Enter All the details so that we
            can get in.
          </h1>
        ) : (
          ""
        )}

        {validateName &&
        validateEmail &&
        !validateConfirmPassword &&
        !validatePassword ? (
          <h1 className="texterr">
            Hey {name}, The Email you entered is "{email}"
          </h1>
        ) : (
          ""
        )}

        {validateName &&
        validateEmail &&
        pass.length > 1 &&
        pass.length <= 7 ? (
          <h1 className="texterr">& Your Password is weak</h1>
        ) : (
          ""
        )}

        {validateName &&
        validateEmail &&
        validatePassword &&
        !validateConfirmPassword ? (
          <h1 className="texterr">
            Great!!!, Don't share your password with anyone{" "}
          </h1>
        ) : (
          ""
        )}

        {/* {passwordStrengthChecker()} */}
        {passwordStrengthChecker() &&
        validateConfirmPassword &&
        conPass.length > 4 &&
        pass !== conPass ? (
          <h1 className="texterr">
            Hey {name} Your Password Doesn't match please check{" "}
          </h1>
        ) : (
          ""
        )}

        {validateName &&
        validateEmail &&
        validateConfirmPassword &&
        validatePassword &&
        pass === conPass ? (
          <div className="textflexer">
            <Lottie animationData={Unlock} className="unlocked" />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="former">
        <form
          action=""
          onSubmit={
            validateName &&
            validateEmail &&
            validateConfirmPassword &&
            validatePassword &&
            pass === conPass
              ? submitForm
              : ""
          }
        >
          <h1>Vistor details</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={userName}
          />
          <br />
          <span className="spanner">
            {name.length >= 1 && !validateName ? "*Enter Proper Name" : ""}
          </span>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={userEmail}
          />
          <br />
          <span className="spanner">
            {email.length > 1 && !validateEmail ? "*Enter Proper Email" : ""}
          </span>
          <input
            className="passworrd"
            type={npass ? "text" : "password"}
            placeholder="Password"
            value={pass}
            onChange={userPass}
          />
          <span onClick={showNPassword} className="eyes">
            {npass ? "😴" : "🤓"}
          </span>
          <br />
          <span className="spanner">
            {pass.length > 1 && !validatePassword
              ? "*Enter Proper Password"
              : ""}{" "}
          </span>{" "}
          <br />
          <input
            type={cpass ? "text" : "password"}
            className="passworrd"
            placeholder="Confirm Password"
            value={conPass}
            onChange={userConPass}
          />
          <span onClick={showCPassword} className="eyes">
            {cpass ? "😴" : "🤓"}
          </span>
          <br />
          <span className="spanner">
            {conPass.length >= 3 && pass !== conPass
              ? "Password Doesn't match"
              : ""}
          </span>
          <br />
          <button>Get in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
