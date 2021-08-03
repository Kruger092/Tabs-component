import React from 'react'

export const Tabs = ({ options, value, onChange, renderTub }) => (
   <div className="tabs">{renderTub(options, value, onChange)}</div> 
)

