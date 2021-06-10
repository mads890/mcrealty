import React from 'react';
import './route-styles/Calculator.css';

function Calculator() {
    return (
        <div className='calculator'>
            <header className='calculator-header'>
                <h1>Mortgage Calculator</h1>
            </header>
            <div className='calc-stripe-container'>
                <div className='red calc-stripe-top'></div>
                <div className='white calc-stripe-top'></div>
                <div className='blue calc-stripe-top'></div>
            </div>
            <section className='calculator-main'>
            <iframe className='iframe-calculator' src="https://www.mortgagecalculator.org/webmasters/?downpayment=50000&homevalue=300000&loanamount=250000&interestrate=4&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0" title="mortgage calculator form from mortgage calculator dot org"></iframe>
            </section>
            <div className='calc-stripe-container'>
                <div className='red calc-stripe-bottom'></div>
                <div className='white calc-stripe-bottom'></div>
                <div className='blue calc-stripe-bottom'></div>
            </div>
        </div>
    )
}

export default Calculator;