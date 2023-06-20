import React from "react";
import loader from "../assets/Spinner-1s-200px.png";

const Loader = () => {
    return (
        <div className="container-fluid d-flex justify-content-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "none",display: "block", shapeRendering: "crispedges"}} width="10vw" height="10vw" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.9963768115942028s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(30 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.9057971014492753s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(60 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.8152173913043478s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(90 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.7246376811594202s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(120 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.6340579710144927s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(150 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.5434782608695652s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(180 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.45289855072463764s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(210 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.3623188405797101s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(240 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.2717391304347826s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(270 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.18115942028985504s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(300 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="-0.09057971014492752s" repeatCount="indefinite" />
                    </rect>
                </g><g transform="rotate(330 50 50)">
                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffa805">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.0869565217391304s" begin="0s" repeatCount="indefinite" />
                    </rect>
                </g>
            </svg>
        </div>
    );
}

export default Loader;