import React from 'react'
import { useTranslation } from 'react-i18next'

const IntroOurBrands = () => {
    const { t, i18n }: any = useTranslation()
    const currentLanguage = i18n.language
    return (
        <div className="intro_wrap x_padding inner_padding light_brown_bg f f-c  a-j">
            <div className="form_sides f a-s">
                <div className="form_side _eleWrap">
                    <div className="form_content">
                        <div className="section_head f f-c a-s">
                            <h2 className="_eleY">{t('ourflourbrandlabel')}</h2>
                            <p className="_eleY">{t('discoverourbrand')}</p>
                        </div>
                    </div>
                </div>

                <div className="form_side">
                    <div className="v_list_wrap f f-c _eleWrap">
                        <div className="v_list f a-s _eleY">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 60 61"
                            >
                                <path
                                    fill="#FAF3E6"
                                    d="m16.681 44.235-1.105-1.105-7.895 4.973c-1.282.89-1.624 2.02-1.4 3.02.144.647.51 1.258 1.007 1.74.489.473 1.096.81 1.731.916.979.164 2.073-.26 2.948-1.65l4.714-7.894Zm21.85-30.53L13.855 38.383l2.394 2.393c.093.05.18.115.26.193l2.319 2.32-.002.002c.074.075.137.158.186.248l2.68 2.68 24.675-24.676-7.836-7.836ZM18.357 45.683l-4.542 7.607c-1.43 2.274-3.364 2.944-5.155 2.643-1.083-.181-2.097-.733-2.894-1.506-.788-.764-1.375-1.758-1.614-2.832-.404-1.81.144-3.803 2.291-5.287l.055-.037 7.637-4.81-1.724-1.724a1.91 1.91 0 0 1-.56-1.354h.004c0-.492.186-.984.556-1.354l24.766-24.766.002.001.002-.001c.37-.37.86-.556 1.35-.556.491 0 .983.184 1.354.556l1.925 1.925 4.862-7.718.036-.054c1.485-2.148 3.477-2.696 5.287-2.292 1.075.24 2.069.826 2.833 1.614.772.797 1.325 1.81 1.505 2.894.3 1.79-.37 3.724-2.642 5.155L46 18.376l1.81 1.812c.374.373.56.864.56 1.354 0 .49-.186.981-.56 1.354L23.046 47.662c-.374.373-.865.56-1.354.56a1.91 1.91 0 0 1-1.354-.56l-1.98-1.98Zm25.175-30.135 1.104 1.105 7.895-4.715c1.39-.875 1.813-1.968 1.65-2.947-.107-.635-.444-1.243-.917-1.732-.482-.497-1.093-.864-1.739-1.008-1-.222-2.13.119-3.02 1.401l-4.973 7.896Z"
                                />
                            </svg>
                            <div className="v_list_txt f f-c a-s">
                                <h4>{t('householdlabel')}</h4>
                                <p>{t('householdlabelDes')}</p>
                            </div>
                        </div>

                        <div className="v_list f a-s _eleY">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 60 61"
                            >
                                <path
                                    fill="#FAF3E6"
                                    d="M44.912 7.316c-2.812 0-5.772 1.192-7.948 2.328a14.455 14.455 0 0 0-5.22.195c-1.168.266-2.34.723-3.273 1.553-.93.83-1.566 2.085-1.566 3.615v.985c-.155-.012-.369-.095-.516-.095-1.541 0-3.73.099-5.66 1.112-1.931 1.009-3.496 3.09-3.496 6.4v.67c-.326.005-.672-.043-.982.032-1.378.338-3.066.894-4.437 2.193-1.366 1.303-2.328 3.345-2.328 6.277v1.032c-.031.036-.06.024-.087.068-1.14 1.82-3.083 6.435-3.083 11.242 0 3.067.684 5.33 1.923 6.856C9.48 53.31 11.266 54 13.09 54c3.722 0 7.484-1.803 11.48-4.714 3.993-2.912 8.247-6.968 12.935-11.683C46.676 28.382 53 20.854 53 13.37c0-2.256-1.24-3.917-2.832-4.83-1.597-.918-3.52-1.224-5.256-1.224Zm0 1.939c1.494 0 3.13.306 4.29.969 1.157.66 1.86 1.541 1.86 3.146 0 6.348-5.828 13.713-14.937 22.865-4.663 4.692-8.87 8.688-12.7 11.48-3.829 2.793-7.253 4.346-10.336 4.346-1.362 0-2.478-.44-3.34-1.505-.866-1.06-1.494-2.856-1.494-5.633 0-4.02 1.7-8.171 2.606-9.772.238.028.52.071.913.147.958.179 2.26.46 3.615.699 1.359.238 2.765.44 4.005.46 1.239.02 2.403-.015 3.205-.945.41-.476.398-1.279.151-1.74-.246-.46-.604-.774-1.029-1.084-.85-.62-2.03-1.16-3.384-1.57-2.058-.619-4.529-.952-6.626-.265.27-1.387.735-2.467 1.442-3.139.985-.937 2.316-1.414 3.56-1.716.428-.103 1.564.012 2.895.366 1.33.35 2.892.874 4.437 1.354 1.542.477 3.067.91 4.43 1.061.679.076 1.326.087 1.942-.048.612-.135 1.223-.44 1.637-.98.425-.553.456-1.351.222-1.931-.234-.58-.636-1.041-1.136-1.486-.993-.882-2.415-1.672-4.02-2.276-1.601-.604-3.38-1.005-5.08-.997a7.944 7.944 0 0 0-2.424.377c.41-1.275 1.049-2.205 2.014-2.713 1.418-.743 3.321-.89 4.759-.89.516 0 1.66.242 2.944.592 1.283.354 2.745.806 4.139 1.18 1.39.373 2.69.68 3.797.707.553.012 1.073-.024 1.59-.298.516-.274.925-.941.925-1.561 0-1.144-.683-2.094-1.561-2.785-.882-.695-2.002-1.204-3.23-1.565-1.926-.568-4.024-.62-5.923-.258.155-.393.382-.727.695-1.01.576-.512 1.447-.885 2.412-1.107 1.93-.445 4.266-.255 4.775-.155l.333.063.306-.159c2.022-1.076 4.998-2.224 7.321-2.224Zm-13.796 6.22c1.1.016 2.28.183 3.329.49 1.049.309 1.974.758 2.574 1.23.536.422.695.791.739 1.129-.1.023-.179.055-.44.047-.76-.02-2.003-.278-3.346-.64-1.342-.36-2.796-.81-4.123-1.175-.838-.23-1.482-.298-2.18-.417l.575-.234c.743-.302 1.768-.445 2.872-.43Zm-9.065 7.528c1.375-.008 2.964.338 4.39.87 1.426.536 2.689 1.271 3.408 1.91.361.323.568.625.624.76.02.043.024.031.027.035-.079.104-.202.191-.496.255-.306.067-.763.08-1.315.016-1.104-.12-2.558-.52-4.072-.99-1.513-.464-3.086-.997-4.516-1.374-.465-.123-.882-.195-1.311-.278l.115-.127c.68-.715 1.776-1.069 3.146-1.077Zm-7.98 9.455c1.203-.036 2.518.162 3.702.52 1.188.358 2.228.862 2.808 1.283.04.028.028.032.064.06-.254.083-.473.206-1.22.198-1.044-.016-2.387-.202-3.698-.433-1.307-.234-2.594-.508-3.595-.695-.342-.067-.604-.103-.882-.143.72-.492 1.704-.755 2.82-.79Z"
                                />
                            </svg>
                            <div className="v_list_txt f f-c a-s">
                                <h4>{t('professionallabel')}</h4>
                                <p>{t('professionallabelDes')}</p>
                            </div>
                        </div>

                        <div className="v_list f a-s _eleY">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 60 61"
                            >
                                <path
                                    fill="#FAF3E6"
                                    d="m16.681 44.235-1.105-1.105-7.895 4.973c-1.282.89-1.624 2.02-1.4 3.02.144.647.51 1.258 1.007 1.74.489.473 1.096.81 1.731.916.979.164 2.073-.26 2.948-1.65l4.714-7.894Zm21.85-30.53L13.855 38.383l2.394 2.393c.093.05.18.115.26.193l2.319 2.32-.002.002c.074.075.137.158.186.248l2.68 2.68 24.675-24.676-7.836-7.836ZM18.357 45.683l-4.542 7.607c-1.43 2.274-3.364 2.944-5.155 2.643-1.083-.181-2.097-.733-2.894-1.506-.788-.764-1.375-1.758-1.614-2.832-.404-1.81.144-3.803 2.291-5.287l.055-.037 7.637-4.81-1.724-1.724a1.91 1.91 0 0 1-.56-1.354h.004c0-.492.186-.984.556-1.354l24.766-24.766.002.001.002-.001c.37-.37.86-.556 1.35-.556.491 0 .983.184 1.354.556l1.925 1.925 4.862-7.718.036-.054c1.485-2.148 3.477-2.696 5.287-2.292 1.075.24 2.069.826 2.833 1.614.772.797 1.325 1.81 1.505 2.894.3 1.79-.37 3.724-2.642 5.155L46 18.376l1.81 1.812c.374.373.56.864.56 1.354 0 .49-.186.981-.56 1.354L23.046 47.662c-.374.373-.865.56-1.354.56a1.91 1.91 0 0 1-1.354-.56l-1.98-1.98Zm25.175-30.135 1.104 1.105 7.895-4.715c1.39-.875 1.813-1.968 1.65-2.947-.107-.635-.444-1.243-.917-1.732-.482-.497-1.093-.864-1.739-1.008-1-.222-2.13.119-3.02 1.401l-4.973 7.896Z"
                                />
                            </svg>
                            <div className="v_list_txt f f-c a-s">
                                <h4>{t('bakriesandindustriallabel')}</h4>
                                <p>{t('bakriesandidustrialDes')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroOurBrands
