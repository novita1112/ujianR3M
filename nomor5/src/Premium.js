import React, { Component } from 'react';
import './App.css';
import Paper from './Paper';
import Icon from './Icon';
class Premium extends Component {
  render() {
    return (
      <div className="Premium">
        <header className="Premium-header">
         <h1> Dapatkan 3 bulan </h1>
        <h1>Premi seharga.</h1>
         <h1>Rp 49990. </h1>
         <p>Hanya Rp 49990/bulan setelahnya.Batalkan Kapan saja. </p>
         <p>Penawaran berakhir tanggal 31 Desember 2018.</p>
        </header>
        <Paper/>
        <Icon/>
      </div>
    );
  }
}

export default Premium;
