import React, { FC } from 'react';

import './index.scss';

interface LogoProps {
  color?: string;
  onClick?: () => void;
}

const Logo: FC<LogoProps> = ({ color, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="dev-logo"
      role="img"
      aria-label="dev"
      tabIndex={-1}
    >
      <svg
        height="1em"
        viewBox="0 0 337 201"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m325.497357 0c7.975539 0 12.960251 5.1299097 11.120822 11.4675087l-51.377634 177.0649823c-1.825388 6.337599-9.786885 11.467509-17.762424 11.467509h-255.9754784c-7.97553872 0-12.96025045-5.12991-11.12082162-11.467509l51.37763442-177.0649823c1.8253874-6.337599 9.7868847-11.4675087 17.7624235-11.4675087zm-180.337793 91.5115954-55.9391025-59.5090457c-3.799939-4.049935-16.9305303-6.5395904-21.2204615-2.509655-4.2899312 4.0299353-5.7999391 15.9600647-2 20l38 47v1l-63 49.0000003c-4.4999278 3.269947-7.4599445 15.240076-4 20 3.4599445 4.759923 24.510072 3.269947 29 0l74.919632-57.351582c2.799956-1.969969 4.37993-3.659942 5.139918-5.199917 1.94045-4.4485013 1.94045-8.4485013-.899986-12.4298006zm-29.159564 58.7709946c-3.283066 2.673891-5.206495 5.311173-5.239852 8.4222 0 6.441931 5.219062 11.788105 18.239852 11.788105h123c7 0 7 0 11-2.526288s5.966644-5.730981 6-8.842009c-.033356-3.111027-1-6.31572-5-8.842008s-7.784978-3.809591-14-3.789432h-121c-6.215022-.020159-9.716934 1.115542-13 3.789432zm62.955778-19.573472c3.767794 0 6.516431-.154417 8.24591-.463253 2.594219-.494137 4.709743-1.575061 6.346571-3.242774 1.636829-1.667712 2.609661-4.200164 2.918497-7.597355.056825-.681909.087511-2.906069.092057-6.67248l.000593-26.8670657c0-4.0766298-.185301-6.9488008-.555904-8.616513-.555904-2.5324519-1.82213-4.6325339-3.798677-6.3002461-2.038315-1.8530136-4.493558-2.9802635-7.365729-3.3817498-2.872171-.4014862-7.643681-.6022294-14.31453-.6022294h-12.415191v63.743666zm-4.261932-52.810886c1.914781 0 3.258216.2625103 4.030305.7875308s1.158133 1.8684553 1.158133 4.0303045l-.000961 28.4325377c-.010259 2.845134-.102589 4.732772-.276991 5.662912-.370602 1.91478-2.007431 2.872171-4.910486 2.872171zm61.631231 52.532934v-12.693142h-12.044588v-14.082903h10.376876v-12.1372393h-10.376876v-12.1372388h11.025431v-12.6931429h-27.609902v63.743666zm42.186942 0 7.597356-63.743666h-15.843266c-.802972 6.4237803-1.590503 13.249047-2.362592 20.4757998-.772089 7.2267529-1.544178 6.59364-2.316267-1.1581334s-1.652271-14.1909956-2.640544-19.3176664h-15.750616l8.616513 63.743666z"
          fill={color}
          transform="translate(0 .507105)"
        />
      </svg>
    </span>
  );
};

Logo.defaultProps = {
  color: '#24292f',
  onClick: () => {},
};

export default Logo;
