import React,{ useState } from 'react';
import styles from "./App.module.css";

import { Statistics } from '../components/Statistics/Statistics';
import { Section } from '../components/Section/Section';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Notification } from '../components/Notification/Notification';



export const App = () => {
  
    const [good, setGood] = useState(0);
    const [neutral, setNeutral]=useState(0);
    const [bad, setBad]=useState(0);
  
  
    const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default: console.warn(`This type ${option} is not processed `)
        
    }
  };


    const countTotalFeedback = () => {
      return good + neutral + bad;
    };
    
    const TotalFeedback = good + neutral + bad;
  
    if (TotalFeedback > 0) {
      document.title = `Have got ${TotalFeedback} feedback`;
    };

    const PositiveFeedbackPercentage = () => {
      return Number.parseInt(good > 0 ? (good / countTotalFeedback()) * 100 : 0);
    };
    const options = ['good', 'neutral', 'bad'];

    
     return (
            <div className={styles.feedbackContainer}>
              <Section title="Please leave feadback">
                <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
              </Section>
               
              <Section title="Statistics">
              {countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={PositiveFeedbackPercentage()} />) :
                (<Notification message="There is no feedback" />)}
              </Section>
            </div>
        );
}


