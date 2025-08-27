import { useState } from "react"

export default function Social() {
    // const [getIcon, setIcon] = useState('sun');

    // function changeIcon() {
    //     setIcon(getIcon === 'sun' ? 'moon' : 'sun');
    // }
    return(
        <div className="home__social">
            <a href="https://dribbble.com/" className="home__social-icon" target="_blank">
                <i className="bx bxl-linkedin"></i>
            </a>

            <a href="https://github.com/" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
                <i className="bxl  bx-leetcode "></i>
            </a>
        
            {/* <button onClick={changeIcon}><i className={`bx  bx-${getIcon}`}></i></button> */}

        </div>
    )
}