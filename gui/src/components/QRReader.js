import React, { Component } from 'react'
import { connect } from 'react-redux';
import { scanedQRCode } from '../actions';
import QrReader from 'react-qr-reader';
import './style.css';

class QRReader extends Component {
    state = {
        result: 'No result'
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data.replace("ethereum:","")
            })
            this.props.scanedQRCode(data);
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div className="qrreader">
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '30%' }}
                />
            </div>
        )
    }
}

export default connect(null, { scanedQRCode })(QRReader);