import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/bread-crumb';
import data from '../../assets/data/orders';
import Datatable from '../common/Datatable'

export class Orders extends Component {

    render() {
        return (
            <Fragment>
                <Breadcrumb title="Orders" parent="Sales" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Manage Order</h5>
                                </div>
                                <div className="card-body order-datatable">
                                    <Datatable
                                        multiSelectOption={false}
                                        myData={data}
                                        pageSize={10}
                                        pagination={true}
                                        class="-striped -highlight"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Orders
