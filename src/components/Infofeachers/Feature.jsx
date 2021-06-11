import React from 'react'
import {ArrowUpward, ArrowDownward} from '@material-ui/icons';
import "./feature.css";

export default function Feature() {
    return (
        <div className="feature">
             <div className="featureItem">
                <span className="featureTitle">Sells Graph</span>
                <div className="featureMoney">
                <span className="Money">$8,451</span>
                <span className="moneyRate">
                    3.2 <ArrowUpward className=" featureIcon " />
                </span>
                </div>
                <span className="featureSub">Compared a last week</span>
            </div> 

            <div className="featureItem">
                <span className="featureTitle">Total Visitors</span>
                <div className="featureMoney">
                <span className="Money">3,973</span>
                <span className="moneyRate">
                   4.5< ArrowDownward className=" featureIcon negative" />
                </span>
                </div>
                <span className="featureSub">Compared a last week</span>
            </div> 

            <div className="featureItem">
                <span className="featureTitle">New Users</span>
                <div className="featureMoney">
                <span className="Money">7,333</span>
                <span className="moneyRate">
                    12.5 <ArrowUpward className=" featureIcon" />
                </span>
                </div>
                <span className="featureSub">Compared a last week</span>
            </div> 

            <div className="featureItem">
                <span className="featureTitle">Total Orders </span>
                <div className="featureMoney">
                <span className="Money">48,973</span>
                <span className="moneyRate">
                   9.5<ArrowUpward className=" featureIcon"/>
                </span>
                </div>
                <span className="featureSub">Compared a last week</span>
            </div> 
        </div>
    )
}
