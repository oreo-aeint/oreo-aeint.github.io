import { useState } from 'react';
import { Smartphone } from 'lucide-react';

export interface ProjectShowcaseConfig {
  /** Three portrait screenshots ordered: [left, center, right] */
  screens: [string, string, string];
  /** Set to false if the screenshots already include their own phone device frame */
  addDeviceFrame?: boolean;
}

interface PhoneTriptychProps {
  projectName: string;
  showcase?: ProjectShowcaseConfig;
}

interface PhoneSlotProps {
  src?: string;
  alt: string;
  addDeviceFrame: boolean;
  className: string;
  slotIndex: number;
}

function PhoneSlot({
  src,
  alt,
  addDeviceFrame,
  className,
  slotIndex,
}: PhoneSlotProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(src) && !imgError;

  if (showImage && !addDeviceFrame) {
    return (
      <div className={`relative aspect-[9/19.2] ${className}`}>
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-full w-full object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.85)]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[9/19] rounded-[16px] sm:rounded-[20px] border-[1.5px] border-[#92929D]/55 bg-[#09090B] p-[3px] sm:p-[3.5px] shadow-[0_20px_42px_rgba(0,0,0,0.88)] ${className}`}
    >
      {/* Top bezel speaker slit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[1.5px] left-1/2 z-20 h-[1.5px] w-[20%] -translate-x-1/2 rounded-full bg-[#303039]"
      />

      <div className="relative h-full w-full overflow-hidden rounded-[13px] sm:rounded-[16px] bg-[#09090B]">
        {showImage ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(198,40,61,0.16),transparent_65%),linear-gradient(180deg,#1A1A22_0%,#101014_100%)] px-2 text-center">
            <Smartphone
              className="h-4 w-4 sm:h-5 sm:w-5 text-[#C6283D]/80"
              aria-hidden="true"
            />
            <span className="mt-1.5 font-mono text-[8px] sm:text-[9px] text-[#92929D] tabular-nums">
              0{slotIndex + 1}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function PhoneTriptych({ projectName, showcase }: PhoneTriptychProps) {
  const screens = showcase?.screens;
  const addDeviceFrame = showcase?.addDeviceFrame ?? true;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#101014] px-4 pt-4 pb-3 select-none">
      {/* Dark-crimson studio backdrop glow matching reference composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(198,40,61,0.24),transparent_68%),radial-gradient(circle_at_50%_85%,rgba(198,40,61,0.10),transparent_60%)] transition-opacity duration-300 opacity-85 group-hover:opacity-100"
      />

      {/* 3-Phone Fanned Triptych */}
      <div className="relative z-10 flex h-full w-full items-center justify-center gap-3 sm:gap-5">
        <PhoneSlot
          src={screens?.[0]}
          alt={`${projectName} mobile preview 1`}
          addDeviceFrame={addDeviceFrame}
          slotIndex={0}
          className="w-[26.5%] sm:w-[26%] max-w-[126px] -rotate-[7deg] translate-y-2.5 opacity-90 blur-[0.5px] transition-all duration-300 ease-out group-hover:-rotate-[9deg] group-hover:-translate-x-1 group-hover:opacity-100 group-hover:blur-0"
        />

        <PhoneSlot
          src={screens?.[1]}
          alt={`${projectName} mobile preview 2`}
          addDeviceFrame={addDeviceFrame}
          slotIndex={1}
          className="z-10 w-[28.5%] sm:w-[28%] max-w-[134px] -translate-y-1 transition-transform duration-300 ease-out group-hover:-translate-y-2.5"
        />

        <PhoneSlot
          src={screens?.[2]}
          alt={`${projectName} mobile preview 3`}
          addDeviceFrame={addDeviceFrame}
          slotIndex={2}
          className="w-[26.5%] sm:w-[26%] max-w-[126px] rotate-[7deg] translate-y-2.5 opacity-90 blur-[0.5px] transition-all duration-300 ease-out group-hover:rotate-[9deg] group-hover:translate-x-1 group-hover:opacity-100 group-hover:blur-0"
        />
      </div>
    </div>
  );
}
