import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import sizeMe from 'react-sizeme'
import Confetti from 'react-confetti'
import PropTypes from 'prop-types'

ReactDOM.render(<App />, document.getElementById('root'));

const BirthdayConfetti = sizeMe({
  monitorHeight: true,
  monitorWidth: true,
})(class BirthdayConfetti extends React.PureComponent {
  static propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }
  render() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Confetti {...this.props.size} />
      </div>
    )
  }
})

ReactDOM.render(<BirthdayConfetti/>, document.getElementById('app'))

serviceWorker.unregister();
