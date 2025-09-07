import React from "react";
import { CircleArrowIcon, UpArrowIcon } from "./Icons";

// Arrow Icon
export const CircleOutlinedButton = ({ className }) => (
  <button className="cursor-pointer flex items-center gap-2 px-5 py-2  rounded-full text-sm font-medium hover:bg-[#CE7D63]/10 transition h-3/12 cursor-pointer">
    <span className="w-10 h-10 flex items-center justify-center">
      <CircleArrowIcon />
    </span>
    <span className="text-[#CE7D63]">START A PROJECT</span>
  </button>
);

// Twitter Icon
export const BlackCircleButton = ({ className }) => (
  <button className="cursor-pointer flex items-center gap-2 px-5 py-2 bg-black text-gray-300 rounded-full text-sm font-medium hover:bg-gray-900 transition">
    <span className="text-[#CE7D63]">
      <UpArrowIcon />
    </span>
    KNOW MORE
  </button>
);

export const RoundedRectangle = ({ className }) => (
  <button className="cursor-pointer flex items-center gap-2 px-6 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-900 transition">
    GET IN TOUCH
    <span className="text-[#CE7D63]">
      <UpArrowIcon />
    </span>
  </button>
);

export const FilledOrangeSmallButton = ({ className }) => (
  <button className="cursor-pointer px-4 py-2 bg-[#CE7D63] text-white rounded-md text-sm font-medium hover:bg-[#d46c47] transition">
    SOLUTION
  </button>
);

export const MinimalStyleButton = ({ className }) => (
  <button className="cursor-pointer flex items-center gap-2 px-5 py-2 text-gray-300 rounded-md text-sm font-medium hover:text-white transition">
    BOOK A CALL
    <span className="text-[#CE7D63]">
      <UpArrowIcon />
    </span>
  </button>
);

export const TwitterHandleButton = ({ className }) => (
  <button className="cursor-pointer flex items-center gap-2 px-5 py-2 bg-[#1A1A1A] text-gray-300 rounded-md text-sm font-medium hover:bg-gray-800 transition">
    <span className="text-[#CE7D63]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
      >
        <path
          d="M21.8207 2.16228C21.1144 2.46626 20.3718 2.67793 19.6113 2.79207C19.9669 2.73112 20.49 2.09117 20.6982 1.83214C21.0146 1.44142 21.2557 0.995386 21.4093 0.516686C21.4093 0.481133 21.4448 0.430344 21.4093 0.404949C21.3914 0.395169 21.3713 0.390044 21.3509 0.390044C21.3305 0.390044 21.3104 0.395169 21.2925 0.404949C20.4667 0.852114 19.5879 1.1934 18.6768 1.42075C18.645 1.43045 18.6112 1.43132 18.579 1.42326C18.5468 1.41521 18.5174 1.39854 18.494 1.37504C18.423 1.29059 18.3467 1.21085 18.2654 1.13632C17.8938 0.803369 17.4722 0.530861 17.016 0.328764C16.4002 0.0761234 15.735 -0.0332896 15.0707 0.00878765C14.4262 0.0494946 13.7969 0.222378 13.222 0.516686C12.6558 0.826973 12.1583 1.24851 11.7592 1.75596C11.3394 2.27826 11.0364 2.8844 10.8704 3.5336C10.7335 4.15113 10.718 4.78938 10.8247 5.41283C10.8247 5.51949 10.8247 5.53473 10.7333 5.51949C7.11194 4.98619 4.14074 3.70121 1.71298 0.943321C1.60632 0.821426 1.55045 0.821426 1.46411 0.943321C0.407683 2.54828 0.92066 5.08777 2.2412 6.34228C2.41896 6.50989 2.6018 6.67242 2.79481 6.82479C2.18935 6.7818 1.59868 6.61773 1.05779 6.34228C0.956213 6.27626 0.900344 6.31181 0.895265 6.43371C0.880867 6.6027 0.880867 6.77261 0.895265 6.9416C1.00124 7.7515 1.32042 8.51871 1.82015 9.1648C2.31988 9.81088 2.98224 10.3126 3.7395 10.6188C3.9241 10.6979 4.11645 10.7574 4.31342 10.7966C3.75292 10.9069 3.17805 10.9241 2.61196 10.8473C2.49007 10.822 2.44436 10.888 2.49007 11.0048C3.23668 13.0364 4.85687 13.656 6.04536 14.0014C6.20788 14.0268 6.37041 14.0268 6.55326 14.0674C6.55326 14.0674 6.55326 14.0674 6.52278 14.0979C6.17233 14.7378 4.75529 15.1696 4.10518 15.393C2.91857 15.8193 1.65341 15.9822 0.397525 15.8705C0.199444 15.84 0.153733 15.8451 0.102943 15.8705C0.0521536 15.8959 0.102943 15.9517 0.158812 16.0025C0.412762 16.1701 0.666711 16.3174 0.930818 16.4596C1.71707 16.8885 2.54829 17.2291 3.40936 17.4754C7.86871 18.7045 12.8868 17.8005 16.2338 14.4737C18.8647 11.8631 19.7891 8.26214 19.7891 4.65606C19.7891 4.51893 19.9567 4.43766 20.0532 4.36656C20.7188 3.84794 21.3056 3.23546 21.7953 2.54828C21.8801 2.44585 21.9236 2.31542 21.9172 2.18259C21.9172 2.10641 21.9172 2.12165 21.8207 2.16228Z"
          fill="#CE7D63"
        />
      </svg>
    </span>
    @wadewarren
    <span className="text-[#CE7D63]">↗</span>
  </button>
);
