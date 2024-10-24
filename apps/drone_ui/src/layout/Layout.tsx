import { Sidebar } from '../components/Sidebar/Sidebar';
import { Map } from '../components/Map/Map';
import { Realifications } from '../components/Relifications/Relifications';
import { DronesInfo } from '../components/DronesInfo/DronesInfo';
import { ActiveStatus } from '../components/ActiveStatus/ActiveStatus';
import { KeyObjectives } from '../components/KeyObjectives/KeyObjectives';

export const Layout = () => {
    return (
        <div className="h-screen w-screen grid grid-cols-12 grid-rows-6 gap-4 p-4 bg-gray-100">
            <div className="col-span-1 row-span-6">
                <Sidebar />
            </div>

            <div className="col-span-7 row-span-4">
                <Map />
            </div>

            <div className="col-span-4 row-span-2">
                <Realifications />
            </div>

            <div className="col-span-4 row-span-4">
                <DronesInfo />
            </div>

            <div className="col-span-7 row-span-1">
                <ActiveStatus />
            </div>

            <div className="col-span-7 row-span-1">
                <KeyObjectives />
            </div>
        </div>
    );
};