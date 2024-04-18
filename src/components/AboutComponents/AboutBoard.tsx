import React from 'react'

const boardMembers = [
    {
        name: 'Dr. Ibrahim Suliman AlRajhi',
        position: 'Chairman',
        description: 'Chairman of Board of Directors for MMC',
    },
    {
        name: 'Mr. John Gregory Iossifidis',
        position: 'Vice Chairman',
        description:
            '(GCEO) Group Chief Executive Officer at Al Ghurair Investment',
    },
    {
        name: 'Mr. Djamal Djouhri',
        position: 'Board Member',
        description:
            '(CEO) Chief Executive Officer for Al Ghurair Resources Oils and Proteins (AGROP) and Al Ghurair Foods (AGF)',
    },
    {
        name: 'Mr. Abdulmohsen Albazie',
        position: 'Board member',
        description: '(CEO) Chief Executive Officer at Mada Holding',
    },
    {
        name: 'Mr. Abdulrahman Alowais',
        position: 'Board member',
        description: 'Advisor',
    },
    {
        name: 'Dr. Martin Heinrich Theodor Reintjes',
        position: 'Independent Board Member',
        description:
            'Member of the advisory Board at Dr. August Oetker Nahrungsmittel KG',
    },
    {
        name: 'Mr. Majed Mazen Nofal',
        position: 'Independent Board Member',
        description:
            '(CEO) Chief Executive Officer at Takween Advanced Industries',
    },
]

const boardMembers_ar = [
    {
        name: 'د. إبراهيم سليمان الراجحي',
        position: 'رسالة رئيس مجلس الإدارة',
        description: 'رئيس مجلس إدارة في شركة المطاحن الحديثة',
    },
    {
        name: 'جون يوسيفيدس',
        position: 'نائب رئيس مجلس الإدارة',
        description: 'الرئيس التنفيذي للمجموعة بشركة الغرير للاستثمار',
    },
    {
        name: 'جمال جواهري',
        position: 'عضو مجلس الإدارة',
        description:
            'الرئيس التنفيذي لشركة الغرير الدولية للموارد والزيوت والبروتينات وشركة الغرير للأغذية',
    },
    {
        name: 'عبدالمحسن البازعي',
        position: 'عضو مجلس إدارة',
        description: 'الرئيس التنفيذي لشركة مدى القابضة',
    },
    {
        name: 'عبدالرحمن العويس',
        position: 'عضو مجلس الإدارة',
        description: 'مستشار',
    },
    {
        name: 'مارتين هاينريش ثيودور رينتجيس',
        position: 'عضو مجلس إدارة مستقل',
        description:
            'عضو في المجلس الاستشاري لشركة Dr. August Oetker Nahrungsmittel KG',
    },
    {
        name: 'ماجد مازن نوفل',
        position: 'عضو مجلس الإدارة المستقل',
        description:
            'الرئيس التنفيذي لشركة تكوين المتطورة للصناعات مساهمة عامة',
    },
]

const AboutBoard = () => {
    const lang = localStorage.getItem('lang')

    return (
        <div className="inner_padding light_bg f f-c x_padding a-j">
            <div className="section_wrap f f-c">
                <div className="section_head f f-c a-s _eleWrap">
                    {lang == 'en' ? (
                        <h2 className="_mask">Board of directors</h2>
                    ) : (
                        <h2 className="_mask">مجلس الإدارة</h2>
                    )}
                </div>
                <div className="section_body">
                    <div className="board_set f a-s f-w _eleWrap">
                        {lang === 'en'
                            ? boardMembers.map((member, index) => (
                                  <div
                                      key={index}
                                      className="board_col f f-c _eleX"
                                  >
                                      <h4>{member.name}</h4>
                                      <p>{member.position}</p>
                                      <p>{member.description}</p>
                                  </div>
                              ))
                            : boardMembers_ar.map((member, index) => (
                                  <div
                                      key={index}
                                      className="board_col f f-c _eleX"
                                  >
                                      <h4>{member.name}</h4>
                                      <p>{member.position}</p>
                                      <p>{member.description}</p>
                                  </div>
                              ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBoard
