import { NavLink, useParams } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
import AdminUsers from "../../components/admin/AdminUsers";
import Products from "../../components/admin/Products";
import AdminDashboard from "../../components/admin/AdminDashboard";
import SaleOrders from "../../components/admin/saleOrders";

const AdminLayout = () => {
    const { path } = useParams();
    // const navigate = useNavigate();
    // const {user, isLoading} = useAuth();

    // if(isLoading){
    //     console.log("IsLoading......",isLoading);
    //     return <h1 className="text-white text-5xl text-center">Loading....</h1>
    // }
    // if(user.isAdmin){

    //     return navigate('/');
    // }

    const renderContent = () => {
        switch ( path ) {
            case 'users':
                return <AdminUsers />;
            case 'products':
                return <Products />;
            case 'saleOrders':
                return <SaleOrders />;
            default:
                return <AdminDashboard />
        }
    };
    return <>
        <div className="text-white text-xl dark:bg-black min-h-screen">
            <div className=" grid grid-cols-5">
                {/*left*/ }
                <div className="min-h-screen border-r-8 border-gray-600">
                    <div className="py-10 px-16 min-w-full border-b-4 border-gray-600 rounded-xl">
                        <NavLink className=' '>
                            <FaUser className="text-9xl" /><br />
                        </NavLink>
                    </div>
                    <div className=" mx-16 pt-4 pb-4 text-orange-600 text-2xl">
                        <NavLink to='/admin' className='mx-2 my-8 flex items-center gap-3'>
                            <img src="/assets/iconImgs/dashboard.png" className="w-10 h-10" />
                            Dashboard
                        </NavLink>
                        <NavLink to='/admin/users' element={ <AdminUsers /> } className='mx-2 my-8 flex text-center items-center gap-3'> 
                            <img src="/assets/iconImgs/users.png" className="w-10 h-10 invert" />
                            Users
                        </NavLink>
                        <NavLink to='/admin/products' element={ <Products /> } className='mx-2 my-8 flex items-center gap-3'>
                            <img src="/assets/iconImgs/productsIcon.png" className="w-10 h-10" />
                            Products
                        </NavLink>
                        <NavLink to='/admin/saleOrders' className='mx-2 my-8 flex items-center gap-3'> 
                            <img src="/assets/iconImgs/salesOrder.jpg" className="w-10 h-12 invert" />
                            Sale Orders
                        </NavLink>
                        <div className='mx-2 my-8 flex items-center gap-3 cursor-pointer'> 
                            <IoLogOutOutline size={30} className="ml-2 text-white" />
                            Logout
                        </div>
                    </div>
                </div>
                {/*Right*/ }
                <div className="col-span-4">
                    { renderContent() }
                </div>
            </div>


        </div>
    </>;

};
export default AdminLayout;