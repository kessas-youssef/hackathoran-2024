import React from 'react';
import QRCode, { QRCodeSVG } from 'qrcode.react';
import owb_logo from '../assets/owb/logo-globe-bw.svg'

function QrCode({ qrCodeText, userEmail }) {

    // download QR code
    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = `e-ticket-${userEmail}.png`;
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    return (
        <>
            <QRCode
                id="qrCodeEl"
                size={150}
                value={qrCodeText}
                includeMargin={true}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                imageSettings={{
                    src: owb_logo,
                    x: undefined,
                    y: undefined,
                    height: 25,
                    width: 25,
                    excavate: true,
                }}
            />
            <br />
            <button
                type="button"
                className='submitBtn invalid:border-red-700'
                value="Download"
                onClick={downloadQRCode}
            >Download E-Ticket</button>
        </>
    );
}

export default QrCode;
