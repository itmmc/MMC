import { useEffect, useState } from 'react'
import { getSocialMediaData } from '../../Links'

import React from 'react'

const HeaderLinks = () => {
    type CompanySocialMediaLinks = {
        _id: string
        facebook: string
        instagram: string
        twitter: string
        linkedin: string
    }

    const [socialmedialinks, setsocialmedialinks] =
        useState<CompanySocialMediaLinks>()

    useEffect(() => {
        getSocialMediaData(setsocialmedialinks)
    }, [])
    return (
        <>
            <a
                className="f a-c j-c magnet"
                href={socialmedialinks?.linkedin}
                target="_blank"
                data-dist="1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                >
                    <path
                        fill="currentColor"
                        d="M13.997 14H14V9.232c0-2.332-.502-4.129-3.229-4.129-1.31 0-2.19.72-2.55 1.401h-.037V5.321H5.599v8.678H8.29V9.702c0-1.131.214-2.225 1.615-2.225 1.381 0 1.402 1.29 1.402 2.298V14h2.689ZM1.215 5.322h2.696v8.679H1.215V5.322ZM2.561 1C1.699 1 1 1.7 1 2.561c0 .862.7 1.576 1.561 1.576.862 0 1.561-.714 1.561-1.576 0-.862-.7-1.561-1.561-1.561Z"
                    />
                </svg>
            </a>
            <a
                className="f a-c j-c magnet"
                href={socialmedialinks?.instagram}
                target="_blank"
                data-dist="1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                >
                    <path
                        fill="currentColor"
                        d="M9.938 1H5.061A4.063 4.063 0 0 0 1 5.063v4.875A4.063 4.063 0 0 0 5.063 14h4.875A4.063 4.063 0 0 0 14 9.937V5.064A4.063 4.063 0 0 0 9.937 1Zm2.843 8.938a2.847 2.847 0 0 1-2.844 2.843H5.064a2.847 2.847 0 0 1-2.844-2.844V5.064a2.847 2.847 0 0 1 2.844-2.844h4.875a2.847 2.847 0 0 1 2.843 2.844v4.875Z"
                    />
                    <path
                        fill="currentColor"
                        d="M7.5 4.247a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Zm0 5.281a2.034 2.034 0 0 1-2.031-2.03c0-1.121.911-2.032 2.031-2.032s2.031.91 2.031 2.031c0 1.12-.911 2.031-2.031 2.031ZM10.994 4.438a.433.433 0 1 0 0-.866.433.433 0 0 0 0 .866Z"
                    />
                </svg>
            </a>
            <a
                className="f a-c j-c magnet"
                href={socialmedialinks?.twitter}
                target="_blank"
                data-dist="1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                >
                    <path
                        fill="currentColor"
                        d="M11.238 2h1.994L8.877 6.66 14 13H9.988L6.846 9.155 3.25 13H1.256l4.658-4.984L1 2h4.113l2.84 3.515L11.237 2h.001Zm-.7 9.883h1.105l-7.13-8.825H3.328l7.21 8.825Z"
                    />
                </svg>
            </a>
            <a
                className="f a-c j-c magnet"
                href={socialmedialinks?.facebook}
                target="_blank"
                data-dist="1"
            >
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M9.36484 3.1793H10.563V1.09242C10.3563 1.06398 9.64539 1 8.81742 1C7.08984 1 5.90641 2.08664 5.90641 4.08383V5.92188H4V8.25484H5.90641V14.125H8.24375V8.25539H10.073L10.3634 5.92242H8.2432V4.31516C8.24375 3.64086 8.42531 3.1793 9.36484 3.1793Z"
                    />
                </svg>
            </a>
        </>
    )
}

export default HeaderLinks
