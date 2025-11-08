import { useEffect, useState } from "preact/hooks";

interface CountdownTimerProps {
  expiresAt: string;
}

export default function CountdownTimer({ expiresAt }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const expireTime = new Date(expiresAt).getTime();
      const distance = expireTime - now;

      if (distance < 0) {
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      };
    };

    // Atualiza imediatamente
    setTimeLeft(calculateTimeLeft());

    // Atualiza a cada segundo
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  return (
    <div class="bf-countdown-container">
      {/* Dias */}
      <div class="bf-countdown-card">
        <span class="bf-countdown-number">{timeLeft.days}</span>
        <span class="bf-countdown-label">Dias</span>
      </div>

      {/* Separador */}
      <span class="bf-countdown-separator">:</span>

      {/* Horas */}
      <div class="bf-countdown-card">
        <span class="bf-countdown-number">{timeLeft.hours}</span>
        <span class="bf-countdown-label">Horas</span>
      </div>

      {/* Separador */}
      <span class="bf-countdown-separator">:</span>

      {/* Minutos */}
      <div class="bf-countdown-card">
        <span class="bf-countdown-number">{timeLeft.minutes}</span>
        <span class="bf-countdown-label">Min</span>
      </div>

      {/* Separador */}
      <span class="bf-countdown-separator">:</span>

      {/* Segundos */}
      <div class="bf-countdown-card">
        <span class="bf-countdown-number">{timeLeft.seconds}</span>
        <span class="bf-countdown-label">Seg</span>
      </div>
    </div>
  );
}
