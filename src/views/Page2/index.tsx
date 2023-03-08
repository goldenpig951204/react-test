import React, { useState } from "react";
import './index.css';

const Page2 = () => {
  const [btnNum, setBtnNum] = useState < number > (0);
  const [modalTxts, setModalTxts] = useState({
    headerTxt: '',
    bodyTxt: '',
    footerBtnTxt: '',
  });

  const [footerBtnStyle, setFooterBtnStyle] = useState({
    bgColor: '',
    fontColor: ''
  });

  const [cancelBtnStyle, setCancelBtnStyle] = useState({
    border: '',
    bgColor: ''
  });

  const [cancelBtnShow, setCancelBtnShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [removeCounter, setRemoveCounter] = useState(0);
  const [deleteCounter, setDeleteCounter] = useState(1);
  const [isDeleted, setIsDeleted] = useState(false);

  const onFirstBtn = () => {
    setBtnNum(0);
    setModalTxts({
      headerTxt: 'Infomation',
      bodyTxt: `You have clicked the Single CTA button`,
      footerBtnTxt: 'OK'
    });
    setFooterBtnStyle({
      bgColor: '#03f',
      fontColor: 'white'
    });
    setCancelBtnShow(false);
    setIsModalOpen(true);
  }

  const onSecondBtn = () => {
    setBtnNum(1);
    setModalTxts({
      headerTxt: 'Remove?',
      bodyTxt: `Are you sure you want to remove the Remove ${removeCounter} button?`,
      footerBtnTxt: 'Remove'
    });
    setFooterBtnStyle({
      bgColor: '#ffa500',
      fontColor: 'black'
    });
    setCancelBtnStyle({
      border: 'none',
      bgColor: 'transparent'
    });
    setCancelBtnShow(true);
    setIsModalOpen(true);
  }

  const onThirdBtn = () => {
    setBtnNum(3);
    setDeleteCounter(prev => prev + 1);
    setModalTxts({
      headerTxt: 'Delete?',
      bodyTxt: `Are you sure you want to delete the ${isDeleted ? 'Disabled' : 'Delete'} ${deleteCounter} button? This cannot be undone!`,
      footerBtnTxt: 'Delete'
    });
    setFooterBtnStyle({
      bgColor: '#cc0000',
      fontColor: 'white'
    });
    setCancelBtnStyle({
      border: '',
      bgColor: '#ffa500'
    });
    setCancelBtnShow(true);
    setIsModalOpen(true);
  }

  const onOkBtn = () => {
    if (btnNum === 0) {
      setIsModalOpen(false);
    } else if (btnNum === 1) {
      setRemoveCounter(prev => prev + 1);
      setIsModalOpen(false);
    } else {
      setIsDeleted(prev => !prev);
      setIsModalOpen(false);
    }
  }

  return (
    <div className="second-page">
      <button onClick={onFirstBtn} id="first-btn">Single CTA</button>
      <button onClick={onSecondBtn} id="second-btn">Remove {removeCounter}</button>
      <button onClick={onThirdBtn} id="third-btn">{isDeleted ? 'Disabled ' : 'Delete '} {deleteCounter - 1}</button>
      <div id="testModal" className="modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h1>{modalTxts.headerTxt}</h1>
          </div>
          <div className="modal-body">
            <p>{modalTxts.bodyTxt}</p>
          </div>
          <div className="modal-footer flex justify-content-end">
            <button onClick={() => setIsModalOpen(false)} id="cancel-btn" style={{ display: cancelBtnShow ? 'block' : 'none', border: cancelBtnStyle.border, backgroundColor: cancelBtnStyle.bgColor }}>Cancel</button>
            <button onClick={() => onOkBtn()} id="ok-btn" style={{ backgroundColor: footerBtnStyle.bgColor, color: footerBtnStyle.fontColor }}>{modalTxts.footerBtnTxt}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
