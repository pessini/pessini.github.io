import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        const finishTimeout = setTimeout(() => {
            onFinish();
        }, 2200); // Total animation time

        return () => {
            clearTimeout(timeout);
            clearTimeout(finishTimeout);
        };
    }, [onFinish]);

    return (
        <div className="loader-container">
            <div className="loader-content">
                <svg
                    id="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 60 84"
                    className="loader-svg"
                >
                    <title>Loader Logo</title>
                    <g transform="translate(0, 12)">
                        <rect
                            className="loader-shape"
                            width="60"
                            height="60"
                            rx="10"
                            fill="none"
                            stroke="#0A696D"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            className="loader-p"
                            d="M17.4926 26.36C17.4926 25.944 17.6686 25.688 18.0206 25.592C18.3726 25.464 18.9966 25.4 19.8926 25.4H28.4846C33.4766 25.4 37.3646 26.536 40.1486 28.808C42.9326 31.048 44.3246 33.864 44.3246 37.256C44.3246 40.808 43.0926 43.544 40.6286 45.464C38.1646 47.352 34.5646 48.296 29.8286 48.296H25.7486C25.3006 48.296 25.0286 48.344 24.9326 48.44C24.8366 48.536 24.7886 48.808 24.7886 49.256V52.04C24.7886 53.288 24.9326 54.296 25.2206 55.064C25.5086 55.8 25.8126 56.264 26.1326 56.456C26.4846 56.648 26.8046 56.872 27.0926 57.128C27.3806 57.352 27.5246 57.656 27.5246 58.04C27.5246 58.68 26.7406 59 25.1726 59H19.8926C18.2926 59 17.4926 58.68 17.4926 58.04C17.4926 57.656 17.6366 57.352 17.9246 57.128C18.2446 56.872 18.5806 56.648 18.9326 56.456C19.2846 56.264 19.6046 55.8 19.8926 55.064C20.2126 54.296 20.3726 53.288 20.3726 52.04V31.976C20.3726 30.76 20.2126 29.8 19.8926 29.096C19.6046 28.392 19.2846 27.96 18.9326 27.8C18.5806 27.64 18.2446 27.464 17.9246 27.272C17.6366 27.048 17.4926 26.744 17.4926 26.36ZM25.0766 45.56C25.2686 45.752 25.7166 45.912 26.4206 46.04C27.1566 46.136 28.2446 46.184 29.6846 46.184C36.2446 46.184 39.5246 43.512 39.5246 38.168C39.5246 35.064 38.4846 32.52 36.4046 30.536C34.3566 28.52 31.6846 27.512 28.3886 27.512C26.8526 27.512 25.8606 27.608 25.4126 27.8C24.9966 27.96 24.7886 28.296 24.7886 28.808V44.792C24.7886 45.144 24.8846 45.4 25.0766 45.56Z"
                            fill="#E0F2F1"
                            transform="translate(0, -12)"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Loader;
