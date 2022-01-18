import React, {useEffect} from 'react'
import "./style.css";
import $ from 'jquery';
function FC() {

    useEffect(() => {
        $(".step").click( function() {
            $(this).addClass("active").prevAll().addClass("active");
            $(this).nextAll().removeClass("active");
        });
        
        $(".step01").click( function() {
            $("#line-process").css("width", "50%");
            $(".discovery").addClass("active").siblings().removeClass("active");
        });
        
        $(".step02").click( function() {
            $("#line-process").css("width", "100%");
            $(".strategy").addClass("active").siblings().removeClass("active");
        });
    }, [])
    
    
    return (
        <div className="process-wrapper">
            <br/> <br/> 
                <div id="progress-bar-container">
                    <ul>
                        <li className="step step01 active">
                            <div className="step-inner">JUIN 2020</div>
                        </li>
                        <li className="step step02">
                            <div className="step-inner">JUIN 2015</div>
                        </li>
                    </ul>
                    <div id="line">
                        <div id="line-process"></div>
                    </div>
                </div>
                <div id="progress-content-section">
                    <div className="section-content discovery active">
                        <p>
                            Obtention de diplôme d’ingénieur en Technologie de l’Information à l’École
                            Supérieure VINCI<br/>d‘Ingénierie Informatique et Réseaux de Télécoms de RABAT.
                        </p>
                    </div>

                    <div className="section-content strategy">
                        <p>
                            Obtention du baccalauréat scientifique série D au CSP Solidarité de Tahoua Niger.
                        </p>
                    </div>

                </div>
            
        </div>
    )
}

export default FC
