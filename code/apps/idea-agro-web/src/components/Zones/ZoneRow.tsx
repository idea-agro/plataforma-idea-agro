import React, { useState } from "react";

export default function ZoneRow({ zone }) {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const [isVisible, setIsVisible ] = useState(true);
   
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-row justify-between items-center mb-2">
            {zone.type === "POLYGON" ? (
                <i className="fa-solid fa-draw-polygon inline-block" />
            ) : (
                <i className="fa-solid fa-location-dot inline-block" />
            )}

			
       
			<div className="flex-grow mx-3">{zone.name}</div>

            
            <div className="md:hidden relative">
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="text-foreground hover:text-primary focus:primary focus:outline-none "
                    aria-label="Options"
                    aria-haspopup="true"
                >
                    
                	<i className="fa-solid fa-ellipsis-vertical"></i>
                </button>

                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-38 bg-white rounded-md shadow-lg z-10 ">
                        <div className="py-1">
                            <a
                                href={`/Zone?id=${zone.id}`}
                                className="flex flex-row justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 "
                            >
                                Indicadores <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M5 11h3v5H5zm-4 3h3v2H1zm12-2h3v4h-3zM9 9h3v7H9zm7-8.93l-5.68 4.97l-5.47-1.7L0 7.1V9l5.15-4l5.53 1.72L16 2.06z"/></svg>
                            </a>
                            <a
                                href="/"
                                className="flex flex-row justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 "
                            >
                                Ocultar <i className="fa-solid fa-eye-slash cursor-pointer " />
                            </a>
                            <a
                                href="/"
                                className="flex flex-row justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300  "
                            >
                                Eliminar <i className="fa-solid fa-trash cursor-pointer ml-10 " />
                            </a>
                        </div>
                    </div>
                )}
            </div>
			<div className="hidden md:flex justify-between items-center w-20">
							<a title="Indicadores" href={`/Zone?id=${zone.id}`}>
								{/* <i className="fa-solid fa-chart-line cursor-pointer" /> */}
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M5 11h3v5H5zm-4 3h3v2H1zm12-2h3v4h-3zM9 9h3v7H9zm7-8.93l-5.68 4.97l-5.47-1.7L0 7.1V9l5.15-4l5.53 1.72L16 2.06z"/></svg>
							</a>

							<span  title="Ocultar" >
								{ isVisible? <i className="fa-solid fa-eye-slash cursor-pointer" onClick={() => setIsVisible(!isVisible)} />
                                    : <i className="fa-solid fa-eye cursor-pointer" onClick={() => setIsVisible(!isVisible)} />
                                }
							</span>

							<a title="Eliminar" href="/">
								<i className="fa-solid fa-trash cursor-pointer" />
							</a>
			</div>
        </div>
    );
}
