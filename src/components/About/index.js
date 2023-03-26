import React from "react";

function About() {
 return (
    <section className="my-3" id="portfolio">
      
      
      <div className="flex-row justify-space-between">
      <a  href=" | Official Amish Sharma's Resume 2023 |.pdf" target="_blank" rel="noopener noreferrer" >
                <h5 id="resume" className="text-dark bg-primary p-2 display-inline-block">Resume on Google Docs <img src={require('../../assets/exit-top-right.png')} alt="Link to resume"/> </h5>
            </a>
          <div className="col-12 mb-2 bg-dark text-light p-3">
            <div className="flex-row">
                <div className="col-3 about">
                    <img className="Avatar" src={require('../../assets/images/Avatar.png')} alt="Amish Sharma"/>
                </div>
                <div className="col-9 about">
                    <p className="about">My name is Amish Sharma, and I am a highly motivated student at Washington University in St. Louis, currently focusing on full-stack web development to achieve my goal of becoming a future developer. I pride myself on my adaptability and tenacity, which make me a valuable asset to any team. To stay current with emerging trends and technologies, I actively participate in the university's tech community. In my free time, I enjoy exploring St. Louis and connecting with fellow tech enthusiasts. My passion and commitment to my field are paving the way for a bright and impactful future in web development.
                        Feel free to reach out and let's talk!
                    </p>
                </div>
            </div>
          </div>
          
            <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 className="br bg-primary portfolio-item-title text-dark p-2">Front-End Mastery</h3>
                <ul>
                <li>Node.js – JavaScript Runtime Environment</li>
                <li>React – Frontend Library</li>
                <li>Redux – State Management</li>
                <li>PostgreSQL – SQL Database</li>
                <li>Socket.io – Real-time Communication</li>
                <li>UI/UX testing</li>
                </ul>
                <p>I take pleasure in crafting responsive web applications and refining them to align with my overarching vision. Through UI/UX design, I can unleash my creativity while discovering innovative solutions to address challenges or constraints in my designs.</p>
            </div> 
            <div className="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                <h3 className="br bg-primary portfolio-item-title text-dark p-2">Back-End Mastery</h3>
                <ul>
                    <li><img alt="nodejs badge" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"></img></li>
                    <li><img alt="" src=""></img></li>
                    <li>Apollo Server – GraphQL</li>
                    <li>RESTful API design</li>
                    <li>Express – MongoDB</li>
                    <li>Sequelize – MySQL – Mongoose</li>
                    <li>Writing unit tests to ensure application function and database structure</li>
                </ul>
                
                <p>Working with servers, databases, and APIs brings me immense satisfaction and excitement. My expertise in the aforementioned tools allows me to develop effective, industry-standard databases, and I take pride in my ability to quickly adapt and learn new backend tools to fulfill any job's demands.</p>
            </div>      
            
            <h2 className="text-dark bg-primary p-2 display-inline-block mb-3 mt-2">Contact Me</h2>
          <div className="col-12 mb-2 bg-dark text-light p-3">
           
                <div className="col-9 about">
                    <ul>
                        <li>Email: <img src={require('../../assets/exit-top-right.png')} alt="Link to open default email program"/> <a className="style-none" href="mailto:itsamish02@gmail.com">itsamish02@gmail.com</a></li>
                        <li>Cellphone - Text/Call: (314)255-7457</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
 );
}

export default About;