import React from "react";
import './Footer.css'

// Footer to display at the bottom of each page
export default function Footer() {

    const icons = [
        {
          name: "fab fa-github",
          link: "https://github.com/vyang14/"
        },
        {
          name: "fab fa-linkedin",
          link: "https://www.linkedin.com/in/vyang-mrsk/"
        },
        {
            name: "fab fa-envelope",
            link: "mailto:vyang14.dev@gmail.com"
        }
      ]

    return (
        <>
            <footer id='footer'>
                <Row>
                <p className = 'text-left text-light'>Vincent Yang 2022.</p>
                <ul className = 'text-right text-light'>
                    <li>
                        {icons.map(icon =>
                            (
                              <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                            )
                        )}
                    </li>
                </ul>
                </Row>
            </footer>
        </>
    )
}