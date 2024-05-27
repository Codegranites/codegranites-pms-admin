import Image from 'next/image';
import Slider from 'react-slick';
import LogoImage from '../../../public/logo.svg';

const slides = [
  {
    src: LogoImage,
    alt: '* CodeGranites*'
  },
  {
    src: LogoImage,
    alt: '* CodeGranites*'
  },
  {
    src: LogoImage,
    alt: '* CodeGranites*'
  },
  {
    src: LogoImage,
    alt: '* CodeGranites*'
  },
  {
    src: LogoImage,
    alt: '* CodeGranites*'
  }
];
interface LogoCarouselProps {
  color?: boolean;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ color }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={`bg-primary overflow-hidden p-2 w-full`}>
      <Slider {...settings}>
        {slides.map((logo, index) => (
          <div key={index}>
            <div className="flex justify-evenly items-center flex-row space-x-3 md:space-x-[30px]">
              <p className="text-white text-[15px] font-worksans tracking-wider">
                {logo.alt}
              </p>
              <Image src={logo.src} alt={logo.alt} width={24} height={24} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
