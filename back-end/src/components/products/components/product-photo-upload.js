import React, { Component } from 'react';

import one from '../../../assets/images/pro3/1.jpg'
import user from '../../../assets/images/user.png';


class ProductPhotoUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            file: '',
            dummyimgs: [
                { img: user },
                { img: user },
                { img: user },
                { img: user },
                { img: user }
            ]
        }
    }
    IncrementItem = () => {
        this.setState(prevState => {
            if (prevState.quantity < 9) {
                return {
                    quantity: prevState.quantity + 1
                }
            } else {
                return null;
            }
        });
    }
    DecreaseItem = () => {
        this.setState(prevState => {
            if (prevState.quantity > 0) {
                return {
                    quantity: prevState.quantity - 1
                }
            } else {
                return null;
            }
        });
    }
    handleChange = (event) => {
        this.setState({ quantity: event.target.value });
    }

    //image upload
    _handleSubmit(e) {
        e.preventDefault();
    }

    _handleImgChange(e, i) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        const { dummyimgs } = this.state;

        reader.onloadend = () => {
            dummyimgs[i].img = reader.result;
            this.setState({
                file: file,
                dummyimgs,
            });
        }
        reader.readAsDataURL(file)
    }
    render() {
        return (
            <div className="add-product product-photo-upload d-flex">
                <div className="block-image pt-1">
                    <img src={one} alt="" className="image_zoom_1 blur-up lazyloaded"  style={{width:'300px', height:'300px'}} />
                </div>
                <div className="block-file-upload p-1">
                    <ul className="file-upload-product">
                        {
                            this.state.dummyimgs.map((res, i) => {
                                return (
                                    <li key={i}>
                                        <div className="box-input-file">
                                            <input className="upload" type="file" onChange={(e) => this._handleImgChange(e, i)} />
                                            <img src={res.img} />
                                            <a id="result1" onClick={(e) => this._handleSubmit(e.target.id)}></a>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
};

export default ProductPhotoUpload;