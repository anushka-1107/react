const Hero = () => {
    return <main className="hero container">
        <div className="hero-content">
            <h1>first page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsum ipsa neque maxime sapiente quibusdam voluptatibus impedit. Labore, in repudiandae.</p>
        </div>
        <div className="hero-btn">
            <button>shop now</button>
            <button>category</button>

        </div>
        <div className="shopping">
            <p>also available on</p>
            <div>
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
        </div>
        </div>

        <div className="hero-image"><img src="/images/shoe.png" alt="shoes" /> </div>
    </main>
}

export default Hero