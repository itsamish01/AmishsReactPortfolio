import React from "react";

function Portfolio() {
 const projects = [
     {
        name: 'Tech Blog',
        description: 'MVC Tech Blog is a blogging website that utilizes the Model-View-Controller architecture pattern for organizing and displaying content.',
        github: 'https://github.com/itsamish01/MVCTechBlogg',
        livelink: 'https://mvctechblogg.herokuapp.com/',
        image: '1',
        uses: 'SQL, MongoDB, Handlebars, Express.js, CSS, JavaScript'
     },
     {
        name: 'E-Commerce',
        description: 'E-commerce ORM is a technique used to facilitate the interaction between an e-commerce application and its database, allowing developers to interact with the database using object-oriented code rather than raw SQL statements. ',
        github: 'https://github.com/itsamish01/ORM-E-Com-HW13',
        livelink: 'https://youtu.be/UsQBHBoIetM',
        image: '2',
        uses: 'Express, MySQL, JavaScript, Node.js, Sequelize'
     },
     {
        name: 'Text Editor',
        description: "PWA text editor is a Progressive Web App that allows users to create and edit documents online, providing an offline-first experience through the use of service workers and cached assets.",
        github: 'https://github.com/itsamish01/PWA-Text-Editor',
        livelink: 'https://super-cool-pwa-text-editor.herokuapp.com/',
        image: '3',
        uses: 'Express, Sequleize, Heroku, JavaScript'
     },
     {
        name: 'Employee Tracker',
        description: 'Employee tracker is a command-line application that allows managers to manage employee information, such as their roles, salaries, and departments, using SQL to interact with a database.',
        github: 'https://github.com/itsamish01/Employee-Tracker-HW12',
        livelink: 'https://www.youtube.com/watch?v=pXzXLlROfB0&ab_channel=AmishSharma',
        image: '4',
        uses: 'Javascript, JS Regular Expressions'
     },
     {
        name: 'Social Network API',
        description: 'Social network homework is a coding assignment that requires students to design and implement a basic social media platform, incorporating concepts such as database design, RESTful API construction, and authentication/authorization.',
        github: 'https://github.com/itsamish01/Social-Network-API',
        image: '6',
        uses: 'MongoDB, Mongoose, Fetch API'
     },
     {
        name: 'Weather Dashboard',
        description: 'Weather dashboard is a web application that uses APIs to provide users with current weather data and forecasts for a specified location, often incorporating features such as geolocation and customizable settings.',
        github: 'https://github.com/itsamish01/Weather-Dashboard',
        livelink: 'https://itsamish01.github.io/Weather-Dashboard/',
        image: '5',
        uses: 'Express.js, MySQL2, Sequelize, .ENV'
     },
 ];

 return (
     <div>
    {projects.map((project) => {
        return(
                <div className="br col-12 mb-2 bg-dark text-light p-3">
                  <div className="flex-row">
                    <div className="left col-8">
                        <h3 className="portfolio-item-title text-light ">{project.name}</h3>
                        <h5 className="portfolio-languages pt-3">
                            Built With: {project.uses}
                        </h5>
                        <p>{project.description}</p>
                        <div className="br bg-primary width-min p-1">
                        <a href={project.livelink}  rel="noreferrer noopener" target="_blank" title="Open Live App on Hosted with Heroku">
                            <img className="icon" src={require('../../assets/open-in-browser.png')} alt="hosted app / youtube link"/>
                        </a>
                        <a href={project.github} rel="noreferrer noopener" target="_blank" title="Open GitHub Repo">
                            <img className="icon" src={require('../../assets/github.png')} alt="github link"/>
                        </a>
                        </div>
                    </div>
                    <div className="right">
                        <img className="image" src={require(`../../assets/images/${project.image}.png`)} alt={project.name} key={project.name}/>
                    </div>
                  </div>
                </div>
        );
    })
    
    }
 </div>);
}

export default Portfolio;