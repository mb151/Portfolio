import React, {useEffect} from 'react'
import "./style.css";
import $ from 'jquery';
function EC() {

    useEffect(() => {
        $(".step").click( function() {
            $(this).addClass("active").prevAll().addClass("active");
            $(this).nextAll().removeClass("active");
        });
        
        $(".step01").click( function() {
            $("#line-process").css("width", "25%");
            $(".discovery").addClass("active").siblings().removeClass("active");
        });
        
        $(".step02").click( function() {
            $("#line-process").css("width", "50%");
            $(".strategy").addClass("active").siblings().removeClass("active");
        });

        $(".step03").click( function() {
            $("#line-process").css("width", "100%");
            $(".genius").addClass("active").siblings().removeClass("active");
        });
    }, [])
    
    
    return (
        <div className="progress-wrapper">
            <br/> <br/> 
                <div id="progressbar-container">
                    <ul>
                        <li className="step step01 active">
                            <div className="step-inner">2020</div>
                        </li>
                        <li className="step step02">
                            <div className="step-inner">2019</div>
                        </li>
                        <li className="step step03">
                            <div className="step-inner">2017</div>
                        </li>
                    </ul>
                    <div id="line">
                        <div id="line-process"></div>
                    </div>
                </div>
                <div id="progress-content-section">
                    <div className="section-content discovery active">
                        <h4>04 Fevrier au 18 Juin 2020 STAGE | 4D LOGICIELS RABAT MAROC</h4>
                        <hr className="linehr" />
                        <p>
                            Etude et développement d’un éditeur des applications web pour le logiciel 4D,<br/>
                            Outils et technologies utilisés: Angular 8, 4D, NodeJs et Wakanda.<br/>
                            Méthodologie utilisée: SCRUM.
                        </p>
                    </div>

                    <div className="section-content strategy">
                        <h4>02 Juin au 02 Août 2019 STAGE | I2ADVERT RABAT MAROC</h4>
                        <hr className="linehr" />
                        <p>
                            Analyse, conception et réalisation d’un site web pour la gestion de location professionnel.<br/>
                            Outils et technologies utilisés: Laravel, MySQL, React JS, Bootstrap.<br/>
                            Méthodologie utilisée: SCRUM.          
                        </p>
                    </div>
                    <div className="section-content genius">
                        <h4>21 Juin au 21 Septembre 2017 STAGE | NIGER TELECOM TAHOUA NIGER</h4>
                        <hr className="linehr" />
                        <p>
                            Analyse, conception et Développement d’une application mobile qui offre différents<br/>
                            services pour la gestion des lignes mobiles des clients Niger Telecom.<br/>
                            Technologie utilisé : Laravel, React Native, MySQL.
                        </p>
                    </div>

                </div>
            
        </div>
    )
}

export default EC
