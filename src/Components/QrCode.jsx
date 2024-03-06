import React from 'react';
import QRCode from 'qrcode.react';
import owb_logo from '../assets/owb/logo-globe-bw.svg'

function QrCode({ qrCodeText, userEmail, isBtn }) {

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
                    height: 20,
                    width: 20,
                    excavate: true,
                }}
            />
            <br />
            <button
                type="button"
                className={'submitBtn invalid:border-red-700' + ' ' + (isBtn ?'':'hidden')}
                value="Download"
                onClick={downloadQRCode}
            >Download E-Ticket</button>
        </>
    );
}

export default QrCode;
