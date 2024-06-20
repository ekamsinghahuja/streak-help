import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const TypingEffect = ({ texts, speed }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(1);
    const [displayedText, setDisplayedText] = useState('');
    

    useEffect(() => {
    
        let index = 0;
        const interval = setInterval(() => {
            if(index < texts[currentTextIndex].length-1){
                
                setDisplayedText((prev) => prev + texts[currentTextIndex][index]);
                index++;
            }
            else{
                setTimeout(() => {
                    deleteText();
                }, 2000); 
            }
            

        }, speed);

        const deleteText = () => {
            let index = texts[currentTextIndex].length;
            const deleteInterval = setInterval(() => {
                if (index > 0) {
                    setTimeout(() => {
                        setDisplayedText((prev) => prev.slice(0, -1));
                        index--;
                    }, 20);
                    
                } else {
                    clearInterval(deleteInterval);
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }, speed / 2);
            clearInterval(interval);
        };
        return () => clearInterval(interval);
    }, [texts, speed, currentTextIndex]);

    return (
        <h2 className='desc'>
            {displayedText}
            <span className="cursor">|</span>
        </h2>
    );
};

export default TypingEffect;
