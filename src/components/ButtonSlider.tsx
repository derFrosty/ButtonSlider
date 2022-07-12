import React, { FunctionComponent, useState } from 'react';

const ButtonSlider: FunctionComponent = () => {
    const [isOn, setIsOn] = useState<boolean>(true);

    const onButtonSliderClick = () => {
        setIsOn(prevState => !prevState);
    }

    return (
        <div className="button-slider">
            <div className={`select-circle ${isOn ? 'is-on' : 'is-off'}`} />
            <p className={`${isOn ? 'selected' : ''}`} onClick={!isOn ? onButtonSliderClick : undefined}>ON</p>
            <p className={`${!isOn ? 'selected' : ''}`} onClick={isOn ? onButtonSliderClick : undefined}>OFF</p>
        </div>
    );
};

export default ButtonSlider;