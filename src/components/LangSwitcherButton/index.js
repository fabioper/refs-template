import React from 'react'
import propTypes from 'prop-types'

const Index = ({ active, value, label, onClick }) => (
    <button
        className={`lang-switcher__button ${active ? 'active' : ''}`}
        onClick={() => onClick(value)}>
        { label ? label : value }
    </button>
)

Index.propTypes = {
    active: propTypes.bool.isRequired,
    value: propTypes.string.isRequired,
    label: propTypes.string,
    onClick: propTypes.func.isRequired
}

export default Index
