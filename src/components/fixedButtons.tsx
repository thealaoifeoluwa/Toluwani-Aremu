import Link from "next/link";

const FixedButtons = () => {
  const toggleDarkMode = () => {
    if (
      localStorage.toluwaniTheme === "dark" ||
      (!("toluwaniTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.toluwaniTheme = "light";
    } else {
      localStorage.toluwaniTheme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
      <button
        className="fixed left-4 sm:left-8 2xl:left-16 bottom-10 sm:bottom-10 2xl:bottom-16 z-40 rounded-full"
        data-cursor="-hidden"
        onClick={toggleDarkMode}
      >
        <span className="block dark:hidden">
          <LightIcon />
        </span>
        <span className="hidden dark:block">
          <DarkIcon />
        </span>
      </button>
      <Link
        href="/Toluwani_Aremu_Resume.pdf"
        download
        target="_blank"
        className="fixed right-0 sm:right-4 2xl:right-8 bottom-0 sm:bottom-4 2xl:bottom-8 z-40 rounded-full"
        data-cursor="-hidden"
      >
        <GetCVIcon />
      </Link>
    </>
  );
};

const LightIcon = () => (
  <svg
    className="w-7 sm:w-9"
    // width="34"
    // height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.9103 32.8205C25.6972 32.8205 32.8205 25.6972 32.8205 16.9103C32.8205 8.12326 25.6972 1 16.9103 1C8.12326 1 1 8.12326 1 16.9103C1 25.6972 8.12326 32.8205 16.9103 32.8205Z"
      stroke="black"
      stroke-width="1.87179"
    />
    <path
      d="M16.9103 21.5896C15.6157 21.5896 14.5123 21.1332 13.6001 20.2204C12.6879 19.3076 12.2315 18.2041 12.2309 16.9101C12.2309 15.6154 12.6873 14.512 13.6001 13.5998C14.5129 12.6876 15.6163 12.2312 16.9103 12.2306C18.205 12.2306 19.3087 12.687 20.2216 13.5998C21.1344 14.5126 21.5905 15.6161 21.5898 16.9101C21.5898 18.2048 21.1334 19.3085 20.2206 20.2213C19.3078 21.1341 18.2044 21.5902 16.9103 21.5896ZM7.55138 17.846C7.2862 17.846 7.06409 17.7562 6.88502 17.5765C6.70595 17.3968 6.6161 17.1747 6.61548 16.9101C6.61548 16.6449 6.70532 16.4228 6.88502 16.2437C7.06471 16.0647 7.28683 15.9748 7.55138 15.9742H9.42317C9.68834 15.9742 9.91077 16.0641 10.0905 16.2437C10.2702 16.4234 10.3597 16.6456 10.3591 16.9101C10.3591 17.1753 10.2692 17.3977 10.0895 17.5774C9.90984 17.7571 9.68772 17.8466 9.42317 17.846H7.55138ZM24.3975 17.846C24.1324 17.846 23.9102 17.7562 23.7312 17.5765C23.5521 17.3968 23.4623 17.1747 23.4616 16.9101C23.4616 16.6449 23.5515 16.4228 23.7312 16.2437C23.9109 16.0647 24.133 15.9748 24.3975 15.9742H26.2693C26.5345 15.9742 26.7569 16.0641 26.9366 16.2437C27.1163 16.4234 27.2058 16.6456 27.2052 16.9101C27.2052 17.1753 27.1154 17.3977 26.9357 17.5774C26.756 17.7571 26.5339 17.8466 26.2693 17.846H24.3975ZM16.9103 10.3588C16.6452 10.3588 16.4231 10.269 16.244 10.0893C16.0649 9.90959 15.9751 9.68747 15.9745 9.42293V7.55113C15.9745 7.28596 16.0643 7.06384 16.244 6.88477C16.4237 6.7057 16.6458 6.61586 16.9103 6.61523C17.1755 6.61523 17.398 6.70508 17.5776 6.88477C17.7573 7.06447 17.8469 7.28658 17.8462 7.55113V9.42293C17.8462 9.6881 17.7564 9.91053 17.5767 10.0902C17.397 10.2699 17.1749 10.3594 16.9103 10.3588ZM16.9103 27.205C16.6452 27.205 16.4231 27.1151 16.244 26.9354C16.0649 26.7557 15.9751 26.5336 15.9745 26.2691V24.3973C15.9745 24.1321 16.0643 23.91 16.244 23.7309C16.4237 23.5519 16.6458 23.462 16.9103 23.4614C17.1755 23.4614 17.398 23.5512 17.5776 23.7309C17.7573 23.9106 17.8469 24.1327 17.8462 24.3973V26.2691C17.8462 26.5342 17.7564 26.7567 17.5767 26.9364C17.397 27.1161 17.1749 27.2056 16.9103 27.205ZM10.9674 12.2774L9.96131 11.2947C9.77413 11.1231 9.68429 10.9048 9.69177 10.6396C9.69926 10.3744 9.78911 10.1482 9.96131 9.96107C10.1485 9.77389 10.3747 9.6803 10.6398 9.6803C10.905 9.6803 11.1234 9.77389 11.295 9.96107L12.2777 10.9672C12.4492 11.1543 12.535 11.3727 12.535 11.6223C12.535 11.8719 12.4492 12.0902 12.2777 12.2774C12.1061 12.4646 11.8918 12.5544 11.6347 12.547C11.3776 12.5395 11.1552 12.4496 10.9674 12.2774ZM22.5257 23.8591L21.543 22.8531C21.3715 22.6659 21.2857 22.4438 21.2857 22.1867C21.2857 21.9296 21.3715 21.715 21.543 21.5428C21.7146 21.3556 21.9293 21.2661 22.1869 21.2742C22.4446 21.2823 22.6667 21.3718 22.8533 21.5428L23.8594 22.5255C24.0466 22.6971 24.1364 22.9154 24.1289 23.1806C24.1214 23.4458 24.0316 23.672 23.8594 23.8591C23.6722 24.0463 23.446 24.1399 23.1809 24.1399C22.9157 24.1399 22.6973 24.0463 22.5257 23.8591ZM21.543 12.2774C21.3559 12.1058 21.266 11.8915 21.2735 11.6345C21.281 11.3774 21.3708 11.155 21.543 10.9672L22.5257 9.96107C22.6973 9.77389 22.9157 9.68404 23.1809 9.69153C23.446 9.69902 23.6722 9.78886 23.8594 9.96107C24.0466 10.1482 24.1402 10.3744 24.1402 10.6396C24.1402 10.9048 24.0466 11.1231 23.8594 11.2947L22.8533 12.2774C22.6661 12.449 22.4477 12.5348 22.1982 12.5348C21.9486 12.5348 21.7302 12.449 21.543 12.2774ZM9.96131 23.8591C9.77413 23.672 9.68054 23.4458 9.68054 23.1806C9.68054 22.9154 9.77413 22.6971 9.96131 22.5255L10.9674 21.5428C11.1546 21.3712 11.3767 21.2854 11.6338 21.2854C11.8908 21.2854 12.1055 21.3712 12.2777 21.5428C12.4648 21.7144 12.5547 21.929 12.5472 22.1867C12.5397 22.4444 12.4499 22.6665 12.2777 22.8531L11.295 23.8591C11.1234 24.0463 10.905 24.1362 10.6398 24.1287C10.3747 24.1212 10.1485 24.0313 9.96131 23.8591Z"
      fill="black"
    />
  </svg>
);

const DarkIcon = () => (
  <svg
    className="w-7 sm:w-9"
    // width="34"
    // height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.9103 32.8205C25.6972 32.8205 32.8205 25.6972 32.8205 16.9103C32.8205 8.12326 25.6972 1 16.9103 1C8.12326 1 1 8.12326 1 16.9103C1 25.6972 8.12326 32.8205 16.9103 32.8205Z"
      stroke="white"
      stroke-width="1.87179"
    />
    <path
      d="M24.8522 8.96841C22.7459 6.86205 19.889 5.67871 16.9102 5.67871C13.9313 5.67871 11.0745 6.86205 8.96816 8.96841C6.86181 11.0748 5.67847 13.9316 5.67847 16.9104C5.67847 19.8893 6.86181 22.7461 8.96816 24.8525L16.9102 16.9104L24.8522 8.96841Z"
      fill="white"
    />
  </svg>
);

// const GetCVIcon = () => (
//   <svg
//     className="w-[90px] 2xl:w-[134px]"
//     // width="134"
//     // height="134"
//     viewBox="0 0 134 134"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M55.0898 28.151C66.7934 20.9309 79.1509 17.6466 89.634 18.8083C89.6018 19.0809 89.7957 19.3288 90.0685 19.3629C96.473 20.1633 102.118 22.6653 106.425 26.9722C110.732 31.2791 113.234 36.9241 114.034 43.3285C114.068 43.6014 114.316 43.7953 114.589 43.7631C115.75 54.2462 112.466 66.6037 105.246 78.3072C105.012 78.1618 104.705 78.233 104.558 78.4666C101.413 83.4924 97.5342 88.3929 92.9635 92.9636C88.3928 97.5342 83.4923 101.413 78.4665 104.558C78.2329 104.705 78.1617 105.012 78.3071 105.246C66.6036 112.466 54.2461 115.751 43.763 114.589C43.7952 114.316 43.6013 114.068 43.3285 114.034C36.924 113.234 31.279 110.732 26.9721 106.425C22.6652 102.118 20.1632 96.473 19.3629 90.0686C19.3288 89.7957 19.0808 89.6019 18.8082 89.634C17.6465 79.1509 20.9308 66.7934 28.1509 55.0899C28.3848 55.2353 28.6924 55.1641 28.8387 54.9305C31.9843 49.9048 35.8628 45.0042 40.4335 40.4336C45.0041 35.8629 49.9047 31.9844 54.9304 28.8387C55.1641 28.6925 55.2352 28.3849 55.0898 28.151Z"
//       fill="white"
//       fill-opacity="0.35"
//       stroke="white"
//       stroke-linecap="round"
//       stroke-dasharray="27.47 27.47"
//     />
//     <path
//       d="M55.0899 105.246C66.7935 112.466 79.1509 115.75 89.634 114.589C89.6019 114.316 89.7957 114.068 90.0686 114.034C96.473 113.234 102.118 110.732 106.425 106.425C110.732 102.118 113.234 96.4729 114.034 90.0684C114.068 89.7956 114.316 89.6017 114.589 89.6339C115.751 79.1508 112.466 66.7933 105.246 55.0898C105.012 55.2351 104.705 55.164 104.558 54.9304C101.413 49.9046 97.5342 45.0041 92.9636 40.4334C88.3929 35.8627 83.4924 31.9843 78.4666 28.8386C78.233 28.6923 78.1618 28.3847 78.3072 28.1508C66.6037 20.9308 54.2462 17.6464 43.7631 18.8081C43.7953 19.0808 43.6014 19.3287 43.3285 19.3628C36.9241 20.1632 31.2791 22.6651 26.9722 26.972C22.6653 31.2789 20.1633 36.9239 19.3629 43.3284C19.3288 43.6012 19.0809 43.7951 18.8083 43.7629C17.6466 54.246 20.9309 66.6035 28.151 78.307C28.3849 78.1617 28.6925 78.2328 28.8387 78.4665C31.9844 83.4922 35.8629 88.3928 40.4336 92.9634C45.0042 97.5341 49.9048 101.413 54.9305 104.558C55.1641 104.704 55.2353 105.012 55.0899 105.246Z"
//       fill="white"
//       fill-opacity="0.35"
//       stroke="white"
//       stroke-linecap="round"
//       stroke-dasharray="27.47 27.47"
//     />
//     <path
//       d="M66.4701 49.4674C66.8607 49.8579 67.4938 49.8579 67.8844 49.4674L74.2483 43.1034C74.6388 42.7129 74.6388 42.0797 74.2483 41.6892C73.8578 41.2987 73.2246 41.2987 72.8341 41.6892L67.1772 47.346L61.5204 41.6892C61.1299 41.2987 60.4967 41.2987 60.1062 41.6892C59.7157 42.0797 59.7157 42.7129 60.1062 43.1034L66.4701 49.4674ZM66.1772 11.7603L66.1772 48.7603L68.1772 48.7603L68.1772 11.7603L66.1772 11.7603Z"
//       fill="black"
//     />
//     <path
//       d="M44.0953 74.0123C42.4273 74.0123 41.0833 73.4363 40.0633 72.2843C39.0553 71.1323 38.5513 69.5303 38.5513 67.4783C38.5513 65.4143 39.0613 63.8063 40.0813 62.6543C41.1013 61.4903 42.4873 60.9083 44.2393 60.9083C45.6433 60.9083 46.7893 61.2743 47.6773 62.0063C48.5653 62.7383 49.0993 63.7403 49.2793 65.0123H47.4073C47.2513 64.2683 46.8973 63.6743 46.3453 63.2303C45.7933 62.7863 45.0913 62.5643 44.2393 62.5643C43.0393 62.5643 42.0973 62.9903 41.4133 63.8423C40.7413 64.6823 40.4053 65.8943 40.4053 67.4783C40.4053 69.0863 40.7533 70.3043 41.4493 71.1323C42.1453 71.9483 43.1053 72.3563 44.3293 72.3563C45.2533 72.3563 45.9973 72.0863 46.5613 71.5463C47.1373 71.0063 47.4673 70.2383 47.5513 69.2423H43.1233V67.6043H49.2793V73.7603H47.7673V72.0863C47.4313 72.6863 46.9393 73.1603 46.2913 73.5083C45.6553 73.8443 44.9233 74.0123 44.0953 74.0123ZM55.6803 74.0123C54.3843 74.0123 53.3403 73.5923 52.5483 72.7523C51.7563 71.9123 51.3603 70.7903 51.3603 69.3863C51.3603 68.0063 51.7443 66.9083 52.5123 66.0923C53.2923 65.2643 54.3063 64.8503 55.5543 64.8503C56.8383 64.8503 57.8523 65.2403 58.5963 66.0203C59.3403 66.7883 59.7123 67.8383 59.7123 69.1703C59.7123 69.3623 59.6943 69.6383 59.6583 69.9983H53.0883C53.1243 70.7903 53.3703 71.4143 53.8263 71.8703C54.2943 72.3143 54.9123 72.5363 55.6803 72.5363C56.7123 72.5363 57.4083 72.1223 57.7683 71.2943H59.5503C59.2743 72.1463 58.8063 72.8123 58.1463 73.2923C57.4863 73.7723 56.6643 74.0123 55.6803 74.0123ZM53.0883 68.6303H57.9483V68.5403C57.9483 67.8563 57.7323 67.3043 57.3003 66.8843C56.8803 66.4643 56.2983 66.2543 55.5543 66.2543C54.8343 66.2543 54.2523 66.4763 53.8083 66.9203C53.3643 67.3523 53.1243 67.9223 53.0883 68.6303ZM64.8953 73.7603C64.1393 73.7603 63.5933 73.5983 63.2573 73.2743C62.9213 72.9503 62.7533 72.4163 62.7533 71.6723V66.6323H60.4853V65.1023H62.7533V62.5103H64.4993V65.1023H67.2173V66.6323H64.4993V71.3303C64.4993 71.6543 64.5653 71.8883 64.6973 72.0323C64.8413 72.1643 65.0813 72.2303 65.4173 72.2303H67.2173V73.7603H64.8953ZM78.9904 74.0123C77.2624 74.0123 75.8884 73.4543 74.8684 72.3383C73.8484 71.2103 73.3384 69.5903 73.3384 67.4783C73.3384 65.3543 73.8424 63.7283 74.8504 62.6003C75.8584 61.4723 77.2504 60.9083 79.0264 60.9083C80.3944 60.9083 81.5164 61.2863 82.3924 62.0423C83.2804 62.7983 83.8204 63.8483 84.0124 65.1923H82.1224C81.9904 64.3763 81.6424 63.7403 81.0784 63.2843C80.5144 62.8163 79.8304 62.5823 79.0264 62.5823C77.8264 62.5823 76.8844 62.9843 76.2004 63.7883C75.5284 64.5923 75.1924 65.8103 75.1924 67.4423C75.1924 69.0503 75.5344 70.2683 76.2184 71.0963C76.9144 71.9243 77.8384 72.3383 78.9904 72.3383C79.8424 72.3383 80.5384 72.0863 81.0784 71.5823C81.6304 71.0663 81.9784 70.3883 82.1224 69.5483H83.9944C83.7664 70.9043 83.2204 71.9903 82.3564 72.8063C81.4924 73.6103 80.3704 74.0123 78.9904 74.0123ZM89.5646 73.7603L85.0286 61.1603H87.0446L90.7886 71.7983L94.5146 61.1603H96.5486L92.0126 73.7603H89.5646Z"
//       fill="black"
//     />
//   </svg>
// );

const GetCVIcon = () => (
  <span className="relative inline-block scale-[0.6] sm:scale-[0.8] 2xl:scale-100">
    {/* light mode spinner */}
    <svg
      className="animate-spin block dark:hidden"
      width="97"
      height="97"
      viewBox="0 0 97 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.0898 10.1511C48.7933 2.93105 61.1508 -0.353294 71.6339 0.808387C71.6017 1.08103 71.7956 1.32896 72.0685 1.36306C78.4729 2.16344 84.1179 4.66542 88.4248 8.97232C92.7317 13.2792 95.2337 18.9242 96.0341 25.3287C96.0682 25.6015 96.3161 25.7954 96.5887 25.7632C97.7504 36.2463 94.4661 48.6038 87.246 60.3073C87.0121 60.162 86.7045 60.2331 86.5583 60.4667C83.4126 65.4925 79.5341 70.393 74.9635 74.9637C70.3928 79.5344 65.4922 83.4128 60.4665 86.5585C60.2329 86.7047 60.1617 87.0123 60.3071 87.2462C48.6036 94.4663 36.2461 97.7507 25.763 96.589C25.7951 96.3163 25.6013 96.0684 25.3284 96.0343C18.924 95.2339 13.279 92.7319 8.97208 88.425C4.66518 84.1181 2.1632 78.4732 1.36281 72.0687C1.32871 71.7959 1.08079 71.602 0.808144 71.6342C-0.353539 61.1511 2.9308 48.7936 10.1509 37.09C10.3848 37.2354 10.6924 37.1642 10.8386 36.9306C13.9843 31.9049 17.8628 27.0043 22.4334 22.4337C27.0041 17.863 31.9046 13.9846 36.9304 10.8389C37.164 10.6926 37.2352 10.385 37.0898 10.1511Z"
        fill="white"
        fill-opacity="0.35"
        stroke="white"
        stroke-linecap="round"
        stroke-dasharray="27.47 27.47"
      />
      <path
        d="M72.0687 96.0341C71.7959 96.0682 71.602 96.3161 71.6342 96.5887C61.1511 97.7504 48.7936 94.4661 37.09 87.246C37.2354 87.0121 37.1643 86.7045 36.9306 86.5583C31.9049 83.4126 27.0043 79.5341 22.4337 74.9635C17.863 70.3928 13.9846 65.4922 10.8389 60.4665C10.6926 60.2329 10.385 60.1617 10.1511 60.3071C2.93104 48.6036 -0.353295 36.2461 0.808388 25.763C1.08103 25.7951 1.32896 25.6013 1.36306 25.3284C2.16344 18.924 4.66542 13.279 8.97232 8.97208C13.2792 4.66518 18.9242 2.1632 25.3287 1.36281C25.6015 1.32871 25.7954 1.08079 25.7632 0.808144C36.2463 -0.353539 48.6038 2.9308 60.3073 10.1509C60.162 10.3848 60.2331 10.6924 60.4667 10.8386C65.4925 13.9843 70.393 17.8628 74.9637 22.4334C79.5344 27.0041 83.4128 31.9046 86.5585 36.9304C86.7047 37.164 87.0123 37.2352 87.2462 37.0898C94.4663 48.7933 97.7507 61.1508 96.589 71.6339C96.3163 71.6017 96.0684 71.7956 96.0343 72.0685C95.2339 78.4729 92.7319 84.1179 88.425 88.4248C84.1181 92.7317 78.4732 95.2337 72.0687 96.0341Z"
        fill="white"
        fill-opacity="0.35"
        stroke="white"
        stroke-linecap="round"
        stroke-dasharray="27.47 27.47"
      />
    </svg>

    {/* dark mode spinner */}
    <svg
      className="animate-spin dark:block hidden"
      width="97"
      height="97"
      viewBox="0 0 97 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.0896 10.1511C48.7931 2.93105 61.1506 -0.353294 71.6337 0.808387C71.6015 1.08103 71.7954 1.32896 72.0682 1.36306C78.4727 2.16344 84.1177 4.66542 88.4246 8.97232C92.7315 13.2792 95.2334 18.9242 96.0338 25.3287C96.0679 25.6015 96.3158 25.7954 96.5885 25.7632C97.7502 36.2463 94.4658 48.6038 87.2458 60.3073C87.0119 60.162 86.7042 60.2331 86.558 60.4667C83.4123 65.4925 79.5339 70.393 74.9632 74.9637C70.3925 79.5344 65.492 83.4128 60.4662 86.5585C60.2326 86.7047 60.1615 87.0123 60.3068 87.2462C48.6033 94.4663 36.2458 97.7507 25.7627 96.589C25.7949 96.3163 25.601 96.0684 25.3282 96.0343C18.9237 95.2339 13.2787 92.7319 8.97184 88.425C4.66493 84.1181 2.16295 78.4732 1.36257 72.0687C1.32847 71.7959 1.08055 71.602 0.8079 71.6342C-0.353783 61.1511 2.93056 48.7936 10.1506 37.09C10.3845 37.2354 10.6921 37.1642 10.8384 36.9306C13.9841 31.9049 17.8625 27.0043 22.4332 22.4337C27.0038 17.863 31.9044 13.9846 36.9301 10.8389C37.1638 10.6926 37.2349 10.385 37.0896 10.1511Z"
        fill="black"
        fill-opacity="0.35"
        stroke="black"
        stroke-linecap="round"
        stroke-dasharray="27.47 27.47"
      />
      <path
        d="M72.0687 96.0338C71.7959 96.0679 71.602 96.3158 71.6342 96.5885C61.1511 97.7502 48.7936 94.4658 37.09 87.2458C37.2354 87.0118 37.1642 86.7042 36.9306 86.558C31.9049 83.4123 27.0043 79.5339 22.4337 74.9632C17.863 70.3925 13.9846 65.492 10.8389 60.4662C10.6926 60.2326 10.385 60.1615 10.1511 60.3068C2.93104 48.6033 -0.353294 36.2458 0.808388 25.7627C1.08103 25.7949 1.32896 25.601 1.36306 25.3282C2.16344 18.9237 4.66542 13.2787 8.97232 8.97184C13.2792 4.66493 18.9242 2.16295 25.3287 1.36257C25.6015 1.32847 25.7954 1.08055 25.7632 0.8079C36.2463 -0.353782 48.6038 2.93056 60.3073 10.1506C60.162 10.3845 60.2331 10.6921 60.4667 10.8384C65.4925 13.9841 70.393 17.8625 74.9637 22.4332C79.5344 27.0038 83.4128 31.9044 86.5585 36.9301C86.7047 37.1638 87.0123 37.2349 87.2462 37.0896C94.4663 48.7931 97.7507 61.1506 96.589 71.6337C96.3163 71.6015 96.0684 71.7954 96.0343 72.0682C95.2339 78.4727 92.7319 84.1177 88.425 88.4246C84.1181 92.7315 78.4732 95.2334 72.0687 96.0338Z"
        fill="black"
        fill-opacity="0.35"
        stroke="black"
        stroke-linecap="round"
        stroke-dasharray="27.47 27.47"
      />
    </svg>

    {/* get CV Text */}
    <svg
      className="absolute -top-3 right-1/2 translate-x-1/2 fill-current text-black dark:text-white"
      width="59"
      height="64"
      viewBox="0 0 59 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.4701 38.4674C28.8607 38.8579 29.4938 38.8579 29.8844 38.4674L36.2483 32.1034C36.6388 31.7129 36.6388 31.0797 36.2483 30.6892C35.8578 30.2987 35.2246 30.2987 34.8341 30.6892L29.1772 36.346L23.5204 30.6892C23.1299 30.2987 22.4967 30.2987 22.1062 30.6892C21.7157 31.0797 21.7157 31.7129 22.1062 32.1034L28.4701 38.4674ZM28.1772 0.760254L28.1772 37.7603L30.1772 37.7603L30.1772 0.760254L28.1772 0.760254Z"
        // fill="black"
      />
      <path
        d="M6.09532 63.0123C4.42732 63.0123 3.08332 62.4363 2.06332 61.2843C1.05532 60.1323 0.551324 58.5303 0.551324 56.4783C0.551324 54.4143 1.06132 52.8063 2.08132 51.6543C3.10132 50.4903 4.48732 49.9083 6.23932 49.9083C7.64332 49.9083 8.78932 50.2743 9.67732 51.0063C10.5653 51.7383 11.0993 52.7403 11.2793 54.0123H9.40732C9.25132 53.2683 8.89732 52.6743 8.34532 52.2303C7.79332 51.7863 7.09132 51.5643 6.23932 51.5643C5.03932 51.5643 4.09732 51.9903 3.41332 52.8423C2.74132 53.6823 2.40532 54.8943 2.40532 56.4783C2.40532 58.0863 2.75332 59.3043 3.44932 60.1323C4.14532 60.9483 5.10532 61.3563 6.32932 61.3563C7.25332 61.3563 7.99732 61.0863 8.56132 60.5463C9.13732 60.0063 9.46732 59.2383 9.55132 58.2423H5.12332V56.6043H11.2793V62.7603H9.76733V61.0863C9.43133 61.6863 8.93933 62.1603 8.29132 62.5083C7.65532 62.8443 6.92332 63.0123 6.09532 63.0123ZM17.6803 63.0123C16.3843 63.0123 15.3403 62.5923 14.5483 61.7523C13.7563 60.9123 13.3603 59.7903 13.3603 58.3863C13.3603 57.0063 13.7443 55.9083 14.5123 55.0923C15.2923 54.2643 16.3063 53.8503 17.5543 53.8503C18.8383 53.8503 19.8523 54.2403 20.5963 55.0203C21.3403 55.7883 21.7123 56.8383 21.7123 58.1703C21.7123 58.3623 21.6943 58.6383 21.6583 58.9983H15.0883C15.1243 59.7903 15.3703 60.4143 15.8263 60.8703C16.2943 61.3143 16.9123 61.5363 17.6803 61.5363C18.7123 61.5363 19.4083 61.1223 19.7683 60.2943H21.5503C21.2743 61.1463 20.8063 61.8123 20.1463 62.2923C19.4863 62.7723 18.6643 63.0123 17.6803 63.0123ZM15.0883 57.6303H19.9483V57.5403C19.9483 56.8563 19.7323 56.3043 19.3003 55.8843C18.8803 55.4643 18.2983 55.2543 17.5543 55.2543C16.8343 55.2543 16.2523 55.4763 15.8083 55.9203C15.3643 56.3523 15.1243 56.9223 15.0883 57.6303ZM26.8953 62.7603C26.1393 62.7603 25.5933 62.5983 25.2573 62.2743C24.9213 61.9503 24.7533 61.4163 24.7533 60.6723V55.6323H22.4853V54.1023H24.7533V51.5103H26.4993V54.1023H29.2173V55.6323H26.4993V60.3303C26.4993 60.6543 26.5653 60.8883 26.6973 61.0323C26.8413 61.1643 27.0813 61.2303 27.4173 61.2303H29.2173V62.7603H26.8953ZM40.9904 63.0123C39.2624 63.0123 37.8884 62.4543 36.8684 61.3383C35.8484 60.2103 35.3384 58.5903 35.3384 56.4783C35.3384 54.3543 35.8424 52.7283 36.8504 51.6003C37.8584 50.4723 39.2504 49.9083 41.0264 49.9083C42.3944 49.9083 43.5164 50.2863 44.3924 51.0423C45.2804 51.7983 45.8204 52.8483 46.0124 54.1923H44.1224C43.9904 53.3763 43.6424 52.7403 43.0784 52.2843C42.5144 51.8163 41.8304 51.5823 41.0264 51.5823C39.8264 51.5823 38.8844 51.9843 38.2004 52.7883C37.5284 53.5923 37.1924 54.8103 37.1924 56.4423C37.1924 58.0503 37.5344 59.2683 38.2184 60.0963C38.9144 60.9243 39.8384 61.3383 40.9904 61.3383C41.8424 61.3383 42.5384 61.0863 43.0784 60.5823C43.6304 60.0663 43.9784 59.3883 44.1224 58.5483H45.9944C45.7664 59.9043 45.2204 60.9903 44.3564 61.8063C43.4924 62.6103 42.3704 63.0123 40.9904 63.0123ZM51.5646 62.7603L47.0286 50.1603H49.0446L52.7886 60.7983L56.5146 50.1603H58.5486L54.0126 62.7603H51.5646Z"
        // fill="black"
      />
    </svg>
  </span>
);

export default FixedButtons;
