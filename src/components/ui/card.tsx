"use client";
import React from "react";
import CIcon from '@coreui/icons-react';
import { cilPlus } from '@coreui/icons';

export const Card = ({
    title,
    text,
    children,
}: {
    title?: string;
    text?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className="card bg-primary hover:bg-accent border-2 border-blue-800 cursor-pointer shadow-xl">
            <div className={`card-body p-4 min-h-44 ${!!title ? null : "justify-center"}`}>
                {
                    !!title ?
                    <div className="card-title">
                        {title}
                    </div> : <></>
                }
                {
                    text ?? <CIcon icon={cilPlus} height={64} />
                }
                {
                    children
                }
            </div>
        </div>
    )
}