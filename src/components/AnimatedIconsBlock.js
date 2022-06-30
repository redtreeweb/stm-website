import React, { createRef } from 'react';
import '@lottiefiles/lottie-player';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AnimatedIconsBlock = () => {
    const player1 = createRef();
    const player2 = createRef();
    const player3 = createRef();
    const player4 = createRef();

    const { ref, inView, entry } = useInView({
        threshold: 1,
        triggerOnce: true,
        onChange: (inView) => {
            if (inView) {
                player1.current.play();

                setTimeout(function(){
                    player2.current.play();

                    setTimeout(function(){
                        player3.current.play();

                        setTimeout(function(){
                            player4.current.play();
                        }, 500);
                    }, 500);
                }, 500);
            }
        }
    });

    return (
        <div className="animated-icons-block" ref={ref}>
            <h2>Why <span>Us?</span></h2>
            <div className="animated-icon">

                <lottie-player
                    ref={player1}
                    keepLastFrame={true}
                    src="../../lotties/lightbulb.json"
                    style={{ width: '200px', height: '200px' }}
                />

                <div className="countup-wrapper"><CountUp start={0} end={20} duration={4} suffix="+" /></div>
                <p className='countup-label'>Years of Experience</p>
            </div>

            <div className='animated-icon'>
                <lottie-player
                    ref={player2}
                    keepLastFrame={true}
                    src="../../lotties/playbtn.json"
                    style={{ width: '225px', height: '225px', marginBottom: '-40px' }}
                />

                <div className="countup-wrapper"><CountUp start={0} end={16000} delay={.5} separator="," duration={5} /></div>
                <p className='countup-label'>Hours of Video Created</p>
            </div>

            <div className='animated-icon'>
                <lottie-player
                    ref={player3}
                    keepLastFrame={true}
                    src="../../lotties/speechbubble.json"
                    style={{ width: '200px', height: '200px', marginBottom: '-20px', }}
                />

                <div className="countup-wrapper"><CountUp start={0} end={490} delay={1} /></div>
                <p className='countup-label'>Stories Told</p>
            </div>


            <div className='animated-icon'>
            <lottie-player
                ref={player4}
                keepLastFrame={true}
                src="../../lotties/dragon.json"
                style={{ width: '175px', height: '175px', marginBottom: '-20px', }}
            />

            <div className="countup-wrapper"><CountUp start={0} end={1.5} delay={1.5} decimals={1} /></div>
            <p className='countup-label'>Dragons Slayed for Our Clients <br/>(Weekly)</p>
            </div>
        </div>
    );
}

export default AnimatedIconsBlock