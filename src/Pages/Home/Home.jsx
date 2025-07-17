import Banner from "../../Components/Banner";
import Delivery from "../../Components/Delivery";

const Home = () => {

    return(
        <div>
            {/* banner component */}
            <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
                <Banner />
            </div>

            <div className="w-full min-h-[#150px] bg-white mb-20">
                <Delivery />
            </div>
        </div>
    )
}

export default Home;