import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section className="page-section clearfix">
                    <div className="container">
                    <div className="intro"><img alt='' className="img-fluid intro-img mb-3 mb-lg-0 rounded" src="/assets/img/intro.jpg" style={{width: 700, height: 500}} />
                        <div className="text-center intro-text p-5 rounded bg-faded">
                        <h2 className="section-heading mb-4"><span className="section-heading-lower" /></h2>
                        <p className="mb-3">NFT represents the Non-Fungible Token,which is a special form of cryptocurrency.<br />All the artwork,&nbsp; book text, music or video even digital collectibles and online games can be verified by NFT's special certification methods to verify their unique value.</p>
                        <div className="mx-auto intro-button" />
                        </div>
                    </div>
                    </div>
                </section>
                <div className="container"><img alt='' className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="/assets/img/about.jpg" style={{width: 800, height: 500}} />
                    <div className="about-heading-content">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="bg-faded rounded p-5">
                            <h2 className="section-heading mb-4"><span className="section-heading-upper">Strong artworks</span><span className="section-heading-lower">Our Platform</span></h2>
                            <p>NFT is a major innovation of blockchain technology in the field of art. By giving each piece of work a unique digital signature, it can effectively guarantee the authenticity and fluidity of the work. Through NFT technology, the information of any physical artwork can be uploaded to the BTFS system to generate the corresponding NFT artwork BTFS address. This information is written into the smart contract, and the uniqueness of the work is finally confirmed by the contract address.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <section className="bg-secondary page-section cta">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                        <div className="text-center cta-inner rounded">
                            <h2 className="section-heading mb-4"><span className="section-heading-upper">Our Promise</span><span className="section-heading-lower">To You</span></h2>
                            <p className="mb-0">We try to provide services that satisfies you.We protect your data and privacy.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}