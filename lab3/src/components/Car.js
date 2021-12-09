class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = 25;
    }
    render () {
      return 
      <p>
        Hollo Class {this.state} {this props.brand}
        </p>
      );
    }
  }