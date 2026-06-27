import background from '../assets/yellow-bg.png';
import heroImage from '../assets/picgithubAI.jpg';
import DarkMode from './DarkMode.jsx';
import Star from './script.jsx';
import countdown from '../assets/image/CountdownApp.jpg'
import image1 from '../assets/image/image1.png'
import image2 from '../assets/image/image2.png'
import image from '../assets/image/image.png'
import Typing from './Typing.jsx';
export default function Header() {
    return (
        
       <>
       <title>My portfolio</title>
            <div id="top" className="page-wrapper">
            <header className="header">
                <div className="header__brand">
                    <div className='title'>
                    <h1 id='title1'>My</h1>
                    <h1 id='title2'>Portfolio</h1>
                    </div>
                </div>
                <div className="nav-style">
                <div className="header__nav">
                    <a className="nav-item" id='h' href="#top">Home</a>
                    <a className="nav-item" id='a' href="#about">About</a>
                    <a className="nav-item" id='s' href="#skills">Skills</a>
                    <a className="nav-item" id='p' href="#projects">Projects</a>
                    <a className="nav-item" id='c' href="#contact">Contact</a>
                </div>
                <DarkMode/>


            <section className="hero">
        
                <div className="hero__title">
                     <span className='name'>{Typing()}</span>
                    <h4>I am a Frontend Developer with a passion for creating beautiful and functional web applications. 
                        I have experience in React, JavaScript, HTML, CSS, and other web technologies. 
                        I am always looking to learn new skills and improve my craft.</h4>
                </div>
                    <a 
                    href="../../public/CHHAY SOTHEARIDDHEA.pdf" 
                    download="CHHAY SOTHEARIDDHEA.pdf" 
                    className="resume-btn"
                    >
                    Download CV
                    </a>

                <div className="hero__image">
                    <img className="background-image" src={background} alt="Background" />
                    <img className="hero__image-img" src={heroImage} alt="Rithea" />
                </div>
                
                
            </section>
             </div>
            </header>

            <div className="runner-container">
                <div className="runner-content">
                    <h2></h2>
                    <p className="runner"><SlideText /></p>
                    <p className="runner"><SlideText2 /></p>

                    <div id="about" className="Aboutme-container">
                        <div className="Aboutme-content">
                            <h2>About Me</h2>
                <p>Hi, I'm Rith Computer Science Student Year 2 at Asia Euro University from Cambodia 
                    | 21 Years Old  Developer & Tech Enthusiast , 
                    Love building beautiful and functional web apps 
                    and learning every day.</p>
        
                        </div>
                    </div>



                    <div id="skills" className='skill-title__text'>
                        <h2>Skills</h2>
                    </div>
                    <div className='skill-container'>
                        <div className='skill-card skill-html' data-percent="100">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                            <h3>HTML</h3>
                            <div className="skill-percent">
                                <span className="skill-percent-value">100%</span>
                                <div className="skill-progress"><div className="skill-progress-fill" style={{width: '100%'}}></div></div>
                            </div>
                        </div>
                        <div className='skill-card skill-css' data-percent="85">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                            <h3>CSS</h3>
                            <div className="skill-percent">
                                <span className="skill-percent-value">85%</span>
                                <div className="skill-progress"><div className="skill-progress-fill" style={{width: '85%'}}></div></div>
                            </div>
                        </div>
                        <div className='skill-card skill-js' data-percent="65">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <h3>JavaScript</h3>
                            <div className="skill-percent">
                                <span className="skill-percent-value">65%</span>
                                <div className="skill-progress"><div className="skill-progress-fill" style={{width: '65%'}}></div></div>
                            </div>
                        </div>
                        <div className='skill-card skill-react' data-percent="80">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                            <h3>React</h3>
                            <div className="skill-percent">
                                <span className="skill-percent-value">80%</span>
                                <div className="skill-progress"><div className="skill-progress-fill" style={{width: '80%'}}></div></div>
                            </div>
                        </div>
                        <div className='skill-card skill-git' data-percent="50">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                            <h3>Git</h3>
                            <div className="skill-percent">
                                <span className="skill-percent-value">50%</span>
                                <div className="skill-progress"><div className="skill-progress-fill" style={{width: '50%'}}></div></div>
                            </div>
                        </div>
                        <div className='skill-card skill-github' data-percent="65">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                            <h3>GitHub</h3>
                            <div className="skill-percent">
                                <span className="skill-percent-value">65%</span>
                                <div className="skill-progress"><div className="skill-progress-fill" style={{width: '65%'}}></div></div>
                            </div>
                        </div>
                        <div className='skill-card skill-react-native' data-percent="80">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg" alt="React Native" />
                            <h3>React Native</h3>
                            <div className="skill-percent">
                                <span className="skill-percent-value">80%</span>
                                <div className="skill-progress"><div className="skill-progress-fill" style={{width: '80%'}}></div></div>
                            </div>
                        </div>
                        <div className='skill-card skill-sqlserver' data-percent="30">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" />
                            <h3>SQL Server</h3>
                            <div className="skill-percent">
                                <span className="skill-percent-value">30%</span>
                                <div className="skill-progress"><div className="skill-progress-fill" style={{width: '30%'}}></div></div>
                            </div>
                        </div>
                    </div>
                    {/* PROJECTS SECTION */}
                    <div id="projects" className='project-title__text'>
                        <h2>Projects</h2>
                    </div>
                    <div className='project-container'>
                        <div className='project-card' id='project1'>
                            <img src={countdown} alt="Project 1" className="project-img" 
                            style={{width:250,height:250,paddingLeft:120}}
                            />
                            <div className="project-info">
                                <h3>CountDown App</h3>
                                <p>A simple countdown timer application built to track time accurately from Years down to Seconds.</p>
                                <div className="project-tags">
                                    <span>React Native</span>
                                    <span>JavaScript</span>
                                </div>
                                <div className="project-links">
                                   
                                    <a href="https://github.com/chhaysokrithea-cloud/CountdownApp.git" target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className='project-card' id='project2'>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
                            <img src={image1} alt="Project 2" className="project-img"
                            style={{height:350,width:150}}
                            />
                            <div style={{width:5 , backgroundColor:'cyan'}}></div>
                            <img src={image2} alt="Project 2" className="project-img"
                            style={{height:350,width:150,}}
                            />


                            </div>
                            <div className="project-info">
                                <h3>Food-List App</h3>
                                <p>Short description of what this project does and what problem it solves.</p>
                                <div className="project-tags">
                                    <span>React Native</span>
                                    <span>Javascript</span>
                                    <span>Fake API</span>
                                </div>
                                <div className="project-links">
                                    
                                    <a href="https://github.com/chhaysokrithea-cloud/Food-List-App.git" target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>

                        <div className='project-card' id='project3'>
                            <img src={image} alt="Project 3" className="project-img"
                            style={{width:250,height:250,paddingLeft:120}}
                            />
                            <div className="project-info">
                                <h3>Dictionary</h3>
                                <p>Seacrh to find khmer words and the word store in database file</p>
                                <div className="project-tags">
                                    <span>React Native</span>
                                    <span>Javascrpit</span>
                                    <span>Fake API</span>
                                </div>
                                <div className="project-links">
                                    
                                    <a href="https://github.com/chhaysokrithea-cloud/Dictionary.git" target="_blank" rel="noreferrer">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT SECTION */}
                    <div className='contact-title__text' id='contact'>
                        <h2>Contact Me</h2>
                    </div>
                    <div className='contact-container'>
                        <p className="contact-intro">I'm open to internship opportunities and collaborations. Feel free to reach out!</p>
                        <div className="contact-links">
                            <a href="#" className="contact-btn">Email : chhaysokrithea@gmail.com</a>
                            <a href="https://t.me/chhaysorithea" target="_blank" rel="noreferrer" className="contact-btn">Telegram</a>
                            <a href="https://github.com/chhaysokrithea-cloud" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
                        </div>
                    </div>
                    

                    {/* FOOTER */}
                    <footer className="footer">
                        <p>© {new Date().getFullYear()} Chhay sothearithea. Built with React.</p>
                    </footer>

                    



                </div>
            </div>
            </div>
            <Star />
        </>
    )
}


//Scroll text

function SlideText() {
    const text = "React Developer • React Native • Angular • Currently studying CS at AEU • Open to internship opportunities • Based in Phnom Penh, Cambodia";
    const maxLength = 200; // Maximum number of characters to display
    const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    return (
        <marquee behavior="scroll" direction="left" scrollamount="20">
            {truncatedText}
        </marquee>
    );
}
function SlideText2() {
    const text = "Built a React portfolio  • Working on React Native mobile apps • Learning English for IELTS • Goal: internship in tech, aiming for opportunities in Australia";
    const maxLength = 200; // Maximum number of characters to display
    const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    return (
        <marquee behavior="scroll" direction="right" scrollamount="20">
            {truncatedText}
        </marquee>
    );
}



