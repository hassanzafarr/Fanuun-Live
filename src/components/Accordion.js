import React, { useState } from 'react';
import './Accordion.css';
import plusIcon from '../assets/1.png'; // Replace with the path to your plus icon
import minusIcon from '../assets/2.png';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderAccordionItems = () => {
    const accordionItems = [
      { heading: 'What is the success rate of EB2 NIW approval?', content: 'The success rate of EB2 NIW approval varies depending on several factors, including the strength of the applicants case, the complexity of the case, and the current workload of the USCIS. However, according to the USCIS, the overall approval rate for EB2 NIW petitions was 88.8% in fiscal year 2022.' },
      { heading: 'Is it difficult to get an EB2 NIW?', content: 'The difficulty of getting an EB2 NIW depends on the strength of your case. You have a good chance of success if you have strong qualifications and the evidence to support your case. However, if your case is weak, you may have difficulty getting approved.' },
      { heading: 'How do I apply for an EB2 NIW?', content: 'The application process for an EB2 NIW is as follows:', li1: 'File Form I-140, Immigrant Petition for Alien Worker.', li2: 'Submit supporting evidence, including letters of support from experts in your field, publications, and other documentation that demonstrates your qualifications and the national importance of your proposed endeavor', li3: 'Pay the filing fees.', li4: 'Wait for USCIS to adjudicate your case.' },
      { heading: 'What forms are required for an EB2 NIW visa?', li1: "Form I-140, Immigrant Petition for Alien Worker.", li2: 'Form ETA-750B, Application for Alien Employment Certification.', li3: "Supporting evidence letters from experts in your field, publications, and other documentation.", li4: 'The filing fees for EB2 NIW vary depending on the country of application.' },
      { heading: 'Can I self-petition for EB2 NIW without a job offer?', content: 'Yes, one of the unique aspects of the EB-2 NIW category is that it allows individuals to self-petition without a job offer from a U.S. employer. This gives you the freedom to pursue your career goals independently.' },
      { heading: 'How long does it take to process an EB2 NIW application?', content: 'The processing time for an EB2 NIW application can vary, but it typically takes between 12 and 18 months. However, the processing time can be longer if your case is complex or there are any delays in the adjudication process.' },
      { heading: 'Can I add a spouse to my Green Card application after my I-140 is submitted?', content: 'Yes, after your I-140 is submitted and approved, your family members (spouses and unmarried children under 21) can apply with you for an adjustment of status or immigrant Visa.' },
      { heading: 'Is the EB-2 NIW a good choice for Indians and Chinese?', content: 'An alternative option for applicants from these countries is the EB-1A category, which has current priority dates for all nationalities. Suppose you are ineligible for the EB-1A category. In that case, another approach is to apply for an EB-2 NIW to secure your priority date and potentially request an extension of your H-1B status while awaiting the availability of the Green Card. ' },
      { heading: 'Does the EB-2 NIW give me work authorization?', content: 'The approval of an EB-2 NIW does not provide work authorization on its own. If you are currently in the U.S., it is important to ensure that you possess a valid work visa, such as an O-1, H-1B, or E-2, in order to work legally. Additionally, you can simultaneously file for an adjustment of status, which typically takes 5-6 months, to obtain work authorization. To determine the most suitable option for your situation, we recommend consulting with our team for personalized guidance.' },
      { heading: 'What are the advantages of an EB2 NIW?', content: 'There are several advantages to applying for an EB2 NIW, including:', li1: "You do not need a job offer to apply for an EB2 NIW. ", li2: "The application process is typically faster than the labour certification process. ", li3: 'You are not subject to the annual numerical caps on employment-based green cards', li4: '' },
      { heading: 'What are the disadvantages of an EB2 NIW?', content: 'The main disadvantage of an EB2 NIW is that the application process can be complex and time-consuming. You will need to gather significant evidence to support your case, and the process can take several years to complete.' },
    ];

    const totalItems = 12;
    const emptyItemIndex = totalItems - 1;

    const rows = [];
    for (let i = 0; i < accordionItems.length; i += 3) {
      const row = accordionItems.slice(i, i + 3);
      rows.push(row);
    }

    return rows.map((row, rowIndex) => (
      <div className="accordion-row" key={rowIndex}>
        {row.map((item, itemIndex) => {
          const index = rowIndex * 3 + itemIndex;
          {/* if (index === emptyItemIndex) { */}

            return (
              <div className={`accordion-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                <div className="accordion-header" onClick={() => handleItemClick(index)}>
                  <span className="accordion-title">{item.heading}</span>
                  <span className='accordion-icon-div'>
                    <img
                      className="accordion-icon"
                      src={activeIndex === index ? minusIcon : plusIcon}
                      alt={activeIndex === index ? 'minus' : 'plus'}
                    />
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    {/* <h3>{item.heading}</h3> */}
                    <p>{item.content}</p>
                    {item.li1 == null ? null :
                      (
                        <ul>
                          <li>{item.li1}</li>
                          <li>{item.li2}</li>
                          <li>{item.li3}</li>
                          {item.li4 == '' ? null : <li>{item.li4}</li>}
                        </ul>
                      )
                    }
                  </div>
                )}
              </div>
            );
          {/* } */}
        })}
      </div>
    ));
  };

  return <div className="accordion-container">{renderAccordionItems()}</div>;
};

export default Accordion;
