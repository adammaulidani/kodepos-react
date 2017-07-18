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
      start: !this.state.start
    });
  }

  _kodeChange(e){
    this.setState({
      kode: e.target.value
    });
  }

  render(){
    var konten;
    var button_class;
    var button_name;

    if(this.state.start){
      konten = <DataPos kode={this.state.kode} />;
      button_class = 'btn btn-warning';
      button_name  = 'Kembali';
    }
    else {
      konten = '';
      button_class = 'btn btn-info';
      button_name  = 'Cari';
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
              <input type="button" className={button_class} name="cari" value={button_name} onClick={this._onClick} />
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