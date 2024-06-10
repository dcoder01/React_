import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container mx-auto my-5">
            <aside className="bg-light text-black rounded-lg p-4 mb-5 position-relative overflow-hidden">
                <div className="row align-items-center">
                    <div className="col-sm-6 order-2 order-sm-1 text-center text-sm-end">
                        <h2 className="display-5 fw-bold">Download Now</h2>
                        <h2 className="d-none d-sm-block display-6">Lorem Ipsum</h2>
                        <Link className="btn btn-warning mt-3" to="/">
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                    <div className="col-sm-6 order-1 order-sm-2 text-center">
                        <img className="img-fluid" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                    </div>
                </div>
            </aside>

            <div className="text-center my-5">
                <img className="img-fluid" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center display-4 py-5">Lorem Ipsum Yojo</h1>
        </div>
    );
}
