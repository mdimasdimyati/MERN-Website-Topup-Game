import React from 'react'
import Content from './Content'

export default function Reached() {
    return (
    <section className="reached pt-50 pb-50">
        <div className="container-fluid">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                <Content title="290M+" desc ="Players Top Up"/>
                <Content title="12.500" desc ="Games Available"/>
                <Content title="99,9%" desc ="Happy Players"/>
                <Content title="4.7" desc ="Rating Worldwide"/>
            </div>
        </div>
    </section>
    )
}
