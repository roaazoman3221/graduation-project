import './Hero.css';

const Hero = () => {
    return (
        <section id='home' className='hero'>
            <div className="back-color"></div>
            
            <div className="hero-display">
                <div className="hero-text">
                    <h1 className='title'><span>HEY! </span> I’m Roaa, 
                    Frontend Developer
                    </h1>

                    <p className='description'>Agency-quality webflow websites with the personal touch of a freelancer.
                    </p>

                    <button className='cv-btn'>Download CV</button>
                </div>

                <div className="hero-pic">
                    <div className="purple-circle"></div>
                    <div className="cubes"></div>
                    <div className="my-pic"></div>
                </div>
            </div>


        
        </section>
    )
}

export default Hero
