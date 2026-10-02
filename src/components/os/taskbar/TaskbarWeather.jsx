import React, { useEffect, useState } from "react";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Moon,
  Sun,
} from "lucide-react";

const TaskbarWeather = () => {
  const [weather, setWeather] = useState({
    status: "loading",
    temperature: null,
    weatherCode: null,
    isDay: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setWeather({
        status: "unavailable",
        temperature: null,
        weatherCode: null,
        isDay: true,
      });

      return;
    }

    const loadWeather = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;

            const response = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&timezone=auto`
            );

            if (!response.ok) {
              throw new Error("Weather request failed");
            }

            const data = await response.json();

            setWeather({
              status: "success",
              temperature: Math.round(
                data.current.temperature_2m
              ),
              weatherCode: data.current.weather_code,
              isDay: Boolean(data.current.is_day),
            });
          } catch {
            setWeather({
              status: "unavailable",
              temperature: null,
              weatherCode: null,
              isDay: true,
            });
          }
        },
        () => {
          setWeather({
            status: "unavailable",
            temperature: null,
            weatherCode: null,
            isDay: true,
          });
        },
        {
          enableHighAccuracy: false,
          timeout: 10000,
          maximumAge: 15 * 60 * 1000,
        }
      );
    };

    loadWeather();

    const interval = setInterval(
      loadWeather,
      15 * 60 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = () => {
    const code = weather.weatherCode;

    if (weather.status !== "success") {
      return <Cloud size={17} />;
    }

    if (code === 0) {
      return weather.isDay ? (
        <Sun size={17} />
      ) : (
        <Moon size={17} />
      );
    }

    if ([1, 2].includes(code)) {
      return <CloudSun size={17} />;
    }

    if (code === 3) {
      return <Cloud size={17} />;
    }

    if ([45, 48].includes(code)) {
      return <CloudFog size={17} />;
    }

    if (
      [51, 53, 55, 56, 57, 61, 63, 65, 66, 67].includes(
        code
      )
    ) {
      return <CloudRain size={17} />;
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
      return <CloudSnow size={17} />;
    }

    if ([80, 81, 82].includes(code)) {
      return <CloudRain size={17} />;
    }

    if ([95, 96, 97, 99].includes(code)) {
      return <CloudLightning size={17} />;
    }

    return <Cloud size={17} />;
  };

  return (
    <div
      title={
        weather.status === "success"
          ? "Local weather"
          : "Weather unavailable"
      }
      className="
        shrink-0
        flex
        items-center
        gap-2
        h-9
        px-2.5
        rounded-xl
        bg-white/8
        border border-white/5
        text-white/80
      "
    >
      {getWeatherIcon()}

      <span className="text-xs font-medium">
        {weather.status === "success"
          ? `${weather.temperature}°C`
          : "--"}
      </span>
    </div>
  );
};

export default TaskbarWeather;