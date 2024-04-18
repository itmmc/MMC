import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getSocialMediaData } from '../../../Links'
import HeaderLinks from '@components/HeaderLinks/HeaderLinks'

const BlogBanner = () => {
    const { t, i18n }: any = useTranslation()

    return (
        <div className="main_hero short primary_bg f a-c">
            {/* <div className="ft_vector full_bg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1393 651"
                >
                    <path
                        fill="#FAF3E6"
                        d="m310.164 1057.5 112.71-195.219c61.571 23.66 134.959 25.931 223.302 21.045a196.227 196.227 0 0 0 159.621-98.227l99.88-172.996 169.163-16.419-190.765 330.422 68.134 39.337L1391.6 204.394l-68-39.26-48.79 84.502-169.17 16.419L1317-100.031l-68.26-39.414-51.63 89.426L886.391 59.447l246.549-427.034-68.14-39.337L818.257 20.11l-60.328-324.222 51.399-89.026-68.133-39.337-211.36 366.086-70.365-154.714 48.787-84.501-68.266-39.414L.599 416.031l68.133 39.337 190.77-330.423 70.364 154.714-99.879 172.996a196.223 196.223 0 0 0-5.256 187.35c39.94 78.95 78.201 141.14 129.876 182.862l-112.71 195.223 68.267 39.41Zm416.189-720.86c58.377 21.816 132.103 25.346 237.088 19.6L858.952 537.22c-113.121 9.389-187.211 10.793-243.849-7.89l111.25-192.69Zm284.337-62.24c-112.966 9.122-188.274 10.178-244.001-7.624l59.006-102.201L1137.46 54.828 1010.69 274.4Zm-55.715 253.852 103.105-178.585c33.43-2.882 168.94-16.02 168.94-16.02l-103.18 178.718-168.865 15.887Zm-492.149 264.83 112.172-194.287c58.889 22.466 132.573 26.683 236.243 21.064l-72.912 126.287a117.702 117.702 0 0 1-96.761 59.111c-82.927 4.11-137.593.759-178.742-12.175Zm83.836-302.556C502.829 451.202 467 386.335 418.57 283.675l104.489-180.98c46.852 93.409 86.638 155.415 135.519 195.524L546.662 490.526Zm150.725-689.775 60.839 324.871-59.313 102.733c-42.614-38.975-79.487-104.799-127.938-207.116L697.387-199.25ZM307.828 41.242l103.183-178.718s56.512 124.004 70.595 154.314L378.193 195.956 307.828 41.242Zm-13.05 563.796a117.71 117.71 0 0 1 3.169-112.437l73.449-127.218c46.304 92.206 86.798 153.91 136.364 194.06L395.588 753.73c-32.671-29.153-62.906-74.821-100.81-148.692Z"
                        opacity=".02"
                    />
                </svg>
            </div> */}
            <div className="social f f-c _ele">
                <HeaderLinks />
            </div>
            <div className="hero_content inner_padding x_padding f f-c s-b _eleWrap">
                <div className="bc f a-c" />

                <div className="hero_head f f-c a-s">
                    <h1 className="_eleY letter-space-1">
                        {t('blogbannerHeadingnews')}
                    </h1>

                    {/* <p className="_eleY      letter-space-5   custom-font-blognews _txt words"> */}
                    {/* <strong className=" _txt words  custom-font-weight-to ">
                        {t('blogbannerSubHeading')}
                    </strong> */}
                </div>
            </div>
        </div>
    )
}

export default BlogBanner
