
const Banner = () => {
    return (
        <div className="h-[40vh] md:h-[80vh] bg-[url('https://i.ibb.co/18M4yx4/sd-banner.png')] mx-auto bg-center bg-cover bg-blend-overlay bg-[#000] bg-opacity-5 flex justify-center items-center">
            <div className="md:w-[80%] p-3 md:p-0">
                <h3 className="text-white text-sm md:text-xl 2xl:text-3xl">Welcome</h3>
                <h2 className="text-[#fff] text-2xl md:text-5xl 2xl:text-8xl font-medium md:mt-6 md:mb-4">Your One-Stop Shopping Destination</h2>
                <p className="lg:w-[85%] text-[#fff] text-xs md:text-base 2xl:text-2xl">Discover a world of convenience at Sob Dokander. Shop for top-quality products, from fashion to electronics, all in one place. Experience shopping reimagined.</p>
            </div>
        </div>
    );
};

export default Banner;