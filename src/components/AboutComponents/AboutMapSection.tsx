import React from 'react'

const AboutMapSection = () => {
    return (
        <div className="map_wrap primary_bg">
            <iframe
                id="mapIframe"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1855.4742135859553!2d39.1348753!3d21.5488718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c506e44e1ff9%3A0x824b28ffea35caca!2sMMC%20HQ!5e0!3m2!1sen!2sae!4v1694718507309!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default AboutMapSection
