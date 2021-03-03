import React, {useState , useEffect} from 'react';
import {
    HeroSection,
    Slider,
    SliderImg,
    HeroContent,
    HeroContentH1,
    HeroContentPrice,
    BtnFoward,
    HeroDirectionIcons,
    Backward,
    Forward
} from './heroElements';
import Button from '../Button';
import slider from '../../data/slider';


const Hero = () => {
    const Length = slider.length;
    const[sliderNumber , setSliderNumber] = useState(0);
    const sliderNext = () => {
        setSliderNumber(() => {
            if(sliderNumber === Length - 1) {
                return 0;
            } else {
                return sliderNumber + 1;
            }
        })
    };
    const sliderPrev = () => {
        setSliderNumber(() => {
            if(sliderNumber === 0) {
                return Length - 1;
            } else {
                return sliderNumber - 1;
            }
        })
    };
    useEffect(() => {
        const sliderInterval = setInterval(() => {
            sliderNext();
        }, 3000)
        return () => {
            clearInterval(sliderInterval);
        }
    },[sliderNumber])
    return (
        <HeroSection>
            <Slider>
                <SliderImg src = {slider[sliderNumber].homeImage}/>
            </Slider>
            <HeroContent>
                <HeroContentH1>{slider[sliderNumber].homeTitle}</HeroContentH1>
                <HeroContentPrice>{slider[sliderNumber].homePrice}</HeroContentPrice>
                <Button>View Home <BtnFoward /></Button>
            </HeroContent>
            <HeroDirectionIcons>
                <Backward onClick = {() => {
                    sliderPrev();
                }}/>
                <Forward onClick = {() => {
                    sliderNext();
                }}/>
            </HeroDirectionIcons>
        </HeroSection>
    );
}

export default Hero;