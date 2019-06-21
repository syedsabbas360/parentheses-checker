import React from 'react'

class Input extends React.Component {

  state ={
    value: ''
  };

  isBalanced = (str) => {
    let value = this.state.value.split('');
    console.log('value: ', value)
    let stack = [];
    let confirmedBalanced = null;
    stack.push();
    stack.pop();
    let map = {
      '(' : ')'
    };

    for (let i = 0; i < value.length; i++) {
      console.log('forloop value: ', value);

      if(!value.includes('(' || ')')){
        confirmedBalanced = false
        console.log(confirmedBalanced)
      };

      if (value[i] === '(') {
          confirmedBalanced = true
          stack.push(value[i]);
          console.log(confirmedBalanced)
      }else {
        let last = stack.pop();

        if (value[i] !== map[last]) {
          confirmedBalanced = false
          console.log(confirmedBalanced)
        };
      }

    }
    if (stack.length !== 0) {
      confirmedBalanced = false
      console.log(confirmedBalanced)
};

    console.log(confirmedBalanced);

  }

  handleOnchange = (event) => {
      this.setState({value: event.target.value});

      console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let userEntry = event.target.value

    this.isBalanced(userEntry)

  }
  render () {

    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleOnchange}/>
        <button type="button" onClick={this.handleSubmit}>Validate</button>
      </div>
    )

  }
}

export default Input;
