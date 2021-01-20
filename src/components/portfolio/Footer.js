import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer bg-dark py-5">
            <div className="container grid grid-3">
                <div>
                    <h1>Facundo Tenuta
                    </h1>
                    <p>Copyright &copy; {new Date().getFullYear()}</p>
                </div>
                <div className="social" style={{justifySelf: "end"}}>
                    <a href="https://www.linkedin.com/in/facundo-tenuta-225191131/"><i className="fab fa-linkedin fa-2x"></i></a>
                </div>
            </div>
        </footer>
    )
}
