import React from "react"
import Lottie from "lottie-react"
import User from "./user.json"
const Home = () => {
  return (
    <div className="homePage">
      <Lottie animationData={User} className="user" />
      <h1 className="texterr">Hello There</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        debitis at repudiandae maxime eaque quisquam nesciunt, facilis dolore!
        Dignissimos vel fuga perspiciatis quod omnis eos eius non laborum. Est,
        aliquam.
      </p>
    </div>
  )
}

export default Home
