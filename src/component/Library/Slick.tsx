import Slider from "react-slick";

const Slick = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            asd
            <Slider {...settings}>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
                <div>
                    3
                </div>
                <div>
                    4
                </div>
                <div>
                    5
                </div>
                <div>
                    6
                </div>
                <div>
                    7
                </div>
            </Slider>
        </>
    )
}

export default Slick;