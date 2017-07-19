import React from 'react';
import axios from 'axios';

import DataPos from './DataPos';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      kode: '',
      start: false,
      loader: true,
      data: []
    }

    this._kodeChange = this._kodeChange.bind(this);
    this._onClick    = this._onClick.bind(this);
  }

  _onClick(){
    const self = this;
    const kode = this.state.kode;

    axios.get('http://kalarau.net/api/v1/kodepos/'+kode).then(function(response){
      self.state.data = response.data.kodepos;
      self.setState({
        start: true,
        data: self.state.data
      });
    });
  }

  _kodeChange(e){
    this.setState({
      kode: e.target.value
    });
  }

  render(){
    var konten;

    if(this.state.start){
      konten = <DataPos datapos={this.state.data} />;
    }
    else {
      konten = '';
    }

    return (
      <div>
        {/* Header Form */}
        <div className="container">
          <div className="form col-sm-offset-4 col-sm-4">
            <div className="form-group">
              <label htmlFor="kode_pos">Kode Pos</label>
              <input type="text" className="form-control" name="kode_pos" onChange={this._kodeChange} />
            </div>
            <div className="form-group">
              <input type="button" className="btn btn-info" name="cari" value="Cari" onClick={this._onClick} />
            </div>
          </div>
        </div>

        {/* Konten */}
        <div className="container" style={{paddingTop: 50, paddingBottom: 50}} >
          {konten}
        </div>
      </div>
    );
  }
}

export default Form;