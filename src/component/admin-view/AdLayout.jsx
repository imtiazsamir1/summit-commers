
import { Outlet } from 'react-router-dom';
import AdSideber from './AdSideber';
import AdHeader from './AdHeader';
const AdLayout = () => {
    return (
        <div className='flex min-h-screen w-full'>
            {/* admin sideber*/ }
            <AdSideber/>
        <div className="flex flex-1 flex-col">
               {/* admin header*/ }
               <AdHeader/>
        <main className='flex-1 flex bg-gray-100 p-4 md:p-6'>
            <Outlet/>
        </main>
        </div>
        </div>
    );
};

export default AdLayout;