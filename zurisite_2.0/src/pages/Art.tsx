import LandingDrag from '../components/LandingDrag';
import type { JSX } from 'react';

const Art = (): JSX.Element => {
    return(
        <LandingDrag>
            <h1> 
                gallery walk
                <hr/>
                <img src="../assets/poser.jpg" alt="art1" />
                <br/>
                <img src="../assets/vb2.png" alt="vb2" />
                <br/>
                <img src="../assets/randgraf.jpg" alt="art2" />        
            </h1>
        </LandingDrag>
    )
};

export default Art;