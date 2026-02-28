import './Education.css'
import { MdCircle } from "react-icons/md";


const Education = () => {
    return (
        <section className='education' id='education'>
            <div className="edu-title">
                <p className='edu-p'>Education and Experience</p>
                <h2 className='edu-text'>Education & Experience</h2>
            </div>

            <div className="ex-container">
                <div className="ex 1">
                    <div className="dashed-line"></div>
                    <div className="ex-content one">
                        <div className="first-ex">
                            <div className="wrapping">
                                <MdCircle className='darkCircle'/>
                                <h2 className='ex-title'>Communication & Electronics Engineer</h2>

                            </div>
                            <p className='ex-p'>Studied Communications and Electronics Engineering for two years, where I gained a solid foundation in electrical circuits, signals and systems, and wired and wireless communications. I am still continuing my studies in this field and working on developing both my theoretical knowledge and practical skills.
</p>

                        </div>
                    </div>
                    
                </div>

                <div className="ex 2">
                    <div className="dashed-line"></div>
                    <div className="ex-content two">
                        <div className="sec-ex">
                            <div className="wrapping">
                                <MdCircle className='darkCircle'/>
                                <h2 className='ex-title sec'>FrontEnd Developer</h2>
                                
                            </div>
                            <p className='ex-p'>Experience in HTML, CSS, JavaScript, and React. I build responsive and user-friendly web interfaces, focusing on clean design and smooth user experience. I enjoy turning ideas into interactive websites and continuously improving my skills to stay up to date with modern web technologies.
                                </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Education
