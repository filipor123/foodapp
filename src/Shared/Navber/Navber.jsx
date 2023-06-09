import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFirebaseAuth } from '../../context/AuthProvider';
import { useProducts } from '../../context/ProductProvider';
const Navber = () => {
    const { user, logOut } = useFirebaseAuth();
    const { count } = useProducts();
    // console.log(user);
    // console.log(user?.displayName);
    // console.log(user?.photoURL);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => { });
    }

    const menuItems = <>
        {
            user?.displayName ?
                // <li><Link onClick={handleLogOut} >Logout</Link></li>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} alt='avatar' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link>Settings</Link></li>
                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                    </ul>
                </div>
                :
                <li><Link to="/login" className='btn btn-primary'>Login</Link></li>
        }
    </>
    return (
        <div className="max-w-7xl gap-14 mx-auto mb-10">
            <div className="navbar bg-slate-300">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Food24</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{count}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{count} Items</span>
                                <div className="card-actions">
                                    <Link to='/cart' className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center gap-3">
                    {menuItems}
                </div>
            </div>
        </div>

    );
};

export default Navber;