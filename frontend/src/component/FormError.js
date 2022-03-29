import React from 'react';

import Lottie from 'react-lottie-player'

import errorLottieJson from '../lottie/error.json'

export default function FormError ({text}) {
    return (
        <div className="flex">
            <Lottie
                loop
                animationData={errorLottieJson}
                play
                speed={0.7}
                style={{ width: 20, height: 20 }}
            />
            <span className="text-red-500 text-sm">
                {text}
            </span>
        </div>
    );
}