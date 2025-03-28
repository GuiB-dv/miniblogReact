// CSS
import styles from "./About.module.css"

import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
        <h2>About mini <span>Blog</span></h2>
        <p>This project uses React as a front-end tool and Firebase as the back-end</p>
        <Link to="/posts/create" className="btn">Create post</Link>
    </div>
  )
}

export default About