import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="spinner-border text-success mt-5" role="status" style={{height:'100px', width:'100px'}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
