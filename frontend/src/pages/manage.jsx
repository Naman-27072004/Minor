import { useState } from 'react';
import Account from "./account";
import Profile from './profile';
import History from './history';
import Order from './order';
import Return from './return';
import Cancel from './cancel';

const Manage = () => {
    const [component, setvalue] = useState(<Account/>);

    const handleClick1 = () => {
        setvalue(<Account />);
    }

    const handleClick2 = () => {
        setvalue(<Profile />);
    }

    const handleClick3 = () => {
        setvalue(<History />);
    }

    const handleClick4 = () => {
        setvalue(<Order />);
    }

    const handleClick5 = () => {
        setvalue(<Return />);
    }

    const handleClick6 = () => {
        setvalue(<Cancel />);
    }
    return (
        <div className="flex items-left min-h-screen mt-40 -mb-44 ml-10">
            <div className="grid auto-rows-max">
                <button className="hover:text-red-500 font-semibold text-lg transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" onClick={handleClick1}>Manage My Account</button>
                <button className="hover:text-red-500 font-semibold text-lg transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" onClick={handleClick2}>My Profile</button>
                <button className="hover:text-red-500 font-semibold text-lg transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" onClick={handleClick3}>Payment History</button>
                <button className="hover:text-red-500 font-semibold text-lg transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" onClick={handleClick4}>My Orders</button>
                <button className="hover:text-red-500 font-semibold text-lg transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" onClick={handleClick5}>My Returns</button>
                <button className="hover:text-red-500 font-semibold text-lg transition ease-in-out duration-300 transform hover:scale-110 justify-self-start" onClick={handleClick6}>My Cancellations</button>
            </div>
            <div>
                {component}
            </div>
        </div>
    )
}

export default Manage;