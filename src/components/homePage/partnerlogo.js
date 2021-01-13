import React, { Component } from 'react'
import style from './partnerlogo.module.css'


import codeForCode from '../../Image/partner/2020_callforcode_logo.png'
import BgovermentLogo from '../../Image/partner/Bazil goverment logo.png'
import CampoLogo from '../../Image/partner/campo_real_logo.png'

export default class Partnerlogo extends Component {
    render() {
        return (
            <div className={style.site}>
                <h3 className={style.partnertext}>Partners</h3>
                <div className={style.agrollypartner}>
                    <img className={style.partnerImage} height="110px" src={BgovermentLogo} alt="Bazil goverment logo" />
                    <img className={style.partnerImage} height="110px" src={CampoLogo} alt="campo real" />
                </div>
                <h3 className={style.partnertext}>Supporter</h3>
                <div>
                    <img className={style.partnerImage} height="110px" src={codeForCode} alt="2020 call for code" />
                </div>


            </div>
        )
    }
}