import React, { Component } from 'react';
import './App.css';
import laptop from './assets/laptop.svg';

class Download extends Component {
  render() {
    return (
      <div className="Download">
        <header className="Download-header">
        <img src={laptop}  alt="laptop" style={{ maxWidth: 100}}/>
         <h1> Klik file pemasangan </h1>
        <h1>Untuk menyelesaikan.</h1>
         
         <p>Jika download kamu tidak dimulai, coba lagi.</p>
         <p>Ada masalah? Kunjungi Microsoft Store untuk mendownload.</p>
        </header>
       
      </div>
    );
  }
}

export default Download;