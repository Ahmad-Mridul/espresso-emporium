import bi_1 from "../assets/icons/1.png"
import bi_2 from "../assets/icons/2.png"
import bi_3 from "../assets/icons/3.png"
import bi_4 from "../assets/icons/4.png"
const Banner = () => {
    return (
        <div className="bg-[#ECEAE3] space-y-3  md:space-x-2">
            <div className="w-10/12 mx-auto md:grid md:grid-cols-4 gap-4 py-6">
                <div className="space-y-2 i-box mb-5 md:mb-0">
                    <img
                        src={bi_1}
                        alt="Shoes"
                        className="items-start"
                    />
                    <h2 className="card-title">Awesome Aroma</h2>
                    <p>
                    You will definitely be a fan of the design & aroma of your coffee
                    </p>
                </div>
                <div className="space-y-2 i-box mb-5 md:mb-0">
                    <img
                        src={bi_2}
                        alt="Shoes"
                        className="items-start"
                    />
                    <h2 className="card-title">High Quality</h2>
                    <p>
                    We served the coffee to you maintaining the best quality
                    </p>
                </div>
                <div className="space-y-2 i-box mb-5 md:mb-0">
                    <img
                        src={bi_3}
                        alt="Shoes"
                        className="items-start"
                    />
                    <h2 className="card-title">Pure Grades</h2>
                    <p>
                    The coffee is made of the green coffee beans which you will love
                    </p>
                </div>
                <div className="space-y-2 i-box mb-5 md:mb-0">
                    <img
                        src={bi_4}
                        alt="Shoes"
                        className="items-start"
                    />
                    <h2 className="card-title">Proper Roasting</h2>
                    <p>
                    Your coffee is brewed by first roasting the green coffee beans
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;
