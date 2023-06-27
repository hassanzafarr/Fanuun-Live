import React from 'react';
import './financialRequirements.css'
import Fade from "react-reveal/Fade";


const FinancialRequirements = () => {
    return (
        <div className='mainContainerFR'>
            <Fade bottom>
                <h1>Financial Requirements for Settling in Canada</h1>
                <p>Entrepreneurs must have adequate financial means for settling themselves and their dependents in Canada.</p>
                <p>According to the IRCC, the funds requirement <span style={{ fontWeight: '500' }}>AS OF MAY 2023</span>  are:</p>
            </Fade>
            <div className='subContainerFR'>
                <Fade left>
                    <div className='leftContainerFR'>
                        <h2>Number of Family Members</h2>
                        <p className='topPara'>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>7+</p>
                    </div>
                </Fade>
                <Fade right>
                    <div className='rightContainerFR'>
                        <h2>Funds Required (CAD)</h2>
                        <p className='topPara'>$13,757</p>
                        <p>$17,127</p>
                        <p>$21,055</p>
                        <p>$25,564</p>
                        <p>$28,994</p>
                        <p>$32,700</p>
                        <p>$36,407</p>
                        <p>$3,706</p>
                    </div>
                </Fade>


            </div>
            <Fade bottom>
                <p className='paraBottom'> <span style={{ color: '#2F2A72', fontWeight: '600' }}>NOTE:</span> These amounts are updated each year, so it is important to check with the
                    IRCC website for any change in amounts required.</p>
            </Fade>
        </div>
    )
}

export default FinancialRequirements 
