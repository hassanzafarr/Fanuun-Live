import React from 'react'

const Compo1 = () => {
    return (
        <div className="accordion-main">
          <div class="accordion" id="myAccordion">

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">What is the success rate of EB2 NIW approval?</button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>The success rate of EB2 NIW approval varies depending on several factors, including the strength of the applicant's case, the complexity of the case, and the current workload of the USCIS. However, according to the USCIS, the overall approval rate for EB2 NIW petitions was 88.8% in fiscal year 2022.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Is it difficult to get an EB2 NIW?</button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>The difficulty of getting an EB2 NIW depends on the strength of your case. You have a good chance of success if you have strong qualifications and the evidence to support your case. However, if your case is weak, you may have difficulty getting approved.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">How do I apply for an EB2 NIW?</button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                    <div class="card-body">
                      <p>The application process for an EB2 NIW is as follows:
                        <ul>
                          <li>File Form I-140, Immigrant Petition for Alien Worker.</li>
                          <li>Submit supporting evidence, including letters of support from experts in your field,  publications, and other documentation that demonstrates your qualifications and the national importance of your proposed endeavour</li>
                          <li>Pay the filing fees.</li>
                          <li>Wait for USCIS to adjudicate your case.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>


              </div>
        </div>
    )
}

export default Compo1
