import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

function Delivery()
{
    return(
        <div className="lg:container mx-auto shadow-md p-7 rounded-b-2xl">
            <div className="grid grid-cols-4">
                <div className="delivery-wrapper">
                    <div className="flex items-center gap-4">
                        <p><Percent /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Discount</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">Every Week New Sales</p>
                        </div>
                    </div>
                </div>

                <div className="delivery-wrapper">
                    <div className="flex items-center gap-4">
                        <p><ShieldCheck /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Secure Payment</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">100% Secure Payment method</p>
                        </div>
                    </div>
                </div>

                <div className="delivery-wrapper">
                    <div className="flex items-center gap-4">
                        <p><Clock3 /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Great Support 24/7</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">We care about your experience</p>
                        </div>
                    </div>
                </div>
                <div className="delivery-wrapper">
                    <div className="flex items-center gap-4">
                        <p><Truck /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Free Delivery</h4>
                            <p className="text-sm text-[#9a9caa] font-inter font-normal">100% Free for all orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery;