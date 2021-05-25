import React from 'react'
import CaseImages from './CaseStudyImages/CaseStudyImages'



class CaseStudyContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            caseStudy: [
                {
                    id: '1',
                    caseBackgroundImg: CaseImages.Case1img1,
                    caseLogo: CaseImages.Case1img2,
                    caseTitle: 'Fintech App Rebrands, Uses Automation To Profitably Grow Customer Base',
                    casePara1: 'hello',
                    casePara2: 'hello',
                    caseHeading1: 'hello',
                    casePara3: 'hello',
                    caseHeading2: 'hello',
                    casePara3: 'hello',
                    casePoint: 'hello',
                },
                {
                    id: '2',
                    caseBackgroundImg: CaseImages.Case1img1,
                    caseLogo: CaseImages.Case1img2,
                    caseTitle: 'Uses Automation To Profitably Grow Customer Base',
                    casePara1: 'llo',
                    casePara2: 'llo',
                    caseHeading1: 'llo',
                    casePara3: 'llo',
                    caseHeading2: 'llo',
                    casePara3: 'llo',
                    casePoint: 'llo',
                },
            ]
        }
    }

}
export default CaseStudyContent;