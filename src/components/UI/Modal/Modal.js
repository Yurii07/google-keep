import React from 'react';
import { Modal } from 'antd';
import ReactDOM from "react-dom";

const ModalWrapper = ({opened, close, children}) => {

    return ReactDOM.createPortal(
            <Modal
                centered
                visible={opened}
                onOk={close}
                onCancel={close}
                footer={null}
            >
                    {children}
            </Modal>
        ,
        document.getElementById('root-modal')
    );
};

export default ModalWrapper;
