import React from 'react'
import "./value.css"

function Value({ values, title, id }) {
    return (
        <div id={id}>
            <div className="abc">

                <div className="values_header">{title}</div>
                <div className="values container">
                    {
                        values.map(value => {
                            return (
                                <div className="value">
                                    <div className="val_num">
                                        {value.number}
                                    </div>
                                    <div className="value_title">
                                        {value.title}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Value
