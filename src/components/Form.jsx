import React from 'react';

import DataPos from './DataPos';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      kode: '',
      start: false,
    }

    this._kodeChange = this._kodeChange.bind(this);
    this._onClick    = this._onClick.bind(this);
  }

  _onClick(){
    this.setState({
      start: true
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
      konten = <DataPos kode={this.state.kode} />
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