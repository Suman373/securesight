import { AlertTriangle } from "lucide-react";

const Dashboard = () => {
    return (
        <div className="min-h-screen p-6">
            <div className="h-[60vh] max-w-full mx-auto grid grid-cols-3 gap-4">
                {/* Left Section - 2/3 */}
                <div className="md:col-span-2 bg-neutral-900 rounded-lg shadow p-4 ">
                    {/* Your main content goes here */}
                </div>

                {/* Right Section - 1/3 */}
                <div className="bg-neutral-900 rounded-lg shadow p-4">
                    <div className="flex justify-between">
                        <h2 className="flex items-center gap-1 text-xl text-white font-semibold mb-4"> <AlertTriangle className="text-red-800"/> 12 Unresolved Incidents
                        </h2>
                        <div>
                            <p>
                                4 resolved
                            </p>
                        </div>
                    </div>
                    <ul className="space-y-2">
                        {/* Example incident items */}
                        <li className="border p-2 rounded">Incident 1</li>
                        <li className="border p-2 rounded">Incident 2</li>
                        <li className="border p-2 rounded">Incident 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;