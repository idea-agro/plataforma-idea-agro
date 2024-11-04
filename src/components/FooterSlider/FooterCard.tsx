import React from "react";

const FooterCard = ({ title, logo, description, link }) => {
  return (
    <div className="bg-background text-foreground rounded-lg  flex flex-col justify-center items-center h-[275px] w-[275px] hover:scale-100 transition-all duration-300 hover:shadow-2xl  neumorphism ">
      <img
        src={logo}
        className="w-[110px] h-[110px]"
        alt="Pastizales ROU Logo"
      />
      <div className="px-6 flex flex-col justify-center items-center">
        <h2 className="text-xl  font-semibold text-center">{title}</h2>
        <p className=" mt-2 text-[10px] text-center">{description}</p>
        <a
          href={link}
          target="_blank"
          className="mt-[10px] text-[12px] ml-auto hover:underline text-right "
          rel="noreferrer"
        >
          <i className="fa-solid fa-external-link-alt" title="test tooltip" />
        </a>
      </div>
    </div>
  );
};

export default FooterCard;
