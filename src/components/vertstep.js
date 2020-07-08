import React from 'react'
import Color from "../constants/color"
import { rhythm } from "../utils/typography"
import { Stepper, Step, StepLabel, StepContent, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ExperienceItem from "./experience-item"
import StepComponent from "./stepcomponent"
import Prose from "../constants/prose"

class VertStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeStep: 1
    }
  }

  setActiveStep = (num) => {
    this.setState({
      activeStep: num
    })
  }

  handleBack() {
    this.setState(prevState => ({activeStep: prevState.activeStep - 1}))
  }

  handleForward() {
    this.setState(prevState => ({activeStep: prevState.activeStep + 1}))
  }

  getSteps() {
    return [
      {
        organization: 'Bubble',
        jobTitle: 'Growth',
        url: 'https://bubble.io',
        bullets: Prose.BubbleBullets,
      },
      {
        organization: 'Sakneen (YC W20)',
        jobTitle: 'Product Manager',
        url: 'https://sakneen.com',
        bullets: Prose.SakneenBullets,
      },
      {
        organization: 'Snowball',
        jobTitle: 'CEO & Founder',
        url: 'https://www.meetsnowball.com/',
        bullets: Prose.SnowballBullets,
      },
      {
        organization: 'Centerview Partners',
        jobTitle: 'IB Analyst Intern',
        url: 'https://www.centerviewpartners.com/',
        bullets: Prose.CenterviewBullets,
      },
      {
        organization: 'bluebird bio',
        jobTitle: 'Corporate Strategy Intern',
        url: 'https://www.bluebirdbio.com/',
        bullets: Prose.bluebirdBullets,
      },
      {
        organization: 'IMPACT Coalition | BCHD',
        jobTitle: 'Associate Consultant',
        url: 'https://health.baltimorecity.gov/',
        bullets: Prose.IMPACTBullets,
      }
    ]
  }

  render() {
    return(
      <div style={{display: `flex`, flexDirection: `row`}}>
        <Stepper activeStep={this.state.activeStep} orientation={`vertical`}>
          {this.getSteps().map((job, index) => (
            <Step key={index} onClick={() => this.setActiveStep(index)}>
              <StepLabel
                // style={styles.activeStep}
                StepIconComponent={StepComponent}
                StepIconProps={{
                  activeStep: this.state.activeStep
                }}
              >
                <h3 style={{marginBottom: 0}}>{job.organization}</h3>
              </StepLabel>
              <StepContent>
                <div style={{display: `flex`, flexDirection: `row`}}>
                  <ExperienceItem
                    jobTitle={job.jobTitle}
                    organization={job.organization}
                    url={job.url}
                    bullets={job.bullets}
                  />
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <div style={{display: `flex`, flexDirection: `column`, height: `100%`, alignItems: `center`, justifyContent: `center`, marginTop: 400}}>
          <IconButton
            disabled={this.state.activeStep === 0}
            onClick={() => this.handleBack()}
          >
            <ArrowDropUpIcon/>
          </IconButton>
          <IconButton
            disabled={this.state.activeStep === this.getSteps().length-1}
            onClick={() => this.handleForward()}
          >
            <ArrowDropDownIcon/>
          </IconButton>
        </div>
      </div>
    )
  }


}

export default VertStep

const styles = {
  activeStep: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }
}