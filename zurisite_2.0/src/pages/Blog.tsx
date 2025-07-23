//import LandingDrag from '../components/LandingDrag';
import type { JSX } from 'react';

const Blog = (): JSX.Element => {
    return (
        <h1 className="blog-h1"> 
            site log
            <br />
            <div className="log-container">
                <div className="log-title">
                </div>
                <div className="log-content">   
                    {[
                        {
                            date: "07-21-2025",
                            content: "first log hello world!!"
                        }
                    , {
                            date: "07-21-2025",
                            content: "just finished up most of the meat of the site content, minus the projects, and random pages. i'm probably going to spend all of tomorrow debugging, but i just wanted to finish the pages to make sure that the routing works. but i cant wait for the kind of basic stuff to be done so that i can get eyes on the site and pivot to the fun stuff"
                        }, 
                        {
                            date: "07-22-2025",
                            content: "i'm going to try to make a solitaire game for the random page, and maybe a spotify embed for the random page too. i also need to add more projects, and then i'll be done with the basic stuff, and i need to change the colors of everything."
                        }
                    ].reverse().map((entry: { date: string; content: string }, index: number) => (
                        <div key={index}>
                            <p>
                                <small>{entry.date}</small><br/>
                                {entry.content}
                            </p>
                            <hr/>
                        </div>
                    ))}
                </div>
            </div>
        </h1>
    )

}

export default Blog;
