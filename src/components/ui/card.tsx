"use client";
import React from "react";
import CIcon from '@coreui/icons-react';
import { cilPlus } from '@coreui/icons';

export const Card = ({
    id,
    title,
    text,
    children,
}: {
    id?: number;
    title?: string;
    text?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className="bg-primary card hover:bg-primary-content hover:text-primary cursor-pointer shadow-xl">
            <div className={`card-body p-4 min-h-44 max-h-44 ${!!title ? null : "justify-center"} overflow-y-auto`} style={{wordBreak: "break-word"}}>
                {
                    !!title ?
                        <div className="flex justify-between">
                            <div className="card-title">
                                <p>{title}</p>
                            </div>
                        </div>
                        :
                        <></>
                }
                {
                    !!text ?
                        <p>{text}</p>
                        : <CIcon icon={cilPlus} height={64} />
                }
                {
                    children
                }
            </div>
        </div>
    )
}