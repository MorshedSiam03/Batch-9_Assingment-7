const banner = () => {
    return (
        <div className="container mx-auto my-4">
            <div className="hero min-h-[80vh] rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/34JBRPG/Rectangle-1.png)'}}>
            {/* <div className="hero-overlay bg-opacity-40 rounded-3xl"></div> */}
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-[80%]">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold">Where Every Bite is Infused with Passion and Precision</h1>
                <p className="mb-5 text-sm md:text-lg ">An exceptional dining experience where every bite reflects meticulous craftsmanship and heartfelt dedication, ensuring each dish is a masterpiece of flavor and precision.</p>
                <a href="#Explore"><button className="btn bg-green-600 border-0 rounded-[32px] font-bold">Explore Now</button></a>
                <button className="mx-3 btn bg-transparent text-white rounded-[32px] font-bold">Our Feedback</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default banner;