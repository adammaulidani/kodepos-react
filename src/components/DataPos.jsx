import React from 'react';

class DataPos extends React.Component {
  render(){
    const kodepos = this.props.datapos.map((index) => 
      <tr key={index._id}>
        <td>{index.kodepos   ? index.kodepos   : '-'}</td>
        <td>{index.provinsi  ? index.provinsi  : '-'}</td>
        <td>{index.kabupaten ? index.kabupaten : '-'}</td>
        <td>{index.kota      ? index.kota      : '-'}</td>
        <td>{index.kecamatan ? index.kecamatan : '-'}</td>
        <td>{index.kelurahan ? index.kelurahan : '-'}</td>
      </tr>
    );

    const konten = (
      <table className="table">
        <thead>
          <tr>
            <th>Kode Pos</th>
            <th>Provinsi</th>
            <th>Kabupaten</th>
            <th>Kota</th>
            <th>Kecamatan</th>
            <th>Kelurahan</th>
          </tr>
        </thead>
        <tbody>
          {kodepos}
        </tbody>
      </table>
    );

    return konten;
  }
}

export default DataPos;