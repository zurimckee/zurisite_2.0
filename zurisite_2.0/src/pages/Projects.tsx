import type { JSX } from 'react';
//import LandingDrag from '../components/LandingDrag';



const Projects = (): JSX.Element => {
    return(
        <h1> projects
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="./assets/budgetproj.png" alt="budget project" className="project-img"/>
                        </div>
                        <h2 className="experience-subtitle project-title"> java budget tracker</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/zurimckee/javabudgetcalc'; }}>
                                learn more
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/zurimckee/javabudgetcalc'; }}>
                                live demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="./assets/concentrationproj.png" alt="concentration memory game" className="project-img"/>
                        </div>
                        <h2 className="experience-subtitle project-title"> java concentration memory game</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/zurimckee/javamemorygame'; }}>
                                learn more
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/zurimckee/javamemorygame'; }}>
                                live demo
                            </button>
                        </div>
                    </div>   
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="./assets/spotipi.png" alt="spotify project" className="project-img"/>
                        </div>
                        <h2 className="experience-subtitle project-title"> python spotipi project</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/zurimckee/spotipi'; }}>
                                learn more
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/zurimckee/spotipi'; }}>
                                live demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="./assets/zurisite1.0.png" alt="zurisite project" className="project-img"/>
                        </div>
                        <h2 className="experience-subtitle project-title"> html/css personal website</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/zurimckee/zurisite1.0'; }}>
                                learn more
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://projbyzuri.netlify.app/'; }}>
                                live demo
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <p> put a button that links to github to see more projects here<br/> also change the colors of everythinggg omg</p>
                </div>
            </div>
        </h1>
    )
};
export default Projects;