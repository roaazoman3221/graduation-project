import './TryMe.css'
import { FaArrowRight } from "react-icons/fa6";

const TryMe = () => {
    return (
        <div className='tryme-container'>
            <div className="blue-layer"></div>
            <div className="purple-layer">
                <div className="tryme-content">
                    <div className="try-text">
                        <h2 className='try-title'>Try me out, risk free!</h2>
                        <p className='try-des'>
                            If you’re not happy with the design after the first draft,
                            I’ll refund your deposit, no questions asked
                        </p>

                        
                    </div>
                </div>

                <button className='try-btn'>Contact <FaArrowRight /></button>
            </div>
            
        </div>
    )
}

export default TryMe
