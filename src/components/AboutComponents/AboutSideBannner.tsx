import React from 'react'
import Side_1 from '../../../images/side_1.webp'
const AboutSideBannner = () => {
    return (
        <div className="banner_sides_wrap f">
            <div className="banner_side parallax_wrap">
                <i
                    className="full_bg load_bg cover parallax"
                    data-src={Side_1}
                    data-speed="0.9"
                ></i>
            </div>

            <div className="banner_side light_brown_bg f a-c">
                <div className="vector_set vector_a">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 548 776"
                    >
                        <path
                            fill="#FAF3E6"
                            d="M463.527 1296v-177.54c51.288-8.1 102.213-35.45 160.517-73.58a154.477 154.477 0 0 0 51.576-56.001 154.6 154.6 0 0 0 18.582-73.849V757.704l108.865-77.815v300.492H865V288.269h-61.812v76.847l-108.865 77.816V110.007h-62.054v81.325l-168.742 197.02V0h-61.933v388.352L232.852 190.969v-80.962h-61.933v332.925L62.054 365.116v-76.847H0v692.112h61.933V679.889l108.866 77.815V915.03a154.588 154.588 0 0 0 18.581 73.849 154.471 154.471 0 0 0 51.577 56.001c58.303 38.13 108.865 65.48 160.516 73.58V1296h62.054Zm0-655.564c48.385-8.108 100.035-34.732 169.347-79.994v164.587c-73.424 50.949-123.382 81.083-169.347 90.644V640.436Zm169.347-154.421c-73.424 50.707-124.349 81.083-169.347 90.886v-92.943l169.347-197.625v199.682Zm61.932 195.084V518.69c21.653-15.127 108.866-77.452 108.866-77.452v162.529l-108.866 77.332ZM463.527 1055.53V878.845c48.989-7.866 100.882-34.006 169.347-78.663V915.03a92.752 92.752 0 0 1-11.289 44.694 92.687 92.687 0 0 1-31.411 33.727c-54.917 35.459-93.504 54.699-126.647 62.079Zm-61.933-239.373c-45.361-9.561-95.318-39.695-168.742-90.644V560.926c68.707 45.262 120.236 71.886 169.347 79.994l-.605 175.237ZM232.852 286.333l169.347 197.625v93.427c-44.393-9.803-95.439-40.179-168.742-90.886l-.605-200.166ZM61.932 603.767V441.238s87.335 62.325 108.867 77.452v162.893L61.933 603.767Zm213.015 389.684a92.686 92.686 0 0 1-30.955-33.612 92.74 92.74 0 0 1-11.14-44.325V799.819c67.86 44.656 119.753 70.797 169.347 78.663v176.688c-33.748-7.02-72.335-26.26-127.252-61.719Z"
                            opacity=".04"
                        />
                    </svg>
                </div>

                <div className="banner_content f f-c a-s _eleWrap">
                    <h2 className="_mask">Unyielding Safety Standards</h2>
                    <h5 className="_eleY">
                        <strong>
                            At Modern Mills, we prioritize the safety and
                            well-being of our valued customers by maintaining
                            strict adherence to the highest standards of safety
                            and hygiene throughout our operations, from sourcing
                            raw materials to implementing rigorous quality
                            control measures.
                        </strong>
                    </h5>
                    <h5 className="_eleY">
                        Our state-of-the-art facilities, equipped with advanced
                        technologies, follow internationally recognized food
                        safety protocols, ensuring the utmost confidence in the
                        safety and integrity of our products.
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default AboutSideBannner
