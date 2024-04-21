import Gradient from "@/icons/gradient";
import LoaderGradient from "@/icons/loader-gradient";
import { useEffect, useState } from "react";

const Loader = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const totalDuration = 3000; // Total duration in milliseconds
    const pauseDuration = totalDuration / 4; // Pause every 25%

    let currentTime = 0;

    const timeout = setTimeout(function updatePercent() {
      currentTime += 30; // Increment time by 30 milliseconds

      if (currentTime < totalDuration) {
        let calculatedPercent = Math.floor((currentTime / totalDuration) * 100);

        // Pause at 25%, 50%, and 75%
        if (
          calculatedPercent === 22 ||
          calculatedPercent === 55 ||
          calculatedPercent === 70
        ) {
          setTimeout(updatePercent, pauseDuration);
        } else {
          setPercent(calculatedPercent);
          setTimeout(updatePercent, 30);
        }
      } else {
        // Ensure percent is 100 when time is up
        setPercent(100);
      }
    }, 30);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center overflow-hidden transition-all duration-1000 bg-[#EEF2FF] dark:bg-[#0A0A0A]"
      id="loader"
    >
      <Gradient isLoading />
      <Logo />

      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[130px] leading-[400px] md:text-[250px] md:leading-[200px] xl:text-[400px] xl:leading-[250px] font-black text-transparent opacity-40 dark:opacity-20">
        <span className="text-stroke-primary-1 md:text-stroke-primary-2 xl:text-stroke-primary-4">
          {percent}
        </span>
        <span className="text-stroke-primary-1 md:text-stroke-primary-auto text-[80px] md:text-[150px]">
          %
        </span>
      </span>
    </div>
  );
};

const Logo = () => (
  <svg
    width="166"
    height="37"
    viewBox="0 0 166 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M55.448 30.512C52.408 30.512 50.296 28.976 50.296 24.688V15.92H47.8V13.328H50.296V10.224H53.176V13.328H57.624V15.92H53.176V24.496C53.176 26.672 53.976 27.92 55.832 27.92C56.376 27.92 56.984 27.824 57.624 27.568V30.224C57.016 30.352 56.344 30.512 55.448 30.512ZM67.0695 30.512C61.9175 30.512 58.5575 26.768 58.5575 21.68C58.5575 16.592 61.9175 12.848 67.0695 12.848C72.2215 12.848 75.5815 16.592 75.5815 21.68C75.5815 26.768 72.2215 30.512 67.0695 30.512ZM61.5015 21.68C61.5015 25.168 63.6135 27.856 67.0695 27.856C70.5255 27.856 72.6055 25.168 72.6055 21.68C72.6055 18.192 70.5255 15.504 67.0695 15.504C63.6135 15.504 61.5015 18.192 61.5015 21.68ZM78.1275 30V6.576H80.9435V30H78.1275ZM89.735 30.512C86.247 30.512 83.815 28.144 83.815 23.408V13.328H86.695V22.768C86.695 25.84 88.071 27.824 90.791 27.824C94.055 27.824 95.879 25.04 95.879 21.808V13.328H98.727V30H95.879V25.616C95.527 27.376 93.735 30.512 89.735 30.512ZM106.204 30C106.076 29.008 105.66 27.504 105.084 25.872L100.636 13.328H103.868L107.26 23.216C107.708 24.88 108.092 26.384 108.188 27.76C108.284 26.384 108.668 24.88 109.116 23.216L112.188 13.328H115.292L118.364 23.216C118.78 24.88 119.164 26.384 119.26 27.76C119.388 26.384 119.772 24.88 120.188 23.216L123.612 13.328H126.844L122.396 25.872C121.82 27.504 121.404 29.008 121.244 30H117.34C117.244 29.008 116.892 27.504 116.412 25.872L115.004 21.328C114.524 19.568 114.108 17.872 113.756 16.208C113.404 17.872 112.956 19.568 112.476 21.328L111.036 25.872C110.556 27.504 110.204 29.008 110.108 30H106.204ZM131.726 30.512C128.782 30.512 127.054 28.688 127.054 26.416C127.054 23.44 129.998 22 133.71 21.488C130.798 21.52 127.982 20.208 127.982 17.552C127.982 15.056 130.574 12.912 134.894 12.912C138.862 12.912 141.582 15.12 141.582 18.064V30H138.734V23.696C137.966 26.928 135.758 30.512 131.726 30.512ZM129.902 25.68C129.902 26.896 130.798 27.92 132.558 27.92C135.886 27.92 138.222 24.176 138.638 20.432C136.75 22.64 129.902 22.352 129.902 25.68ZM130.862 18.128C130.862 19.472 132.27 20.72 134.83 20.72C137.166 20.72 138.734 19.632 138.734 18.16C138.734 16.656 137.198 15.504 134.798 15.504C132.238 15.504 130.862 16.784 130.862 18.128ZM144.471 30V13.328H147.351V17.68C147.703 15.92 149.463 12.848 153.495 12.848C156.951 12.848 159.383 15.216 159.383 19.92V30H156.535V20.528C156.535 17.456 155.127 15.472 152.439 15.472C149.143 15.472 147.351 18.256 147.351 21.488V30H144.471ZM162.253 30V13.328H165.101V30H162.253ZM161.741 8.4C161.741 7.376 162.573 6.576 163.661 6.576C164.781 6.576 165.613 7.376 165.613 8.4C165.613 9.424 164.781 10.256 163.661 10.256C162.573 10.256 161.741 9.424 161.741 8.4Z"
      // fill="white"
      className="fill-current text-black dark:text-white"
    />
    <rect
      x="1"
      y="1.71362"
      width="34"
      height="34"
      rx="5"
      stroke="#6385FF"
      stroke-width="2"
    />
    <path
      d="M18.2782 20.136L14.5825 30.5825L6.41751 22.4175L16.864 18.7218L18.2782 20.136ZM29.5 7.49997L26.5114 18.6535L18.3464 10.4886L29.5 7.49997ZM16.1568 19.4289L22.4289 13.1568L23.8431 14.5711L17.5711 20.8431L16.1568 19.4289Z"
      fill="#6385FF"
    />
  </svg>
);

export default Loader;
