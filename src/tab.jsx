import React from 'react'

export const Tab = ({ value }) => { 

    if (!value) {
      return null
    }

    return (
        <div className="tabs__content">
            {value.label}
        </div>
    );
}



