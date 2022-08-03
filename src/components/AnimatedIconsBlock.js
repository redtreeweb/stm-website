import React, { createRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AnimatedIconsBlock = () => {
    const [animation1PassiveEnabled, setAnimation1PassiveEnabled] = useState(false);
    const [animation2PassiveEnabled, setAnimation2PassiveEnabled] = useState(false);
    const [animation3PassiveEnabled, setAnimation3PassiveEnabled] = useState(false);

    const player1 = createRef();
    const player2 = createRef();
    const player3 = createRef();
    const player4 = createRef();

    const [playerRefOne] = useInView({
        threshold: 1,
        onChange: (inView) => {
            player1.current.play();
        }
    });

    const [playerRefTwo] = useInView({
        threshold: 1,
        delay: 500,
        onChange: (inView) => {
            player2.current.play();
        }
    });

    const [playerRefThree] = useInView({
        threshold: 1,
        delay: 1000,
        onChange: (inView) => {
            player3.current.play();
        }
    });

    const [playerRefFour] = useInView({
        threshold: 1,
        delay: 1500,
        onChange: (inView) => {
            player4.current.play();
        }
    });

    return (
        <div className="animated-icons-block">
            <h2>Why <span>Us?</span></h2>
            <div className="animated-icon" ref={playerRefOne}>

                <Player
                    ref={player1}
                    keepLastFrame={true}
                    src="../../lotties/lightbulb.json"
                    style={{ width: '200px', height: '200px' }}
                />

                <div className="countup-wrapper"><CountUp start={0} end={20} duration={4} suffix="+" /></div>
                <p className='countup-label'>Years of Experience</p>
            </div>

            <div className='animated-icon' ref={playerRefTwo}>
                <Player
                    ref={player2}
                    keepLastFrame={true}
                    src="../../lotties/playbtn.json"
                    style={{ width: '225px', height: '225px', marginBottom: '-40px' }}
                />

                <div className="countup-wrapper">
                    { (animation1PassiveEnabled) ? <CountUp start={16000} end={16100} separator="," duration={600} /> : <CountUp start={0} end={16000} separator="," duration={5} delay={.5} onEnd={() => { setAnimation1PassiveEnabled(true) }} /> }
                </div>
                <p className='countup-label'>Hours of Video Created</p>
            </div>

            <div className='animated-icon' ref={playerRefThree}>
                <Player
                    ref={player3}
                    keepLastFrame={true}
                    src="../../lotties/speechbubble.json"
                    style={{ width: '200px', height: '200px', marginBottom: '-20px', }}
                />

                <div className="countup-wrapper">
                    { (animation2PassiveEnabled) ? <CountUp start={490} end={1000} separator="," duration={6000} /> : <CountUp start={0} end={490} delay={1} onEnd={() => { setAnimation2PassiveEnabled(true) }} /> }
                </div>
                <p className='countup-label'>Stories Told</p>
            </div>


            <div className='animated-icon' ref={playerRefFour}>
            <Player
                ref={player4}
                keepLastFrame={true}
                src="../../lotties/dragon.json"
                style={{ width: '175px', height: '175px', marginBottom: '-20px', }}
            />

            <div className="countup-wrapper">
                { (animation3PassiveEnabled) ? <CountUp start={1.5} end={30} duration={1000} decimals={1} /> : <CountUp start={0} end={1.5} delay={1.5} decimals={1} onEnd={() => { setAnimation3PassiveEnabled(true) }} /> }
            </div>
            <p className='countup-label'>Dragons Slayed for Our Clients <br/>(Weekly)</p>
            </div>
        </div>
    );
}

export default AnimatedIconsBlock