import React from "react";


function Footer() {
    return (
        <footer className="container text-center py-3">
           <p>All my Links</p>
         <div className="socials">
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/itsamish01" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/github-logo.png')} alt="github link" />
          </a>
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://www.linkedin.com/in/amish-sharma-14700916a/" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/linkedin.png')} alt="linked in link" />
          </a>
          <a className="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://amishsharma.com/" rel="noopener noreferrer" target="_blank">
            <img className="icon" src={require('../../assets/stack-overflow.png')} alt="stack overflow link" />
          </a>
         </div> 
          <h3 className="text-dark ">&copy; 2023 by Amish Sharma  </h3>
        </footer>
    );
}

export default Footer;