import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Button from '../components/Button.jsx';

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
    const isSmall = useMediaQuery({maxWidth: 440})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-fit w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Navya <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Software Developer</p>
            </div>
        </section>
    )
}
export default Hero
