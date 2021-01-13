import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Container from './Container/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option => {
    this.setState(state => ({ [option]: state[option] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    return `${((this.state.good / this.countTotalFeedback) * 100).toFixed(1)}%`;
  }
  total = this.countTotalFeedback();
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total}
              positivPercent={this.countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <alert>No feedback given</alert>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
