import React from 'react';
import Cors from '../component/navigation/Cors';

export default function NotFound (props) {
    return (
        <div>
            <Cors>
                <div className="font-bold">
                    Erreur 404
                </div>
            </Cors>
        </div>
    )
}