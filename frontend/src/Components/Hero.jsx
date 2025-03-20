import hero_bg from "../assets/hero_bg.png"
const Hero = () => {
    return (
        <div
        className=" md:h-[800px] md:grid grid-cols-12 items-center"
        style={{
            backgroundImage:
            `url(${hero_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",// Adjust height as needed
            // height: "800px" // Ensures full width
        }}
        >
            <div className="col-span-6"> <p></p></div>
            <div className="col-span-6 md:pe-20 p-10 space-y-2 md:space-y-6">
                <p className="text-white font-rancho md:text-5xl text-4xl">Would you like a Cup of Delicious Coffee?</p>
                <p className="text-white font-raleway md:text-xl">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="btn btn-info bg-[#D2B48C] hover:bg-amber-200">Order one</button>
            </div>
        </div>
    );
};

export default Hero;
