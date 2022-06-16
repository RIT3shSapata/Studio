import React, { useState } from 'react';
import LoginModal from '../Components/Loginmodal/LoginModal';

const Landing = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <div className="w-screen h-screen flex justify-start items-center text-white">
            <div className="ml-36 bg-black py-10 px-5 rounded-3xl flex flex-col justify-between">
                <div className="bg-gradient-to-r from-blue-600 to-purple-800 opacity-80 rounded-xl py-2 px-5 -ml-8">
                    <span className="font-bold text-xl ">
                        Create Games, Stories, Experiences
                    </span>
                </div>
                <div>
                    <span className="font-extrabold text-xl">Wiingy</span>
                </div>
                <div>
                    <span className="font-extrabold text-7xl text-orange-600">
                        Studio
                    </span>
                </div>
                <div>
                    <span className="font-bold text-lg">
                        20,000+ Creators & counting
                    </span>
                </div>
                <button
                    onClick={toggleModal}
                    className="bg-orange-500 w-24 rounded-3xl mt-3">
                    enter
                </button>
            </div>
            {modal && <LoginModal toggleModal={toggleModal} />}
        </div>
    );
};

export default Landing;
