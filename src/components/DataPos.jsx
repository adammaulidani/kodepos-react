import React from 'react';
import axios from 'axios';

class DataPos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const self = this;
    const kode = this.props.kode;

    axios.get('http://kalarau.net/api/v1/kodepos/'+kode).then(function(response){
      self.state.data = response.data.kodepos;
      self.setState({data: self.state.data});
    });
  }

  render(){
    const waiting = <div className="text-center"><i className="fa fa-spinner fa-pulse fa-5x"></i></div>;

    const kodepos = this.state.data.map((index) => 
      <tr key={index._id}>
        <td>{index.kodepos}</td>
        <td>{index.provinsi}</td>
        <td>{index.kabupaten}</td>
        <td>{index.kota === null ? '-' : index.kota}</td>
        <td>{index.kecamatan}</td>
        <td>{index.kelurahan}</td>
      </tr>
    );

    const konten = (
      <table className="table">
        <thead>
          <tr>
            <th>Kode Pos</th>
            <th>Provinsi</th>
            <th>kabupaten</th>
            <th>Kota</th>
            <th>kecamatan</th>
            <th>Kelurahan</th>
          </tr>
        </thead>
        <tbody>
          {kodepos}
        </tbody>
      </table>
    );

    return this.state.data.length > 0 ? konten : waiting;
  }
}

export default DataPos;