"use client"
import { useState, useRef } from "react";
import { CToast, CToaster } from "@coreui/react";
import { IconClipboard } from "@tabler/icons-react";

export function AlertToast() {
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast className="left-34 -top-2 h-16" delay={1500}>
      <div role="alert" className="alert w-84">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Email has been copied to clipboard!</span>
      </div>
    </CToast>
  )
  return (
    <>
      {/* <CButton color="primary" onClick={() => addToast(exampleToast)}>Send a toast</CButton> */}
      <button className="btn btn-primary me-1" onClick={() => {addToast(exampleToast); navigator.clipboard.writeText("jasperkueh@gmail.com")}} ><IconClipboard />Copy</button>
      <CToaster className="fixed" push={toast} ref={toaster} />
    </>
  )
}