import KiteIcon from "@/icons/kite";
import WeatherIcon from "@/icons/weather";

const InfoBar = ({
  hideOnMobile,
  isHeader,
}: {
  hideOnMobile?: boolean;
  isHeader?: boolean;
}) => {
  return (
    <div
      className={`absolute top-20 md:top-4 right-8 md:right-60 ${
        hideOnMobile ? "hidden md:block" : ""
      }`}
    >
      <div
        className="text-right space-y-1 text-xs md:text-sm font-light"
        id={isHeader ? "info" : ""}
      >
        <span className="flex gap-1 items-center">
          10°C  <WeatherIcon />
          <strong className="font-medium">ABU DHABI</strong> 05:05 PM
        </span>
        <span className="inline-block">
          AVAILABLE <strong className="font-medium">APRIL 2024</strong>
        </span>
        <span className="flex gap-2 items-center justify-end">
          <KiteIcon />
          <a href="mailto:info@toluwani.ea" className="font-medium">
            INFO@TOLUWANI.EA
          </a>
        </span>
      </div>
    </div>
  );
};

export default InfoBar;
