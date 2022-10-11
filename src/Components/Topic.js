import React from 'react';
import { Link } from 'react-router-dom';
import { DocumentTextIcon } from '@heroicons/react/24/solid'

const Topic = ({ topic }) => {
    const { logo, name, total, id } = topic
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl border border-slate-200" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz : {total}</p>
                <div className="card-actions">
                    <Link to={`../home/${id}`}><button className="btn border-3 btn-outline btn-error">Get Quiz <DocumentTextIcon className="h-6 w-6" /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;