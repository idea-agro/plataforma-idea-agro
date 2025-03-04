import { Swiper, SwiperSlide } from "swiper/react";
import FooterCard from "./FooterCard";
import texts from "@/../texts.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import React from "react";

export default function FooterSlider() {
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				// slidesPerView={"auto"}
				slidesPerView={2}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				zoom={{
					maxRatio: 1,
				}}
				loop={true}
				coverflowEffect={{
					rotate: 60,
					stretch: 0,
					depth: 280,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination, Autoplay]}
				className="footerSwiper"
			>
				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardOne}
						description={texts.footer.descriptionCardOne}
						logo="/images/uba-logo.png"
						link="https://www.uba.ar/"
					/>
				</SwiperSlide>

				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardTwo}
						description={texts.footer.descriptionCardTwo}
						logo="/images/inia-logo.png"
						link="http://www.inia.uy/"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardThree}
						description={texts.footer.descriptionCardThree}
						logo="/images/fauba-logo.png"
						link="https://agro.uba.ar/"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardFour}
						description={texts.footer.descriptionCardFour}
						logo="/images/grupo-ecologia-logo.png"
						link="http://pastizales.fcien.edu.uy/"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardFive}
						description={texts.footer.descriptionCardFive}
						logo="/images/fcien-logo.png"
						link="https://www.fcien.edu.uy/"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardSix}
						description={texts.footer.descriptionCardSix}
						logo="/images/ifeva-logo.png"
						link="https://www.ifeva.edu.ar/"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardSeven}
						description={texts.footer.descriptionCardSeven}
						logo="/images/lart-logo.png"
						link="http://lart.agro.uba.ar/"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardEight}
						description={texts.footer.descriptionCardEight}
						logo="/images/fagro-logo.png"
						link="https://portal.fagro.edu.uy/"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<FooterCard
						title={texts.footer.titleCardNine}
						description={texts.footer.descriptionCardNine}
						logo="/images/udelar-logo.png"
						link="https://udelar.edu.uy/"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
