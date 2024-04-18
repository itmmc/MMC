import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baseUrl from '../../ApiFile'
import { useTranslation } from 'react-i18next'
import { ToastContainer, toast } from 'react-toastify'
import ArrowUp from '../../../images/arrow-up.png'
import { getPosts } from '@components/AdminComponents/CareersPosts/actionfile'
import linkup from '../../../images/Iconlinkup.svg'
import linkupright from '../../../images/iconlinkupright.png'
import '../../assets/stylesheets/app.css'

const countries = [
    'Afghanistan',
    'Aland Islands',
    'Albania',
    'Algeria' /* and so on */,
    'Zambia',
    'Zimbabwe',
]

const CareersForm = () => {
    const { t, i18n }: any = useTranslation()
    const [postData, setPostData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const currentLanguage = i18n.language
    //
    const [logoData, setLogoData] = useState('')
    const [requestdata, setRequestdata] = useState({
        firstName: '',
        LastName: '',
        mail: '',
        phoneNo: '',
        industry: '',
        country: '',
        cv: '',
    })
    const changeHandler = (e: any) => {
        const { name, value } = e.target
        setRequestdata((requestdata) => ({
            ...requestdata,
            [name]: value,
        }))
    }
    const handleImageUpload = (e: any) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.readAsDataURL(file)

            reader.onload = (e: any) => {
                setLogoData(e.target.result)
                setRequestdata((requestdata: any) => ({
                    ...requestdata,
                    cv: e.target.result,
                }))
            }
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault() // Prevent the form from actually submitting
        await axios({
            method: 'post',
            url: `${baseUrl}/opportunityRequest/create`,
            data: requestdata,
        })
            .then((response) => {
                toast.success(
                    `Thank you for your application! We'll be in touch soon`,
                    {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        theme: 'light',
                    }
                )
            })

            .catch((error) => {
                toast.error(`Error in sending information    ${error}`, {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: 'light',
                })
            })
    }

    const [isAllOpening, setIsAllOpening] = useState(false)

    useEffect(() => {
        getPosts(setIsLoading, setPostData)
    }, [])

    return (
        <div className="section_wrap f f-c x_padding inner_padding light_bg">
            <div className="section_head f a-c s-b _eleWrap">
                <div className="section_head f f-c a-s">
                    <h2>{t('careeresopportunitiesatMMC')}</h2>
                    <p>{t('paveyourpathtosucces')}</p>
                </div>

                <div className="head_side f a-c">
                    <div className="filters">
                        <ul className="f">
                            <li
                                onClick={() => setIsAllOpening(true)}
                                className={`menu  transit-all f a-c j-c  ${
                                    isAllOpening
                                        ? 'active'
                                        : 'disabled cl-light-strong'
                                }`}
                            >
                                <strong
                                    className={`${
                                        isAllOpening ? '' : 'cl-light-strong'
                                    }`}
                                >
                                    {t('allopening')}
                                </strong>
                            </li>
                            <li
                                onClick={() => setIsAllOpening(false)}
                                className={`menu  transit-all f a-c j-c  ${
                                    !isAllOpening
                                        ? 'active'
                                        : 'disabled cl-light-strong'
                                }`}
                            >
                                <strong
                                    className={`${
                                        isAllOpening ? '' : 'cl-light-strong'
                                    }`}
                                >
                                    {t('tranningapplications')}
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* app code puskaro ma check karta   ok*/}

            <div
                className="section_body filters_block _eleWrap  f f-c o_table"
                id="openings"
            >
                {isAllOpening ? (
                    postData.map((item: any) => (
                        <div className=" f f-c">
                            {' '}
                            <div className="o_table_row f s-b">
                                <div className="o_table_text f f-c">
                                    <h4>
                                        {currentLanguage === 'en'
                                            ? item.jobTitle_en
                                            : item.jobTitle_ar}
                                    </h4>
                                    <p className="light_brown_color">
                                        {currentLanguage === 'en'
                                            ? item.type_en
                                            : item.type_ar}{' '}
                                        -{' '}
                                        {currentLanguage === 'en'
                                            ? item.location_en
                                            : item.location_ar}
                                    </p>
                                </div>
                                <div onClick={() => setIsAllOpening(false)}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="1"
                                            y="1"
                                            width="22"
                                            height="22"
                                            rx="11"
                                            stroke="#D99A0E"
                                            stroke-width="2"
                                        />
                                        <path
                                            d="M15.2391 14.931C15.0362 14.931 14.8502 14.8465 14.715 14.7112C14.5628 14.5591 14.4783 14.3731 14.4783 14.1703V10.6201L9.30523 15.7932C9.00093 16.0975 8.51067 16.0806 8.22327 15.7932C7.95278 15.5227 7.91897 15.0155 8.22327 14.7112L13.3964 9.53815L9.8293 9.52125C9.40666 9.53815 9.05164 9.18314 9.06855 8.7605C9.05164 8.33786 9.40666 7.98285 9.8293 7.99975H15.2391C15.6617 7.98285 16.0167 8.33786 15.9998 8.7605L15.9998 14.1703C16.0167 14.5929 15.6617 14.9479 15.2391 14.931Z"
                                            fill="#D99A0E"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form_set f f-c">
                            <div className="input_set f s-b _eleY">
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    spellCheck="false"
                                    className="cl-input-hodler"
                                    value={requestdata.firstName}
                                    onChange={changeHandler}
                                    placeholder={t('Fnamelabel')}
                                />
                                <input
                                    type="text"
                                    name="LastName"
                                    required
                                    spellCheck="false"
                                    className="cl-input-hodler"
                                    value={requestdata.LastName}
                                    onChange={changeHandler}
                                    placeholder={t('Lnamelabel')}
                                />
                            </div>

                            <div className="input_set f s-b _eleY">
                                <input
                                    type="email"
                                    name="mail"
                                    required
                                    spellCheck="false"
                                    className="cl-input-hodler"
                                    value={requestdata.mail}
                                    onChange={changeHandler}
                                    placeholder={t('Emailaddresslabel')}
                                />
                            </div>

                            <div className="input_set f s-b _eleY">
                                <input
                                    type="text"
                                    name="phoneNo"
                                    required
                                    spellCheck="false"
                                    className="cl-input-hodler"
                                    value={requestdata.phoneNo}
                                    onChange={changeHandler}
                                    placeholder={t('PNlabel')}
                                />
                            </div>

                            <div className="input_set f s-b _eleY">
                                <select
                                    name="industry"
                                    required
                                    value={requestdata.industry}
                                    onChange={changeHandler}
                                >
                                    <option value="">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Food Processing">
                                        {t('foodprocessing')}
                                    </option>
                                    <option value="Manufacturing">
                                        {t('manufacturing')}
                                    </option>
                                    <option value="Engineering">
                                        {t('engineering')}
                                    </option>
                                    <option value="Logistics/Supply Chain">
                                        {t('supply')}
                                    </option>
                                    <option value="Maintenance and Repair">
                                        {t('repair')}
                                    </option>
                                    <option value="Quality Control/Quality Assurance">
                                        {t('qualitycontol')}
                                    </option>
                                    <option value="Research and Development">
                                        {t('resarch')}
                                    </option>
                                    <option value="Operations">
                                        {t('operations')}
                                    </option>
                                    <option value="Environmental Science">
                                        {t('environmentalsciences')}
                                    </option>
                                    <option value="Industrial Chemistry">
                                        {t('industrialchemistry')}
                                    </option>
                                    <option value="Management/Administration">
                                        {t('management')}
                                    </option>
                                    <option value="Technical/Trade (e.g., machinist, electrician)">
                                        {t('trade')}
                                    </option>
                                    <option value="Health and Safety">
                                        {t('health')}
                                    </option>
                                    <option value="Sales and Marketing">
                                        {t('saleandmarketing')}
                                    </option>
                                    <option value="Distribution">
                                        {t('distribution')}
                                    </option>
                                    <option value="Grain Handling">
                                        {t('grainhandling')}
                                    </option>
                                    <option value="Milling/Flour Milling ">
                                        {t('milling')}{' '}
                                    </option>
                                    <option value="Agriculture Equipment Operation">
                                        {t('agriculture')}
                                    </option>
                                    <option value="Materials Science">
                                        {t('materialscience')}
                                    </option>
                                    <option value="Other">{t('other')}</option>
                                </select>
                                <svg
                                    width="16"
                                    height="9"
                                    viewBox="0 0 16 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0625 1.97266L8.34766 8.40625C8.17187 8.54687 7.96094 8.65234 7.75 8.65234C7.53906 8.65234 7.32812 8.54687 7.1875 8.40625L0.472656 1.97266C0.121094 1.65625 0.121094 1.09375 0.4375 0.777343C0.753906 0.425781 1.28125 0.425781 1.63281 0.742187L7.78516 6.64844L13.9023 0.742187C14.2187 0.425781 14.7812 0.425781 15.0977 0.777344C15.4141 1.09375 15.4141 1.65625 15.0625 1.97266Z"
                                        fill="#121437"
                                    />
                                </svg>
                            </div>

                            <div className="input_set f s-b _eleY">
                                <select
                                    name="country"
                                    required
                                    value={requestdata.country}
                                    onChange={changeHandler}
                                >
                                    <option value="">
                                        {t('selectcountry')}
                                    </option>
                                    <option value="Afghanistan">
                                        {t('afghanistan')}
                                    </option>
                                    <option value="Aland Islands">
                                        {t('island')}
                                    </option>
                                    <option value="Albania">
                                        {t('albania')}
                                    </option>
                                    <option value="Algeria">
                                        {t('algeria')}
                                    </option>
                                    <option value="American Samoa">
                                        {t('americansamoa')}
                                    </option>
                                    <option value="Andorra">
                                        {t('andorrra')}
                                    </option>
                                    <option value="Angola">
                                        {t('angola')}
                                    </option>
                                    <option value="Anguilla">
                                        {t('angilla')}
                                    </option>
                                    <option value="Antarctica">
                                        {t('antarctica')}
                                    </option>
                                    <option value="Antigua and Barbuda">
                                        {t('antiguaburbuda')}
                                    </option>
                                    <option value="Argentina">
                                        {t('argentina')}
                                    </option>
                                    <option value="Armenia">
                                        {t('armenia')}
                                    </option>
                                    <option value="Aruba">{t('aruba')}</option>
                                    <option value="Australia">
                                        {t('austerlia')}
                                    </option>
                                    <option value="Austria">
                                        {t('austria')}
                                    </option>
                                    <option value="Azerbaijan">
                                        {t('azrbijaan')}
                                    </option>
                                    <option value="Bahamas">
                                        {t('bahamas')}
                                    </option>
                                    <option value="Bahrain">
                                        {t('bahrain')}
                                    </option>
                                    <option value="Bangladesh">
                                        {t('bangladash')}
                                    </option>
                                    <option value="Barbados">
                                        {t('barbados')}
                                    </option>
                                    <option value="Belarus">
                                        {t('belars')}
                                    </option>
                                    <option value="Belgium">
                                        {t('belgium')}
                                    </option>
                                    <option value="Belize">
                                        {t('belize')}
                                    </option>
                                    <option value="Benin">{t('benin')}</option>
                                    <option value="Bermuda">
                                        {t('bermuda')}
                                    </option>
                                    <option value="Bhutan">
                                        {t('bhutan')}
                                    </option>
                                    <option value="Bolivia">
                                        {t('boliva')}
                                    </option>
                                    <option value="Bonaire, Sint Eustatius and Saba">
                                        {t('bonarie')}
                                    </option>
                                    <option value="Bosnia and Herzegovina">
                                        {t('bosnia')}
                                    </option>
                                    <option value="Botswana">
                                        {t('botswana')}
                                    </option>
                                    <option value="Bouvet Island">
                                        {t('bouvetisland')}
                                    </option>
                                    <option value="Brazil">
                                        {t('brazil')}
                                    </option>
                                    <option value="British Indian Ocean Territory">
                                        {t('britishindian')}
                                    </option>
                                    <option value="Brunei Darussalam">
                                        {t('brunei')}
                                    </option>
                                    <option value="Bulgaria">
                                        {t('burkinafaso')}
                                    </option>
                                    <option value="Burkina Faso">
                                        {t('burndi')}
                                    </option>
                                    <option value="Burundi">
                                        {t('bulgaria')}
                                    </option>
                                    <option value="Cambodia">
                                        {t('cambodia')}
                                    </option>
                                    <option value="Cameroon">
                                        {t('cameroon')}
                                    </option>
                                    <option value="Canada">
                                        {t('canada')}
                                    </option>
                                    <option value="Cape Verde">
                                        {t('capeverde')}
                                    </option>
                                    <option value="Cayman Islands">
                                        {t('caymanisland')}
                                    </option>
                                    <option value="Central African Republic">
                                        {t('centerafrican')}
                                    </option>
                                    <option value="Chad">{t('chad')}</option>
                                    <option value="Chile">{t('chole')}</option>
                                    <option value="China">{t('china')}</option>
                                    <option value="Christmas Island">
                                        {t('christmasisland')}
                                    </option>
                                    <option value="Cocos (Keeling) Islands">
                                        {t('Cocos')}
                                    </option>
                                    <option value="Colombia">
                                        {t('clombia')}
                                    </option>
                                    <option value="Comoros">
                                        {t('comoros')}
                                    </option>
                                    <option value="Congo">{t('congo')}</option>
                                    <option value="Congo, Democratic Republic of the Congo">
                                        {t('DEMOCongo')}
                                    </option>
                                    <option value="Cook Islands">
                                        {t('cookisland')}
                                    </option>
                                    <option value="Costa Rica">
                                        {t('costarica')}
                                    </option>
                                    <option value="Cote D'Ivoire">
                                        {t('cotedivorie')}
                                    </option>
                                    <option value="Croatia">
                                        {t('crotia')}
                                    </option>
                                    <option value="Cuba">{t('cuba')}</option>
                                    <option value="Curacao">
                                        {t('curaco')}
                                    </option>
                                    <option value="Cyprus">
                                        {t('cyprus')}
                                    </option>
                                    <option value="Czech Republic">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Denmark">
                                        {t('denmark')}
                                    </option>
                                    <option value="Djibouti">
                                        {t('djibouti')}
                                    </option>
                                    <option value="Dominica">
                                        {t('dominica')}
                                    </option>
                                    <option value="Dominican Republic">
                                        {t('Dominicanrepublic')}
                                    </option>
                                    <option value="Ecuador">
                                        {t('ecuador')}
                                    </option>
                                    <option value="Egypt">{t('egypt')}</option>
                                    <option value="El Salvador">
                                        {t('elsavodor')}
                                    </option>
                                    <option value="Equatorial Guinea">
                                        {t('EquatorialGuinea')}
                                    </option>
                                    <option value="Eritrea">
                                        {t('Eritrea')}
                                    </option>
                                    <option value="Estonia">
                                        {t('Estonia')}
                                    </option>
                                    <option value="Ethiopia">
                                        {t('Ethiopia')}
                                    </option>
                                    <option value="Falkland Islands (Malvinas)">
                                        {t('Falkland')}
                                    </option>
                                    <option value="Faroe Islands">
                                        {t('Gabon')}
                                    </option>
                                    <option value="Fiji">{t('Gambia')}</option>
                                    <option value="Finland">
                                        {t('Germany')}
                                    </option>
                                    <option value="France">{t('Ghana')}</option>
                                    <option value="French Guiana">
                                        {t('Gibraltar')}
                                    </option>
                                    <option value="French Polynesia">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="French Southern Territories">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Gabon">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Gambia">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Georgia">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Germany">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Ghana">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Gibraltar">
                                        {t('Gibraltar')}
                                    </option>
                                    <option value="Greece">
                                        {t('Greece')}
                                    </option>
                                    <option value="Greenland">
                                        {t('Greenland')}
                                    </option>
                                    <option value="Grenada">
                                        {t('Grenada')}
                                    </option>
                                    <option value="Guadeloupe">
                                        {t('Guadeloupe')}
                                    </option>
                                    <option value="Guam">{t('Guam')}</option>
                                    <option value="Guatemala">
                                        {t('Guatemala')}
                                    </option>
                                    <option value="Guernsey">
                                        {t('Guernsey')}
                                    </option>
                                    <option value="Guinea">
                                        {t('Guinea')}
                                    </option>
                                    <option value="Guinea-Bissau">
                                        {t('GuineaBissau')}
                                    </option>
                                    <option value="Guyana">
                                        {t('Guyana')}
                                    </option>
                                    <option value="Haiti">{t('Haiti')}</option>
                                    <option value="Heard Island and Mcdonald Islands">
                                        {t('HeardIslandandMcdonaldIslands')}
                                    </option>
                                    <option value="Holy See (Vatican City State)">
                                        {t('HolySee')}
                                    </option>
                                    <option value="Honduras">
                                        {t('Honduras')}
                                    </option>
                                    <option value="Hong Kong">
                                        {t('HongKong')}
                                    </option>
                                    <option value="Hungary">
                                        {t('Hungary')}
                                    </option>
                                    <option value="Iceland">
                                        {t('Iceland')}
                                    </option>
                                    <option value="India">{t('India')}</option>
                                    <option value="Indonesia">
                                        {t('Indonesia')}
                                    </option>
                                    <option value="Iran, Islamic Republic of">
                                        {t('IranIslamicRepublicof')}
                                    </option>
                                    <option value="Iraq">{t('Iraq')}</option>
                                    <option value="Ireland">
                                        {t('Ireland')}
                                    </option>
                                    <option value="Isle of Man">
                                        {t('IsleofMan')}
                                    </option>
                                    <option value="Israel">{t('Israe')}</option>
                                    <option value="Italy">{t('Italy')}</option>
                                    <option value="Jamaica">
                                        {t('Jamaica')}
                                    </option>
                                    <option value="Japan">{t('Japan')}</option>
                                    <option value="Jersey">
                                        {t('Jersey')}
                                    </option>
                                    <option value="Jordan">
                                        {t('Jordan')}
                                    </option>
                                    <option value="Kazakhstan">
                                        {t('Kiribati')}
                                    </option>
                                    <option value="Kenya">
                                        {t('KoreaRepublicof')}
                                    </option>
                                    <option value="Kiribati">
                                        {t('Kiribati')}
                                    </option>
                                    <option value="Korea, Democratic People's Republic of">
                                        {t('KoreaRepublicof')}
                                    </option>
                                    <option value="Korea, Republic of">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Kosovo">
                                        {t('Kosovo')}
                                    </option>
                                    <option value="Kuwait">
                                        {t('Kuwait')}
                                    </option>
                                    <option value="Kyrgyzstan">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Lao People's Democratic Republic">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Latvia">
                                        {t('Latvia')}
                                    </option>
                                    <option value="Lebanon">
                                        {t('Lebanon')}
                                    </option>
                                    <option value="Lesotho">
                                        {t('Lesotho')}
                                    </option>
                                    <option value="Liberia">
                                        {t('Liberia')}
                                    </option>
                                    <option value="Libyan Arab Jamahiriya">
                                        {t('LibyanArabJamahiriya')}
                                    </option>
                                    <option value="Liechtenstein">
                                        {t('Liechtenstein')}
                                    </option>
                                    <option value="Lithuania">
                                        {t('Lithuania')}
                                    </option>
                                    <option value="Luxembourg">
                                        {t('Luxembourg')}
                                    </option>
                                    <option value="Macao">{t('Macao')}</option>
                                    <option value="Macedonia, the Former Yugoslav Republic of">
                                        {t(
                                            'MacedoniatheFormerYugoslavRepublicof'
                                        )}
                                    </option>
                                    <option value="Madagascar">
                                        {t('Madagasca')}
                                    </option>
                                    <option value="Malawi">
                                        {t('Malawi')}
                                    </option>
                                    <option value="Malaysia">
                                        {t('Malaysia')}
                                    </option>
                                    <option value="Maldives">
                                        {t('Maldives')}
                                    </option>
                                    <option value="Mali">{t('Mali')}</option>
                                    <option value="Malta">{t('Malta')}</option>
                                    <option value="Marshall Islands">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Martinique">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Mauritania">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Mauritius">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Mayotte">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Mexico">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Micronesia, Federated States of">
                                        {t('MarshallIslands')}
                                    </option>
                                    <option value="Moldova, Republic of">
                                        {t('Martinique')}
                                    </option>
                                    <option value="Monaco">
                                        {t('Mauritania')}
                                    </option>
                                    <option value="Mongolia">
                                        {t('Mongolia')}
                                    </option>
                                    <option value="Montenegro">
                                        {t('Montenegro')}
                                    </option>
                                    <option value="Montserrat">
                                        {t('Montserrat')}
                                    </option>
                                    <option value="Morocco">
                                        {t('Morocco')}
                                    </option>
                                    <option value="Mozambique">
                                        {t('Mozambique')}
                                    </option>
                                    <option value="Myanmar">
                                        {t('Myanmar')}
                                    </option>
                                    <option value="Namibia">
                                        {t('Namibia')}
                                    </option>
                                    <option value="Nauru">{t('Nauru')}</option>
                                    <option value="Nepal">
                                        {t('selectindustry')}
                                    </option>
                                    <option value="Netherlands">
                                        {t('Netherlands')}
                                    </option>
                                    <option value="Netherlands Antilles">
                                        {t('NetherlandsAntilles')}
                                    </option>
                                    <option value="New Caledonia">
                                        {t('NewCaledonia')}
                                    </option>
                                    <option value="New Zealand">
                                        {t('NewZealand')}
                                    </option>
                                    <option value="Nicaragua">
                                        {t('Nicaragua')}
                                    </option>
                                    <option value="Niger">{t('Niger')}</option>
                                    <option value="Nigeria">
                                        {t('Nigeria')}
                                    </option>
                                    <option value="Niue">{t('Niue')}</option>
                                    <option value="Norfolk Island">
                                        {t('NorfolkIsland')}
                                    </option>
                                    <option value="Northern Mariana Islands">
                                        {t('NorthernMarianaIslands')}
                                    </option>
                                    <option value="Norway">
                                        {t('Norway')}
                                    </option>
                                    <option value="Oman">{t('Oman')}</option>
                                    <option value="Pakistan">
                                        {t('Pakistan')}
                                    </option>
                                    <option value="Palau">{t('Palau')}</option>
                                    <option value="Palestinian Territory, Occupied">
                                        {t('PalestinianTerritoryOccupied')}
                                    </option>
                                    <option value="Panama">
                                        {t('Panama')}
                                    </option>
                                    <option value="Papua New Guinea">
                                        {t('PapuaNewGuinea')}
                                    </option>
                                    <option value="Paraguay">
                                        {t('Paraguay')}
                                    </option>
                                    <option value="Peru">{t('Peru')}</option>
                                    <option value="Philippines">
                                        {t('Philippines')}
                                    </option>
                                    <option value="Pitcairn">
                                        {t('Pitcairn')}
                                    </option>
                                    <option value="Poland">
                                        {t('Poland')}
                                    </option>
                                    <option value="Portugal">
                                        {t('Portugal')}
                                    </option>
                                    <option value="Puerto Rico">
                                        {t('PuertoRico')}
                                    </option>
                                    <option value="Qatar">{t('Qatar')}</option>
                                    <option value="Reunion">
                                        {t('Reunion')}
                                    </option>
                                    <option value="Romania">
                                        {t('Romania')}
                                    </option>
                                    <option value="Russian Federation">
                                        {t('RussianFederation')}
                                    </option>
                                    <option value="Rwanda">
                                        {t('Rwanda')}
                                    </option>
                                    <option value="Saint Barthelemy">
                                        {t('SaintBarthelemy')}
                                    </option>
                                    <option value="Saint Helena">
                                        {t('SaintHelena')}
                                    </option>
                                    <option value="Saint Kitts and Nevis">
                                        {t('SaintKittsandNevis')}
                                    </option>
                                    <option value="Saint Lucia">
                                        {t('SaintLucia')}
                                    </option>
                                    <option value="Saint Martin">
                                        {t('SaintMartin')}
                                    </option>
                                    <option value="Saint Pierre and Miquelon">
                                        {t('SaintPierreandMiquelon')}
                                    </option>
                                    <option value="Saint Vincent and the Grenadines">
                                        {t('SaintVincentandtheGrenadines')}
                                    </option>
                                    <option value="Samoa">{t('Samoa')}</option>
                                    <option value="San Marino">
                                        {t('SanMarino')}
                                    </option>
                                    <option value="Sao Tome and Principe">
                                        {t('SaoTomeandPrincipe')}
                                    </option>
                                    <option value="Saudi Arabia">
                                        {t('SaudiArabia')}
                                    </option>
                                    <option value="Senegal">
                                        {t('Senegaly')}
                                    </option>
                                    <option value="Serbia">
                                        {t('Serbia')}
                                    </option>
                                    <option value="Serbia and Montenegro">
                                        {t('SerbiaandMontenegro')}
                                    </option>
                                    <option value="Seychelles">
                                        {t('Seychelles')}s
                                    </option>
                                    <option value="Sierra Leone">
                                        {t('SierraLeone')}
                                    </option>
                                    <option value="Singapore">
                                        {t('Singapore')}
                                    </option>
                                    <option value="Sint Maarten">
                                        {t('SintMaarten')}
                                    </option>
                                    <option value="Slovakia">
                                        {t('Slovakia')}
                                    </option>
                                    <option value="Slovenia">
                                        {t('Slovenia')}
                                    </option>
                                    <option value="Solomon Islands">
                                        {t('SolomonIslands')}
                                    </option>
                                    <option value="Somalia">
                                        {t('Somalia:')}
                                    </option>
                                    <option value="South Africa">
                                        {t('SouthAfrica')}
                                    </option>
                                    <option value="South Georgia and the South Sandwich Islands">
                                        {t(
                                            'SouthGeorgiaandtheSouthSandwichIslands'
                                        )}
                                    </option>
                                    <option value="South Sudan">
                                        {t('SouthSudan')}
                                    </option>
                                    <option value="Spain">{t('Spain')}</option>
                                    <option value="Sri Lanka">
                                        {t('SriLanka')}
                                    </option>
                                    <option value="Sudan">{t('Sudan')}</option>
                                    <option value="Suriname">
                                        {t('Suriname')}
                                    </option>
                                    <option value="Svalbard and Jan Mayen">
                                        {t('SvalbardandJanMayen')}
                                    </option>
                                    <option value="Swaziland">
                                        {t('Swaziland')}
                                    </option>
                                    <option value="Sweden">
                                        {t('Sweden')}
                                    </option>
                                    <option value="Switzerland">
                                        {t('Switzerland')}
                                    </option>
                                    <option value="Syrian Arab Republic">
                                        {t('SyrianArabRepublic')}
                                    </option>
                                    <option value="Taiwan, Province of China">
                                        {t('TaiwanProvinceofChina')}
                                    </option>
                                    <option value="Tajikistan">
                                        {t('Tajikistan')}
                                    </option>
                                    <option value="Tanzania, United Republic of">
                                        {t('TanzaniaUnitedRepublicof')}
                                    </option>
                                    <option value="Thailand">
                                        {t('Thailand')}
                                    </option>
                                    <option value="Timor-Leste">
                                        {t('TimorLeste')}
                                    </option>
                                    <option value="Togo">{t('Tokelau')}</option>
                                    <option value="Tokelau">
                                        {t('Tonga')}
                                    </option>
                                    <option value="Tonga">
                                        {t('TrinidadandTobago')}
                                    </option>
                                    <option value="Trinidad and Tobago">
                                        {t('Tunisia')}
                                    </option>
                                    <option value="Tunisia">
                                        {t('Turkey')}
                                    </option>
                                    <option value="Turkey">
                                        {t('Turkmenistan')}
                                    </option>
                                    <option value="Turkmenistan">
                                        {t('TurksandCaicosIslands')}
                                    </option>
                                    <option value="Turks and Caicos Islands">
                                        {t('Tuvalu')}
                                    </option>
                                    <option value="Tuvalu">
                                        {t('Tuvalu')}
                                    </option>
                                    <option value="Uganda">
                                        {t('Uganda')}
                                    </option>
                                    <option value="Ukraine">
                                        {t('UnitedArabEmirates')}
                                    </option>
                                    <option value="United Arab Emirates">
                                        {t('UnitedArabEmirates')}
                                    </option>
                                    <option value="United Kingdom">
                                        {t('UnitedKingdom')}
                                    </option>
                                    <option value="United States">
                                        {t('UnitedStates')}
                                    </option>
                                    <option value="United States Minor Outlying Islands">
                                        {t('UnitedStatesMinorOutlyingIslands')}
                                    </option>
                                    <option value="Uruguay">
                                        {t('Uruguay')}
                                    </option>
                                    <option value="Uzbekistan">
                                        {t('Uzbekistan')}
                                    </option>
                                    <option value="Vanuatu">
                                        {t('Vanuatu')}
                                    </option>
                                    <option value="Venezuela">
                                        {t('Venezuela')}
                                    </option>
                                    <option value="Viet Nam">
                                        {t('VietNam')}
                                    </option>
                                    <option value="Virgin Islands, British">
                                        {t('VirginIslandsBritish')}
                                    </option>
                                    <option value="Virgin Islands, U.s.">
                                        {t('VirginIslandsUs')}
                                    </option>
                                    <option value="Wallis and Futuna">
                                        {t('WallisandFutuna')}
                                    </option>
                                    <option value="Western Sahara">
                                        {t('WesternSahara')}
                                    </option>
                                    <option value="Yemen">{t('Yemen')}</option>
                                    <option value="Zambia">
                                        {t('Zambia')}
                                    </option>
                                    <option value="Zimbabwe">
                                        {t('Zimbabwe')}
                                    </option>
                                </select>

                                <svg
                                    width="16"
                                    height="9"
                                    viewBox="0 0 16 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0625 1.97266L8.34766 8.40625C8.17187 8.54687 7.96094 8.65234 7.75 8.65234C7.53906 8.65234 7.32812 8.54687 7.1875 8.40625L0.472656 1.97266C0.121094 1.65625 0.121094 1.09375 0.4375 0.777343C0.753906 0.425781 1.28125 0.425781 1.63281 0.742187L7.78516 6.64844L13.9023 0.742187C14.2187 0.425781 14.7812 0.425781 15.0977 0.777344C15.4141 1.09375 15.4141 1.65625 15.0625 1.97266Z"
                                        fill="#121437"
                                    />
                                </svg>
                            </div>

                            <div className="input_set f s-b _eleY">
                                <input
                                    type="file"
                                    name="CV"
                                    required
                                    onChange={handleImageUpload}
                                    placeholder="Upload you CV"
                                />
                                <div className="upload full_bg f a-c j-e">
                                    <div className="site_button light_brown_bg interactive_label f a-c j-c pointer">
                                        <strong className="_txt words">
                                            {t('Nofile')}
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <div className="input_set f s-b _eleY">
                                <input type="submit" className="submit_form" />
                                <div className="site_button primary_bg f a-c j-c pointer submit interactive_label">
                                    <strong className="uppercase _txt words">
                                        {t('submitlabel')}
                                    </strong>
                                    <div className="done transit-all">
                                        <svg
                                            width="17"
                                            height="12"
                                            viewBox="0 0 17 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.4688 0.871094C16.8203 1.22266 16.8203 1.75 16.4688 2.06641L7.1875 11.3477C6.87109 11.6992 6.34375 11.6992 6.02734 11.3477L1.24609 6.56641C0.894531 6.25 0.894531 5.72266 1.24609 5.37109C1.5625 5.05469 2.08984 5.05469 2.40625 5.37109L6.625 9.58984L15.3086 0.871094C15.625 0.554687 16.1523 0.554687 16.4688 0.871094Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default CareersForm
