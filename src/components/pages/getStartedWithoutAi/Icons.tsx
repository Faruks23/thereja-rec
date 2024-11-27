export const ActiveCheckboxSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12.5"
        r="10.85"
        stroke="url(#paint0_linear_6664_3530)"
        strokeWidth="2.3"
      />
      <circle cx="12" cy="12.5" r="8" fill="#01D18F" />
      <defs>
        <linearGradient
          id="paint0_linear_6664_3530"
          x1="-1.54078e-07"
          y1="1.3"
          x2="26.8373"
          y2="5.73636"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#01D18F" />
          <stop offset="1" stop-color="#005AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const XmarkSVG = () => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_6564_13134" fill="white">
        <path d="M7.09936 6.50975L11.772 1.83703C12.0761 1.53309 12.0761 1.04163 11.772 0.737725C11.4681 0.433779 10.9766 0.433779 10.6727 0.737725L5.99995 5.4104L1.32738 0.737725C1.02328 0.433779 0.532015 0.433779 0.228069 0.737725C-0.0760229 1.04167 -0.0760229 1.53309 0.228069 1.83703L4.9006 6.50975L0.228105 11.1824C-0.0759865 11.4864 -0.0759865 11.9778 0.228105 12.2817C0.300203 12.354 0.385876 12.4114 0.480204 12.4505C0.574531 12.4896 0.675653 12.5096 0.777759 12.5095C0.976745 12.5095 1.1758 12.4333 1.32741 12.2817L5.99995 7.60906L10.6727 12.2817C10.7448 12.354 10.8305 12.4114 10.9248 12.4505C11.0191 12.4895 11.1202 12.5096 11.2224 12.5095C11.4213 12.5095 11.6204 12.4333 11.772 12.2817C12.0761 11.9778 12.0761 11.4864 11.772 11.1824L7.09936 6.50975Z" />
      </mask>
      <path
        d="M7.09936 6.50975L11.772 1.83703C12.0761 1.53309 12.0761 1.04163 11.772 0.737725C11.4681 0.433779 10.9766 0.433779 10.6727 0.737725L5.99995 5.4104L1.32738 0.737725C1.02328 0.433779 0.532015 0.433779 0.228069 0.737725C-0.0760229 1.04167 -0.0760229 1.53309 0.228069 1.83703L4.9006 6.50975L0.228105 11.1824C-0.0759865 11.4864 -0.0759865 11.9778 0.228105 12.2817C0.300203 12.354 0.385876 12.4114 0.480204 12.4505C0.574531 12.4896 0.675653 12.5096 0.777759 12.5095C0.976745 12.5095 1.1758 12.4333 1.32741 12.2817L5.99995 7.60906L10.6727 12.2817C10.7448 12.354 10.8305 12.4114 10.9248 12.4505C11.0191 12.4895 11.1202 12.5096 11.2224 12.5095C11.4213 12.5095 11.6204 12.4333 11.772 12.2817C12.0761 11.9778 12.0761 11.4864 11.772 11.1824L7.09936 6.50975Z"
        fill="#30353E"
      />
      <path
        d="M7.09936 6.50975L-17.6496 -18.2388L-42.3978 6.50984L-17.6495 31.2584L7.09936 6.50975ZM11.772 1.83703L-12.9723 -22.9162L-12.9769 -22.9115L11.772 1.83703ZM11.772 0.737725L-12.9767 25.4865L-12.9708 25.4924L11.772 0.737725ZM10.6727 0.737725L35.4212 25.4867L35.4229 25.485L10.6727 0.737725ZM5.99995 5.4104L-18.7491 30.1588L5.99946 54.908L30.7485 30.1593L5.99995 5.4104ZM1.32738 0.737725L26.0764 -24.0107L26.0702 -24.0169L1.32738 0.737725ZM0.228069 0.737725L24.9709 25.4924L24.9768 25.4865L0.228069 0.737725ZM0.228069 1.83703L24.9773 -22.9112L24.9709 -22.9176L0.228069 1.83703ZM4.9006 6.50975L29.6498 31.258L54.3971 6.50975L29.6498 -18.2385L4.9006 6.50975ZM0.228105 11.1824L24.9709 35.9371L24.9773 35.9307L0.228105 11.1824ZM0.228105 12.2817L25.0119 -12.4319L24.9907 -12.4532L24.9694 -12.4744L0.228105 12.2817ZM0.777759 12.5095V-22.4905H0.758543L0.739326 -22.4905L0.777759 12.5095ZM1.32741 12.2817L26.0762 37.0305L26.0765 37.0301L1.32741 12.2817ZM5.99995 7.60906L30.7485 -17.1399L5.99937 -41.8886L-18.7492 -17.1393L5.99995 7.60906ZM10.6727 12.2817L35.4531 -12.4353L35.4372 -12.4512L35.4212 -12.4672L10.6727 12.2817ZM11.2224 12.5095V-22.4905H11.2055L11.1887 -22.4905L11.2224 12.5095ZM11.772 12.2817L-12.9723 -12.4715L-12.9767 -12.467L11.772 12.2817ZM11.772 11.1824L-12.9768 35.9311L-12.9723 35.9356L11.772 11.1824ZM31.8483 31.2583L36.5209 26.5856L-12.9769 -22.9115L-17.6496 -18.2388L31.8483 31.2583ZM36.5163 26.5902C50.4938 12.6177 50.4959 -10.0425 36.5148 -24.0169L-12.9708 25.4924C-26.3438 12.1258 -26.3417 -9.55155 -12.9723 -22.9162L36.5163 26.5902ZM36.5207 -24.011C22.5493 -37.9825 -0.104108 -37.9846 -14.0775 -24.0095L35.4229 25.485C22.0573 38.8522 0.38685 38.85 -12.9767 25.4865L36.5207 -24.011ZM-14.0758 -24.0112L-18.7486 -19.3385L30.7485 30.1593L35.4212 25.4867L-14.0758 -24.0112ZM30.749 -19.338L26.0764 -24.0107L-23.4217 25.4862L-18.7491 30.1588L30.749 -19.338ZM26.0702 -24.0169C12.1024 -37.9781 -10.5451 -37.9866 -24.5207 -24.011L24.9768 25.4865C11.6091 38.8541 -10.0558 38.8456 -23.4154 25.4924L26.0702 -24.0169ZM-24.5147 -24.0169C-38.4951 -10.0433 -38.4951 12.618 -24.5147 26.5917L24.9709 -22.9176C38.343 -9.55188 38.343 12.1266 24.9709 25.4924L-24.5147 -24.0169ZM-24.5212 26.5853L-19.8486 31.258L29.6498 -18.2385L24.9773 -22.9112L-24.5212 26.5853ZM-19.8486 -18.2385L-24.5211 -13.5658L24.9773 35.9307L29.6498 31.258L-19.8486 -18.2385ZM-24.5147 -13.5722C-38.4942 0.400591 -38.4964 23.0631 -24.5132 37.0379L24.9694 -12.4744C38.3444 0.892538 38.3423 22.5722 24.9709 35.9371L-24.5147 -13.5722ZM-24.5557 36.9953C-21.2276 40.3329 -17.2729 42.9798 -12.9189 44.7841L13.8793 -19.8832C18.0447 -18.157 21.828 -15.6248 25.0119 -12.4319L-24.5557 36.9953ZM-12.9189 44.7841C-8.5649 46.5884 -3.89715 47.5147 0.816192 47.5095L0.739326 -22.4905C5.24845 -22.4954 9.71396 -21.6093 13.8793 -19.8832L-12.9189 44.7841ZM0.777759 47.5095C9.89931 47.5095 19.1105 43.9961 26.0762 37.0305L-23.4213 -12.467C-16.7589 -19.1294 -7.94582 -22.4905 0.777759 -22.4905V47.5095ZM26.0765 37.0301L30.7491 32.3574L-18.7492 -17.1393L-23.4217 -12.4666L26.0765 37.0301ZM-18.7486 32.358L-14.0759 37.0307L35.4212 -12.4672L30.7485 -17.1399L-18.7486 32.358ZM-14.1077 36.9987C-10.7804 40.3346 -6.82697 42.9803 -2.4743 44.7841L24.3239 -19.8832C28.4879 -18.1576 32.27 -15.6265 35.4531 -12.4353L-14.1077 36.9987ZM-2.4743 44.7841C1.87835 46.5878 6.54442 47.514 11.256 47.5095L11.1887 -22.4905C15.6961 -22.4948 20.1599 -21.6088 24.3239 -19.8832L-2.4743 44.7841ZM11.2224 47.5095C20.3439 47.5095 29.5551 43.9961 36.5207 37.0305L-12.9767 -12.467C-6.31431 -19.1294 2.49877 -22.4905 11.2224 -22.4905V47.5095ZM36.5163 37.0349C50.4946 23.0616 50.4946 0.402554 36.5163 -13.5708L-12.9723 35.9356C-26.3425 22.5702 -26.3425 0.89397 -12.9723 -12.4715L36.5163 37.0349ZM36.5208 -13.5662L31.8482 -18.2389L-17.6495 31.2584L-12.9768 35.9311L36.5208 -13.5662Z"
        fill="white"
        mask="url(#path-1-inside-1_6564_13134)"
      />
    </svg>
  );
};

export const WarningSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00065 14.6663C11.6673 14.6663 14.6673 11.6663 14.6673 7.99967C14.6673 4.33301 11.6673 1.33301 8.00065 1.33301C4.33398 1.33301 1.33398 4.33301 1.33398 7.99967C1.33398 11.6663 4.33398 14.6663 8.00065 14.6663Z"
        stroke="#FF0000"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.33301V8.66634"
        stroke="#FF0000"
        strokeWidth="1.2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99609 10.667H8.00208"
        stroke="#FF0000"
        strokeWidth="1.6"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusSVG = () => {
  return (
    <svg
      className="w-[24px]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M6 12.5H18"
        stroke="#292D32"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18.5V6.5"
        stroke="#292D32"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const StarSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M11.4416 3.42495L12.9083 6.35828C13.1083 6.76662 13.6416 7.15828 14.0916 7.23328L16.7499 7.67495C18.4499 7.95828 18.8499 9.19162 17.6249 10.4083L15.5583 12.4749C15.2083 12.8249 15.0166 13.4999 15.1249 13.9833L15.7166 16.5416C16.1833 18.5666 15.1083 19.3499 13.3166 18.2916L10.8249 16.8166C10.3749 16.5499 9.63326 16.5499 9.17492 16.8166L6.68326 18.2916C4.89992 19.3499 3.81659 18.5583 4.28326 16.5416L4.87492 13.9833C4.98326 13.4999 4.79159 12.8249 4.44159 12.4749L2.37492 10.4083C1.15826 9.19162 1.54992 7.95828 3.24992 7.67495L5.90826 7.23328C6.34992 7.15828 6.88326 6.76662 7.08326 6.35828L8.54992 3.42495C9.34992 1.83328 10.6499 1.83328 11.4416 3.42495Z"
        stroke="#292D32"
        strokeWidth="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const InActiveCheckboxSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <circle cx="12" cy="12.5" r="10.85" stroke="#005AFF" strokeWidth="2.3" />
    </svg>
  );
};

export const YellowWarningSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M10.9987 20.1698C16.0404 20.1698 20.1654 16.0448 20.1654 11.0031C20.1654 5.96142 16.0404 1.83643 10.9987 1.83643C5.95703 1.83643 1.83203 5.96142 1.83203 11.0031C1.83203 16.0448 5.95703 20.1698 10.9987 20.1698Z"
        stroke="#FFCC48"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7.33643V11.9198"
        stroke="#FFCC48"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9941 14.6636H11.0024"
        stroke="#FFCC48"
        strokeWidth="2"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckedSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] xl:w-[42px] xl:h-[42px]"
    >
      <path
        d="M21 0C9.45 0 0 9.45 0 21C0 32.55 9.45 42 21 42C32.55 42 42 32.55 42 21C42 9.45 32.55 0 21 0ZM30.03 15.96L20.37 28.56C19.95 28.98 19.32 29.4 18.69 29.4C18.06 29.4 17.43 29.19 17.01 28.56L11.97 22.05C11.34 21.21 11.34 19.74 12.39 19.11C13.44 18.48 14.7 18.48 15.33 19.53L18.69 23.94L26.67 13.44C27.3 12.6 28.77 12.39 29.61 13.02C30.66 13.65 30.66 14.91 30.03 15.96Z"
        fill="#005AFF"
      />
    </svg>
  );
};

export const UnCheckedSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] xl:w-[42px] xl:h-[42px]"
    >
      <circle cx="21" cy="21" r="20" stroke="#A8B7C1" strokeWidth="2" />
    </svg>
  );
};

// export const ActiveCheckboxSVG = ({ className }: {className?:string}) => {
//     return (
//       <svg
//         width="24"
//         height="25"
//         viewBox="0 0 24 25"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle
//           cx="12"
//           cy="12.5"
//           r="10.85"
//           stroke="url(#paint0_linear_6664_3530)"
//           strokeWidth="2.3"
//         />
//         <circle cx="12" cy="12.5" r="8" fill="#01D18F" />
//         <defs>
//           <linearGradient
//             id="paint0_linear_6664_3530"
//             x1="-1.54078e-07"
//             y1="1.3"
//             x2="26.8373"
//             y2="5.73636"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stop-color="#01D18F" />
//             <stop offset="1" stop-color="#005AFF" />
//           </linearGradient>
//         </defs>
//       </svg>
//     );
//   };